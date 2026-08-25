// Groove Dice canonical document model.
// One document holds 1-4 bars; each bar owns meter, mode (groove|fill),
// and exact editable notes: { role, slot, velocity, offset }.
// Slots are fixed sixteenths: 16 for 4/4, 20 for 5/4.

export const ROLES = ['kick', 'snare', 'hat', 'perc'];
export const ROLE_LABELS = {
  kick: 'Kick',
  snare: 'Snare',
  hat: 'Closed Hat',
  perc: 'Percussion',
};
export const MODES = ['groove', 'fill'];
export const MAX_BARS = 4;
export const DEFAULT_BPM = 96;

export function hashSeed(str) {
  const s = String(str);
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

export function mulberry32(seedInt) {
  let a = seedInt >>> 0;
  return function next() {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function makeRng(seedStr, ...scope) {
  return mulberry32(hashSeed([seedStr, ...scope].join('|')));
}

export function randomSeed() {
  return Math.floor(Math.random() * 0xffffffff).toString(36);
}

export function slotsForMeter(meter) {
  // Sixteenth grid: beats * 4
  return meter[0] * 4;
}

export function createDocument({
  seed = 'groove',
  family = 'random',
  kit = 'random',
  bars = 2,
  bpm = DEFAULT_BPM,
  density = 0.5,
  feel = 0.5,
  humanize = 0.3,
  volume = 0.8,
} = {}) {
  return {
    seed,
    family,
    kit,
    bars,
    bpm,
    density,
    feel,
    humanize,
    volume,
    measures: Array.from({ length: MAX_BARS }, (_, i) => ({
      meter: [4, 4],
      mode: 'groove',
      notes: [],
      // Stable provenance basis for live Density/Humanize transforms.
      generatedNotes: [],
      manualNotes: [],
      suppressedNotes: [],
      filled: false, // has this bar been generated yet?
      barIndex: i,
    })),
  };
}

export function activeBars(doc) {
  return doc.measures.slice(0, doc.bars);
}

export function setBarCount(doc, n) {
  doc.bars = Math.max(1, Math.min(MAX_BARS, Math.round(n)));
  return doc;
}

/** Replace one bar's exact notes (used by generation and bulk edit). */
export function setBarNotes(doc, barIndex, notes) {
  doc.measures[barIndex] = {
    ...doc.measures[barIndex],
    notes: notes.map(sanitizeNote),
    generatedNotes: notes.map(sanitizeNote),
    manualNotes: [],
    suppressedNotes: [],
    filled: true,
  };
  return doc;
}

/** Replace the visible notes while preserving generated/manual provenance. */
export function setTransformedBarNotes(doc, barIndex, notes) {
  doc.measures[barIndex].notes = notes.map(sanitizeNote);
  doc.measures[barIndex].filled = true;
  return doc;
}

export function addManualNote(bar, note) {
  const clean = sanitizeNote(note);
  removeSuppressedNote(bar, clean.role, clean.slot);
  const manual = (bar.manualNotes ??= []);
  const index = manual.findIndex((n) => n.role === clean.role && n.slot === clean.slot);
  if (index >= 0) manual[index] = clean;
  else manual.push(clean);
  return clean;
}

export function removeManualNote(bar, role, slot) {
  if (!bar.manualNotes) return;
  bar.manualNotes = bar.manualNotes.filter((n) => !(n.role === role && n.slot === slot));
}

export function suppressNote(bar, role, slot) {
  const key = `${role}:${slot}`;
  if (!(bar.suppressedNotes ?? []).includes(key)) (bar.suppressedNotes ??= []).push(key);
  bar.manualNotes = (bar.manualNotes ?? []).filter((n) => !(n.role === role && n.slot === slot));
}

export function removeSuppressedNote(bar, role, slot) {
  const key = `${role}:${slot}`;
  bar.suppressedNotes = (bar.suppressedNotes ?? []).filter((item) => item !== key);
}

export function sanitizeNote(n) {
  return {
    role: ROLES.includes(n.role) ? n.role : 'perc',
    slot: clampInt(Math.round(n.slot), 0, 1023),
    velocity: clampInt(Math.round(n.velocity), 1, 127),
    offset: Math.max(-0.5, Math.min(0.5, Number(n.offset) || 0)),
  };
}

export function toggleNote(bar, role, slot, velocity = 100, offset = 0) {
  const i = bar.notes.findIndex((n) => n.role === role && n.slot === slot);
  if (i >= 0) bar.notes.splice(i, 1);
  else bar.notes.push({ role, slot, velocity, offset });
  return bar.notes;
}

/** Pure paint/erase gesture state: first cell decides the mode. */
export function makePaintGesture() {
  let mode = null;
  return {
    visit(bar, role, slot, velocity = 100) {
      const existing = bar.notes.some((n) => n.role === role && n.slot === slot);
      if (mode === null) mode = existing ? 'erase' : 'paint';
      if (mode === 'erase') {
        const i = bar.notes.findIndex((n) => n.role === role && n.slot === slot);
        if (i >= 0) bar.notes.splice(i, 1);
      } else if (!existing) {
        bar.notes.push({ role, slot, velocity, offset: 0 });
      }
      return mode;
    },
    get mode() {
      return mode;
    },
  };
}

/** Deterministic microtiming + velocity variation after the pattern exists. */
export function applyHumanize(bar, amount, rng) {
  if (amount <= 0) return bar;
  const maxShift = 0.35 * amount; // in sixteenth-steps
  for (const n of bar.notes) {
    const jitter = (rng() * 2 - 1) * maxShift;
    n.offset = Math.max(-0.5, Math.min(0.5, n.offset + jitter));
    n.velocity = clampInt(Math.round(n.velocity * (1 - amount * 0.25 + rng() * amount * 0.25)), 1, 127);
  }
  return bar;
}

function clampInt(v, lo, hi) {
  v = Math.round(Number(v));
  if (!Number.isFinite(v)) return lo;
  return Math.max(lo, Math.min(hi, v));
}
