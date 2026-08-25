// Deterministic generation orchestration: roll, regenerate active bar,
// per-bar Groove/Fill semantics.

import {
  setTransformedBarNotes,
  makeRng,
  slotsForMeter,
  randomSeed,
  DEFAULT_BPM,
} from './model.js';
import {
  FAMILIES,
  FAMILY_KEYS,
  KITS,
  generateBarNotes,
} from './families.js';

export { FAMILIES, FAMILY_KEYS, KITS };

/**
 * Roll the die: new seed, family, kit, and every bar's pattern. The values
 * displayed after a previous roll are results, not implicit locks. Bar mode is
 * preserved, while each bar's meter follows the newly selected family.
 */
export function rollDocument(doc, seed = randomSeed()) {
  const rng = makeRng(seed);
  doc.seed = seed;
  const previousFamily = doc.family;
  const previousKit = doc.kit;
  doc.family = pickDifferentFamily(rng, previousFamily);
  doc.kit = pickDifferentKit(rng, previousKit);
  const fam = FAMILIES[doc.family];
  for (let i = 0; i < doc.bars; i++) {
    doc.measures[i].meter = [...fam.meter];
    generateIntoBar(doc, i, doc.measures[i].mode);
  }
  return doc;
}

function pickDifferentFamily(rng, previous) {
  const choices = FAMILY_KEYS.filter((key) => key !== previous);
  return choices[Math.floor(rng() * choices.length)];
}

function pickDifferentKit(rng, previous) {
  const choices = KITS.filter((kit) => kit.id !== previous);
  return choices[Math.floor(rng() * choices.length)].id;
}

/** NEW SEED: keep family/kit/settings, change only the variation. */
export function newSeed(doc, seed = randomSeed()) {
  doc.seed = seed;
  for (let i = 0; i < doc.bars; i++) {
    generateIntoBar(doc, i, doc.measures[i].mode);
  }
  return doc;
}

/** Regenerate only the selected bar in its own mode. Other bars untouched. */
export function regenerateBar(doc, barIndex, mode = doc.measures[barIndex].mode) {
  doc.measures[barIndex].mode = mode;
  // Meter follows the family unless the bar already holds a user meter.
  const fam = FAMILIES[doc.family];
  if (fam && doc.measures.every((m) => !m.filled || sameMeter(m.meter, fam.meter))) {
    doc.measures.forEach((m) => { m.meter = [...fam.meter]; });
  }
  generateIntoBar(doc, barIndex, mode);
  return doc;
}

function generateIntoBar(doc, barIndex, mode) {
  const meter = doc.measures[barIndex].meter;
  const generated = generateBarNotes(doc.family, mode, doc.seed, barIndex, meter);
  const bar = doc.measures[barIndex];
  bar.generatedNotes = generated.map((n) => ({ ...n }));
  bar.manualNotes = [];
  bar.suppressedNotes = [];
  bar.mode = mode;
  refreshBarControls(doc, barIndex);
}

/** Rebuild every visible bar from an immutable generated basis plus fixed paint. */
export function refreshDocumentControls(doc) {
  for (let i = 0; i < doc.bars; i++) refreshBarControls(doc, i);
  return doc;
}

function refreshBarControls(doc, barIndex) {
  const bar = doc.measures[barIndex];
  if (!bar.generatedNotes?.length && !bar.manualNotes?.length) return;
  const suppressed = new Set(bar.suppressedNotes ?? []);
  // Manual paint is an override at a stable position, never a second hit.
  // Build generated first, then replace same-position entries with manual data.
  const byPosition = new Map();
  for (const note of bar.generatedNotes ?? []) byPosition.set(`${note.role}:${note.slot}`, note);
  for (const note of bar.manualNotes ?? []) byPosition.set(`${note.role}:${note.slot}`, note);
  const base = [...byPosition.entries()]
    .filter(([key]) => !suppressed.has(key))
    .map(([, note]) => ({ ...note }));
  const notes = applyDensity(
    doc.family,
    base,
    doc.density,
    makeRng(doc.seed, 'density', barIndex),
    slotsForMeter(bar.meter),
    bar.manualNotes ?? [],
    bar.suppressedNotes ?? [],
  );
  applyFeel(notes, doc.feel);
  const humanRng = makeRng(doc.seed, 'humanize', barIndex);
  const amount = Math.max(0, Math.min(1, Number(doc.humanize) || 0));
  for (const nt of notes) {
    const jitter = (humanRng() * 2 - 1) * 0.3 * amount;
    nt.offset = Math.max(-0.5, Math.min(0.5, Number(nt.offset) + jitter));
    nt.velocity = clamp(nt.velocity + Math.round((humanRng() - 0.5) * 30 * amount));
  }
  setTransformedBarNotes(doc, barIndex, notes);
}

