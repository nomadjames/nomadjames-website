// SMF0 MIDI export. Fixed drum map: kick 36, snare 38, hat 42, perc 39.
// TPQ 480; correct tempo + time signature; exact bar-count duration.

import { documentEvents } from './generate.js';
import { FAMILIES } from './families.js';
import { DEFAULT_BPM } from './model.js';

export const DRUM_NOTES = { kick: 36, snare: 38, hat: 42, perc: 39 };
export const TPQ = 480;
export const CHANNEL = 9; // zero-based channel 10

function vlq(value) {
  let bytes = [value & 0x7f];
  value >>= 7;
  while (value > 0) {
    bytes.unshift((value & 0x7f) | 0x80);
    value >>= 7;
  }
  return bytes;
}

const str = (s) => [...s].map((c) => c.charCodeAt(0) & 0xff);
const u32 = (n) => [(n >> 24) & 0xff, (n >> 16) & 0xff, (n >> 8) & 0xff, n & 0xff];
const u16 = (n) => [(n >> 8) & 0xff, n & 0xff];
const chunk = (id, payload) => [...str(id), ...u32(payload.length), ...payload];
const meta = (type, data) => [0xff, type, ...vlq(data.length), ...data];

/**
 * Serialize a Groove Dice document to SMF0 bytes.
 * @param {object} doc canonical document
 * @param {{bpm?: number}} opts
 */
export function documentToMidi(doc, { bpm } = {}) {
  const tempo = bpm ?? doc.bpm ?? DEFAULT_BPM;
  const usPerQuarter = Math.round(60000000 / tempo);
  const meter = doc.measures[0].meter;
  const num = meter[0];
  const den = meter[1];
  const ticksPerBeat = TPQ * (4 / den);
  const endTick = Math.round(doc.bars * num * ticksPerBeat);

  const events = [];
  events.push({ tick: 0, order: 0, bytes: meta(0x03, str('Groove Dice')) });
  events.push({ tick: 0, order: 1, bytes: meta(0x58, [num, Math.round(Math.log2(den)), 24, 8]) });
  events.push({
    tick: 0, order: 2,
    bytes: meta(0x51, [(usPerQuarter >> 16) & 0xff, (usPerQuarter >> 8) & 0xff, usPerQuarter & 0xff]),
  });
  events.push({ tick: 0, order: 3, bytes: meta(0x06, str(`seed ${doc.seed}`)) });

  for (const ev of documentEvents(doc)) {
    const stepTicks = ticksPerBeat / 4;
    const startTick = Math.max(0, Math.min(endTick - 1,
      Math.round(ev.absoluteStep * stepTicks + ev.offset * stepTicks)));
    const note = DRUM_NOTES[ev.role] ?? 38;
    const vel = Math.max(1, Math.min(127, Math.round(ev.velocity)));
    const durTicks = Math.max(10, Math.round(stepTicks * 0.9));
    events.push({ tick: startTick, order: 5, bytes: [0x90 | CHANNEL, note, vel] });
    events.push({ tick: Math.min(endTick, startTick + durTicks), order: 4, bytes: [0x80 | CHANNEL, note, 0x40] });
  }

  events.push({ tick: endTick, order: 9, bytes: meta(0x2f, []) });
  events.sort((a, b) => a.tick - b.tick || a.order - b.order);

  const payload = [];
  let prev = 0;
  for (const e of events) {
    payload.push(...vlq(e.tick - prev));
    payload.push(...e.bytes);
    prev = e.tick;
  }

  return new Uint8Array([
    ...chunk('MThd', [...u16(0), ...u16(1), ...u16(TPQ)]),
    ...chunk('MTrk', payload),
  ]);
}

/** Sanitized filename identifying family, mode, bars, bpm, seed. */
export function midiFileName(doc, { mode = 'mixed' } = {}) {
  const fam = FAMILIES[doc.family]?.name ?? 'random';
  const modes = [...new Set(doc.measures.slice(0, doc.bars).map((m) => m.mode))];
  const m = modes.length === 1 ? modes[0] : mode;
  const parts = [
    'groove-dice',
    fam.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    m,
    `${doc.bars}bar`,
    `${doc.bpm ?? DEFAULT_BPM}bpm`,
    `seed-${String(doc.seed).replace(/[^a-zA-Z0-9-]/g, '')}`,
  ];
  return parts.join('_') + '.mid';
}
