// Eight deterministic, rule-bound groove families.
// Each grammar defines: anchors, syncopation zones, velocity behaviour,
// timing behaviour, density bounds, and phrase-boundary (fill) behaviour.
// Slots are sixteenth notes: 16 per 4/4 bar, 20 per 5/4 bar.

import { makeRng, slotsForMeter } from './model.js';

export const FAMILIES = {
  'crooked-pocket': {
    name: 'Crooked Pocket',
    meter: [4, 4],
    defaultBpm: 96,
    blurb: 'Backbeat anchors stay put while hats push and pull on uneven rational subdivisions.',
    anchors: { kick: [0, 8], snare: [4, 12] },
    generate(rng, slots, mode) {
      const notes = [];
      const push = pick(rng, [[0, 8], [0, 10, 8], [0, 8, 14]]);
      for (const s of push) notes.push(n('kick', s, 112));
      for (const s of [4, 12]) notes.push(n('snare', s, 108));
      if (rng() < 0.4) notes.push(n('snare', 14, 52)); // ghost
      const lean = pick(rng, [[0, 3], [0, 2], [0, 3, 8]]);
      for (let b = 0; b < 4; b++) {
        notes.push(n('hat', b * 4 + lean[0], 84));
        if (rng() < 0.8) notes.push(n('hat', b * 4 + lean[1 % lean.length], 64));
      }
      notes.push(n('perc', 6, 66));
      if (rng() < 0.5) notes.push(n('perc', 11, 60));
      if (mode === 'fill') shapeFill(notes, rng, slots, ['snare', 'perc'], 0.6, this.anchors);
      return notes;
    },
  },

  'uk-swing': {
    name: 'UK Swing',
    meter: [4, 4],
    defaultBpm: 132,
    blurb: 'Straight anchors with triplet-island swing on hats and rim percussion.',
    anchors: { kick: [0], snare: [4, 12] },
    generate(rng, slots, mode) {
      const notes = [n('kick', 0, 116)];
      if (rng() < 0.7) notes.push(n('kick', 10, 98));
      notes.push(n('snare', 4, 110), n('snare', 12, 114));
      for (let s = 0; s < 16; s += 2) notes.push(n('hat', s, s % 4 === 0 ? 88 : 62));
      // triplet island: offset a pair of hats toward the swing position
      const island = pick(rng, [[3, 6], [7, 10], [11, 14]]);
      for (const s of island) notes.push(n('hat', s, 70, 0.18));
      notes.push(n('perc', 15, 58));
      if (mode === 'fill') shapeFill(notes, rng, slots, ['snare'], 0.7, this.anchors);
      return notes;
    },
  },

  'five-count-break': {
    name: 'Five-Count Break',
    meter: [5, 4],
    defaultBpm: 104,
    blurb: 'True 5/4: stable kick on one, eighth-note ruler, kick/snare call and response.',
    anchors: { kick: [0], snare: [8] },
    generate(rng, slots, mode) {
      const notes = [n('kick', 0, 118)];
      notes.push(n('snare', 8, 112)); // snare lands on beat 3
      // eighth-note hat ruler over 20 slots
      for (let s = 0; s < slots; s += 2) notes.push(n('hat', s, s % 4 === 0 ? 86 : 60));
      // call-and-response kicks/snares in the back half
      const answer = pick(rng, [[12, 16], [13, 18], [12, 17]]);
      notes.push(n('kick', answer[0], 100));
      notes.push(n('snare', answer[1], 104));
      if (rng() < 0.5) notes.push(n('kick', 6, 92));
      notes.push(n('perc', 19, 62));
      if (mode === 'fill') shapeFill(notes, rng, slots, ['snare', 'kick'], 0.65, this.anchors);
      return notes;
    },
  },

  'dirty-machine': {
    name: 'Dirty Machine',
    meter: [4, 4],
    defaultBpm: 124,
    blurb: 'Rigid four-on-the-floor grid with grit: hats straight and hard, perc dirty.',
    anchors: { kick: [0, 4, 8, 12], snare: [4, 12] },
    generate(rng, slots, mode) {
      const notes = [];
      for (const s of [0, 4, 8, 12]) notes.push(n('kick', s, 118));
      for (const s of [4, 12]) notes.push(n('snare', s, 106));
      for (let s = 2; s < 16; s += 4) notes.push(n('hat', s, 92));
      notes.push(n('perc', 7, 70), n('perc', 13, 66));
      if (rng() < 0.5) notes.push(n('perc', 15, 74));
      if (mode === 'fill') shapeFill(notes, rng, slots, ['perc', 'snare'], 0.75, this.anchors);
      return notes;
    },
  },

  'ghost-hardware': {
    name: 'Ghost Hardware',
    meter: [4, 4],
    defaultBpm: 88,
    blurb: 'Sparse anchors buried in ghost-note texture and mechanical microtiming.',
    anchors: { kick: [0], snare: [8] },
    generate(rng, slots, mode) {
      const notes = [n('kick', 0, 120)];
      if (rng() < 0.6) notes.push(n('kick', 11, 88, -0.15));
      notes.push(n('snare', 8, 110));
      for (const s of [3, 6, 10, 14]) if (rng() < 0.75) notes.push(n('snare', s, 34));
      for (let s = 0; s < 16; s += 4) notes.push(n('hat', s, 76));
      notes.push(n('perc', 9, 54));
      if (mode === 'fill') shapeFill(notes, rng, slots, ['snare'], 0.55, this.anchors);
      return notes;
    },
  },

  'lo-fi-circuit': {
    name: 'Lo-fi Circuit',
    meter: [4, 4],
    defaultBpm: 78,
    blurb: 'Dusty half-time pocket: heavy kick, lazy snare, soft shuffled hats.',
    anchors: { kick: [0, 10], snare: [8] },
    generate(rng, slots, mode) {
      const notes = [n('kick', 0, 116), n('kick', 10, 96, 0.12)];
      notes.push(n('snare', 8, 104));
      for (let b = 0; b < 4; b++) {
        notes.push(n('hat', b * 4, 78));
        if (rng() < 0.85) notes.push(n('hat', b * 4 + 3, 56, 0.2));
      }
      notes.push(n('perc', 14, 50));
      if (mode === 'fill') shapeFill(notes, rng, slots, ['snare', 'perc'], 0.5, this.anchors);
      return notes;
    },
  },

  'anchor-ghosts': {
    name: 'Anchor + Ghosts',
    meter: [4, 4],
    defaultBpm: 100,
    blurb: 'Rock-steady kick/snare frame with dense ghost snare chatter between.',
    anchors: { kick: [0, 6], snare: [4, 12] },
    generate(rng, slots, mode) {
      const notes = [n('kick', 0, 114), n('kick', 6, 100)];
      notes.push(n('snare', 4, 112), n('snare', 12, 112));
      for (const s of [2, 7, 10, 15]) if (rng() < 0.8) notes.push(n('snare', s, 36));
      for (let s = 0; s < 16; s += 2) notes.push(n('hat', s, s % 4 === 0 ? 82 : 58));
      if (mode === 'fill') shapeFill(notes, rng, slots, ['snare'], 0.6, this.anchors);
      return notes;
    },
  },

  'found-object-skeleton': {
    name: 'Found-object Skeleton',
    meter: [4, 4],
    defaultBpm: 112,
    blurb: 'Minimal skeleton of hits with percussive found-sound accents in the gaps.',
    anchors: { kick: [0], snare: [8] },
    generate(rng, slots, mode) {
      const notes = [n('kick', 0, 112)];
      if (rng() < 0.6) notes.push(n('kick', 7, 90));
      notes.push(n('snare', 8, 106));
      notes.push(n('perc', 2, 72), n('perc', 5, 58), n('perc', 11, 66));
      if (rng() < 0.6) notes.push(n('perc', 14, 62));
      for (let s = 0; s < 16; s += 8) notes.push(n('hat', s, 70));
      if (mode === 'fill') shapeFill(notes, rng, slots, ['perc'], 0.7, this.anchors);
      return notes;
    },
  },
};