function applyDensity(familyKey, notes, density, rng, slots, manualNotes = [], suppressedNotes = []) {
  const fam = FAMILIES[familyKey];
  const anchorSet = new Set();
  if (fam) {
    for (const [role, list] of Object.entries(fam.anchors)) {
      for (const s of list) anchorSet.add(`${role}:${s}`);
    }
  }
  const manualSet = new Set(manualNotes.map((n) => `${n.role}:${n.slot}`));
  const suppressedSet = new Set(suppressedNotes);
  const isAnchor = (nt) => manualSet.has(`${nt.role}:${nt.slot}`) || anchorSet.has(`${nt.role}:${nt.slot}`);
  const optional = notes.filter((nt) => !isAnchor(nt));
  const amount = Math.max(0, Math.min(1, Number(density) || 0));
  const candidates = densityCandidates(familyKey, slots, rng);
  const target = Math.round((optional.length + candidates.length) * (0.15 + amount * 0.95));
  if (optional.length > target) {
    const drop = new Set(optional
      .slice().sort((a, b) => a.velocity - b.velocity || a.slot - b.slot)
      .slice(0, optional.length - target).map(keyNote));
    return notes.filter((nt) => isAnchor(nt) || !drop.has(keyNote(nt)));
  }
  if (optional.length < target && amount > 0.35) {
    const out = notes.slice();
    for (const candidate of candidates) {
      if (out.filter((nt) => !isAnchor(nt)).length >= target) break;
      if (suppressedSet.has(`${candidate.role}:${candidate.slot}`)) continue;
      if (!out.some((nt) => nt.role === candidate.role && nt.slot === candidate.slot)) out.push(candidate);
    }
    return out;
  }
  return notes;
}

function densityCandidates(familyKey, slots, rng) {
  const patterns = {
    'crooked-pocket': [['hat', 1], ['hat', 5], ['hat', 9], ['hat', 13], ['perc', 3], ['perc', 10], ['snare', 15]],
    'uk-swing': [['hat', 1], ['hat', 5], ['hat', 9], ['hat', 13], ['perc', 6], ['perc', 14], ['kick', 15]],
    'five-count-break': [['hat', 1], ['hat', 5], ['hat', 9], ['hat', 13], ['hat', 17], ['kick', 14], ['snare', 19]],
    'dirty-machine': [['hat', 0], ['hat', 4], ['hat', 8], ['hat', 12], ['perc', 3], ['perc', 11], ['perc', 15]],
    'ghost-hardware': [['snare', 1], ['snare', 5], ['snare', 13], ['hat', 2], ['hat', 6], ['perc', 12]],
    'lo-fi-circuit': [['hat', 1], ['hat', 5], ['hat', 9], ['hat', 13], ['perc', 7], ['perc', 15]],
    'anchor-ghosts': [['snare', 1], ['snare', 6], ['snare', 11], ['snare', 15], ['perc', 3], ['perc', 14]],
    'found-object-skeleton': [['perc', 0], ['perc', 7], ['perc', 9], ['perc', 15], ['hat', 4], ['hat', 12]],
  }[familyKey] ?? [['hat', 1], ['hat', 5], ['perc', 7], ['perc', 15]];
  const shift = Math.floor(rng() * Math.max(1, Math.min(4, slots / 8))) * 2;
  return patterns.map(([role, slot], i) => ({ role, slot: (slot + (i % 2 ? shift : 0)) % slots, velocity: 44 + ((i * 7) % 25), offset: 0 }));
}

function applyFeel(notes, feel = 0.5) {
  const numericFeel = Number(feel);
  const normalizedFeel = Number.isFinite(numericFeel) ? numericFeel : 0.5;
  const amount = (Math.max(0, Math.min(1, normalizedFeel)) - 0.5) * 0.5;
  for (const note of notes) {
    if ((note.role === 'hat' || note.role === 'perc') && note.slot % 2 === 1) {
      note.offset = Math.max(-0.5, Math.min(0.5, Number(note.offset) + amount));
    }
  }
}

function keyNote(nt) {
  return `${nt.role}:${nt.slot}:${nt.velocity}:${nt.offset}`;
}

function clamp(v) {
  return Math.max(1, Math.min(127, v));
}

function sameMeter(a, b) {
  return a[0] === b[0] && a[1] === b[1];
}

/** Flatten all bars into playback/export note events with absolute positions. */
export function documentEvents(doc) {
  const events = [];
  for (let b = 0; b < doc.bars; b++) {
    const bar = doc.measures[b];
    const slots = slotsForMeter(bar.meter);
    for (const nt of bar.notes) {
      events.push({
        bar: b,
        role: nt.role,
        slotInBar: nt.slot,
        absoluteStep: b * slots + nt.slot,
        velocity: nt.velocity,
        offset: nt.offset,
        mode: bar.mode,
      });
    }
  }
  events.sort((a, b) => a.absoluteStep - b.absoluteStep);
  return events;
}

/** Shared timing/settings plan consumed by live playback and WAV export. */
export function documentAudioPlan(doc, { bpm } = {}) {
  const tempo = bpm ?? doc.bpm ?? DEFAULT_BPM;
  const meter = doc.measures[0].meter;
  const stepSec = 60 / tempo / 4;
  return {
    bpm: tempo,
    meter: [...meter],
    bars: doc.bars,
    events: documentEvents(doc),
    kit: doc.kit,
    volume: doc.volume ?? 0.8,
    stepSec,
    durationSec: doc.bars * slotsForMeter(meter) * stepSec,
  };
}