export const FAMILY_KEYS = Object.keys(FAMILIES);

export function pickFamily(rng, selection) {
  if (selection && selection !== 'random' && FAMILIES[selection]) return selection;
  return FAMILY_KEYS[Math.floor(rng() * FAMILY_KEYS.length)];
}

export const KITS = [
  { id: 'punch-card', name: 'Punch Card' },
  { id: 'tape-room', name: 'Tape Room' },
  { id: 'glass-steel', name: 'Glass & Steel' },
  { id: 'dust-shell', name: 'Dust Shell' },
  { id: 'neon-rubber', name: 'Neon Rubber' },
];

export function pickKit(rng, selection) {
  if (selection && selection !== 'random' && KITS.some((k) => k.id === selection)) return selection;
  return KITS[Math.floor(rng() * KITS.length)].id;
}

// ---------------------------------------------------------------------------
// Shared note + fill helpers
// ---------------------------------------------------------------------------

function n(role, slot, velocity, offset = 0) {
  return { role, slot, velocity, offset };
}

function pick(rng, arr) {
  return arr[Math.floor(rng() * arr.length)];
}

/**
 * Turn the end of a groove into a short transition phrase.
 *
 * Fills use one rhythmic motif, a little space, a rising dynamic contour,
 * and at most two simultaneous voices. Strong kick/snare anchors survive;
 * incidental tail chatter is removed so the fill reads as a phrase rather
 * than generic density inflation. The preserved kick on slot zero supplies
 * the resolution when the document loops into the next measure.
 */
function shapeFill(notes, rng, slots, roles, intensity, anchors) {
  const phraseStart = Math.max(0, slots - 8);
  const strongAnchor = (note) =>
    note.slot >= phraseStart && (anchors[note.role] ?? []).includes(note.slot);

  const retained = notes.filter((note) => note.slot < phraseStart || strongAnchor(note));
  notes.splice(0, notes.length, ...retained);

  // Subtle quarter-bar fills dominate; higher-intensity families sometimes
  // get a half-bar phrase. Every motif contains rests and ends decisively.
  const useHalfBar = rng() < Math.max(0.1, intensity - 0.45);
  const length = useHalfBar ? 8 : 4;
  const start = slots - length;
  const patterns = length === 4
    ? [[0, 2, 3], [0, 1, 3], [1, 2, 3]]
    : [[0, 2, 3, 4, 6, 7], [0, 2, 4, 5, 7], [0, 1, 3, 4, 6, 7]];
  const pattern = pick(rng, patterns);

  pattern.forEach((step, index) => {
    const slot = start + step;
    const occupancy = notes.filter((note) => note.slot === slot).length;
    if (occupancy >= 2 && slot !== slots - 1) return;

    const roleIndex = Math.min(
      roles.length - 1,
      Math.floor(index * roles.length / pattern.length),
    );
    const role = roles[roleIndex];
    const progress = pattern.length === 1 ? 1 : index / (pattern.length - 1);
    const velocity = slot === slots - 1 ? 120 : Math.round(68 + progress * 32);

    const duplicate = notes.some((note) => note.slot === slot && note.role === role);
    if (!duplicate) notes.push(n(role, slot, velocity));
  });

  // A final stroke is the punctuation that cues the next downbeat.
  const lastSlot = slots - 1;
  const final = notes.find((note) => note.slot === lastSlot);
  if (final) final.velocity = Math.max(final.velocity, 114);
  else notes.push(n(roles[roles.length - 1], lastSlot, 114));

  return notes;
}

function addSeedMotif(notes, familyKey, slots, rng) {
  const motifs = {
    'crooked-pocket': [[['hat', 1], ['hat', 6], ['perc', 10]], [['hat', 2], ['hat', 7], ['perc', 13]], [['hat', 1], ['hat', 5], ['snare', 15]], [['hat', 3], ['hat', 6], ['perc', 11]]],
    'uk-swing': [[['hat', 3], ['hat', 7], ['perc', 11]], [['hat', 1], ['hat', 6], ['perc', 14]], [['hat', 5], ['hat', 10], ['kick', 15]], [['hat', 3], ['hat', 11], ['perc', 15]]],
    'five-count-break': [[['kick', 6], ['hat', 7], ['snare', 14]], [['kick', 10], ['hat', 11], ['snare', 17]], [['kick', 13], ['hat', 15], ['perc', 18]], [['snare', 5], ['hat', 9], ['kick', 16]]],
    'dirty-machine': [[['perc', 3], ['perc', 7], ['hat', 14]], [['perc', 1], ['perc', 9], ['hat', 6]], [['perc', 5], ['perc', 11], ['hat', 10]], [['perc', 3], ['perc', 13], ['snare', 15]]],
    'ghost-hardware': [[['snare', 2], ['snare', 6], ['perc', 13]], [['snare', 3], ['snare', 10], ['hat', 7]], [['snare', 5], ['snare', 12], ['perc', 15]], [['snare', 1], ['snare', 9], ['hat', 14]]],
    'lo-fi-circuit': [[['hat', 1], ['hat', 6], ['perc', 13]], [['hat', 3], ['hat', 7], ['perc', 15]], [['hat', 5], ['hat', 10], ['perc', 12]], [['hat', 1], ['hat', 9], ['snare', 15]]],
    'anchor-ghosts': [[['snare', 1], ['snare', 6], ['perc', 13]], [['snare', 3], ['snare', 9], ['perc', 15]], [['snare', 5], ['snare', 11], ['hat', 13]], [['snare', 2], ['snare', 7], ['perc', 14]]],
    'found-object-skeleton': [[['perc', 1], ['perc', 7], ['hat', 13]], [['perc', 3], ['perc', 9], ['perc', 15]], [['perc', 4], ['perc', 12], ['kick', 14]], [['perc', 6], ['perc', 11], ['hat', 15]]],
  }[familyKey];
  if (!motifs) return;
  const motif = motifs[Math.floor(rng() * motifs.length)];
  motif.forEach(([role, rawSlot], index) => {
    const slot = rawSlot % slots;
    if (!notes.some((note) => note.role === role && note.slot === slot)) {
      notes.push(n(role, slot, 48 + index * 12, index === 1 ? 0.08 : 0));
    }
  });
  const lanes = {
    'crooked-pocket': ['hat', 'hat', 'perc', 'hat'],
    'uk-swing': ['hat', 'hat', 'perc', 'kick'],
    'five-count-break': ['kick', 'hat', 'snare', 'perc'],
    'dirty-machine': ['perc', 'perc', 'hat', 'perc'],
    'ghost-hardware': ['snare', 'snare', 'hat', 'perc'],
    'lo-fi-circuit': ['hat', 'hat', 'perc', 'snare'],
    'anchor-ghosts': ['snare', 'snare', 'perc', 'hat'],
    'found-object-skeleton': ['perc', 'perc', 'hat', 'kick'],
  }[familyKey] ?? ['hat', 'hat', 'perc', 'perc'];
  const phase = Math.floor(rng() * slots);
  [1, 4, 7, 10].forEach((distance, index) => {
    const role = lanes[index];
    const slot = (phase + distance) % slots;
    if (!notes.some((note) => note.role === role && note.slot === slot)) {
      notes.push(n(role, slot, 40 + index * 9, index % 2 ? -0.06 : 0.04));
    }
  });
  const phaseTwo = Math.floor(rng() * slots);
  [0, 3, 6, 9, 12].forEach((distance, index) => {
    const role = lanes[(index + 1) % lanes.length];
    const slot = (phaseTwo + distance) % slots;
    if (!notes.some((note) => note.role === role && note.slot === slot)) {
      notes.push(n(role, slot, 52 + index * 6, 0));
    }
  });
}
export function validateFamilyBar(familyKey, bar, mode) {
  const fam = FAMILIES[familyKey];
  if (!fam) return false;
  const slots = slotsForMeter(bar.meter);
  for (const [role, anchorSlots] of Object.entries(fam.anchors)) {
    for (const s of anchorSlots) {
      if (s >= slots) continue;
      if (!bar.notes.some((x) => x.role === role && x.slot === s)) return false;
    }
  }
  for (const x of bar.notes) {
    if (x.slot < 0 || x.slot >= slots) return false;
  }
  if (mode === 'fill') {
    const phrase = bar.notes.filter((note) => note.slot >= slots - 8);
    const bySlot = new Map();
    for (const note of phrase) {
      bySlot.set(note.slot, (bySlot.get(note.slot) ?? 0) + 1);
    }
    if (bySlot.size < 3 || phrase.length > 8) return false;
    if (Math.max(...bySlot.values()) > 2) return false;
    if (!bar.notes.some((note) => note.slot === slots - 1 && note.velocity >= 108)) return false;
  }
  return true;
}

/** Generate one bar's notes deterministically. */
export function generateBarNotes(familyKey, mode, seed, barIndex, meter) {
  const fam = FAMILIES[familyKey] ?? FAMILIES['crooked-pocket'];
  const rng = makeRng(seed, familyKey, mode, barIndex, meter.join('/'));
  const notes = fam.generate(rng, slotsForMeter(meter), mode);
  if (mode !== 'fill') addSeedMotif(notes, familyKey, slotsForMeter(meter), rng);
  return notes;
}
