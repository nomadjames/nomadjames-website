// Deterministic 16-bit PCM mono WAV encoder + pure JS drum synthesis renderer.
// Same voice definitions as the Web Audio live engine (see audio.js) so kit
// identity is identical in playback and export.

import { documentAudioPlan } from './generate.js';

export const SAMPLE_RATE = 44100;

/**
 * Encode mono Float32 samples into a RIFF/WAVE 16-bit PCM byte array.
 */
export function encodeWav16(samples, sampleRate = SAMPLE_RATE) {
  const dataBytes = samples.length * 2;
  const buf = new ArrayBuffer(44 + dataBytes);
  const view = new DataView(buf);
  writeAscii(view, 0, 'RIFF');
  view.setUint32(4, 36 + dataBytes, true);
  writeAscii(view, 8, 'WAVE');
  writeAscii(view, 12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true); // PCM
  view.setUint16(22, 1, true); // mono
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true);
  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true);
  writeAscii(view, 36, 'data');
  view.setUint32(40, dataBytes, true);
  let off = 44;
  for (let i = 0; i < samples.length; i++) {
    view.setInt16(off, floatToPcm16(samples[i]), true);
    off += 2;
  }
  return new Uint8Array(buf);
}

export function floatToPcm16(sample) {
  let s = Number(sample) || 0;
  s = s < -1 ? -1 : s > 1 ? 1 : s;
  const canonical = Math.round(s * 1e6) / 1e6;
  return Math.round(canonical * 32767);
}

function writeAscii(view, offset, text) {
  for (let i = 0; i < text.length; i++) view.setUint8(offset + i, text.charCodeAt(i));
}

// ---------------------------------------------------------------------------
// Pure synthesized drum voices. Each takes (out, startSample, vel01, rng).
// Kits change waveform shape, tuning, decay and noisiness — audibly distinct.
// ---------------------------------------------------------------------------

export const KIT_VOICES = {
  'punch-card': { kickTune: 58, kickDecay: 0.24, snareTone: 210, snareNoise: 0.7, hatDecay: 0.05, hatRing: 7000, percWave: 'square', percDecay: 0.09, drive: 1.6 },
  'tape-room': { kickTune: 50, kickDecay: 0.34, snareTone: 180, snareNoise: 0.5, hatDecay: 0.09, hatRing: 5200, percWave: 'triangle', percDecay: 0.14, drive: 1.15 },
  'glass-steel': { kickTune: 72, kickDecay: 0.14, snareTone: 320, snareNoise: 0.85, hatDecay: 0.03, hatRing: 9500, percWave: 'sawtooth', percDecay: 0.06, drive: 0.9 },
  'dust-shell': { kickTune: 44, kickDecay: 0.42, snareTone: 150, snareNoise: 0.4, hatDecay: 0.13, hatRing: 3800, percWave: 'sine', percDecay: 0.2, drive: 1.0 },
  'neon-rubber': { kickTune: 64, kickDecay: 0.2, snareTone: 260, snareNoise: 0.62, hatDecay: 0.07, hatRing: 8200, percWave: 'square', percDecay: 0.11, drive: 1.35 },
};

/** Deterministic per-hit noise source (xorshift), reproducible in Node. */
export function makeNoise(seedInt) {
  let a = seedInt >>> 0 || 0x9e3779b9;
  return function next() {
    a ^= a << 13; a |= 0;
    a ^= a >>> 17;
    a ^= a << 5; a |= 0;
    return ((a >>> 0) / 0xffffffff) * 2 - 1;
  };
}

export function renderVoice(out, role, startSample, vel01, kitId, seedInt) {
  const k = KIT_VOICES[kitId] ?? KIT_VOICES['tape-room'];
  const sr = SAMPLE_RATE;
  const noise = makeNoise(seedInt ^ (startSample | 0));
  switch (role) {
    case 'kick': {
      const n = Math.floor(sr * k.kickDecay);
      let phase = 0;
      for (let i = 0; i < n && startSample + i < out.length; i++) {
        const t = i / n;
        const f = k.kickTune * (1 + 2.4 * Math.exp(-t * 14)) ;
        phase += (2 * Math.PI * f) / sr;
        const env = Math.exp(-t * 6.5);
        out[startSample + i] += Math.sin(phase) * env * vel01 * 0.95;
      }
      break;
    }
    case 'snare': {
      const n = Math.floor(sr * (k.snareNoise > 0.6 ? 0.18 : 0.24));
      let phase = 0;
      for (let i = 0; i < n && startSample + i < out.length; i++) {
        const t = i / n;
        phase += (2 * Math.PI * k.snareTone * (1 - 0.3 * t)) / sr;
        const tone = Math.sin(phase) * (1 - k.snareNoise) * 0.8;
        const nz = noise() * k.snareNoise;
        const env = Math.exp(-t * (k.snareNoise > 0.6 ? 12 : 8));
        out[startSample + i] += (tone + nz) * env * vel01 * 0.8;
      }
      break;
    }
    case 'hat': {
      const n = Math.floor(sr * k.hatDecay * 4 + 40);
      let lp = 0;
      for (let i = 0; i < n && startSample + i < out.length; i++) {
        const t = i / n;
        // crude metallic: high-passed noise via one-pole difference
        lp += (noise() - lp) * 0.35;
        const hp = noise() - lp;
        const ring = hp > 0 ? Math.min(hp * 3, 1) : Math.max(hp * 3, -1);
        const bright = k.hatRing / 9000;
        const env = Math.exp(-t * (10 - bright * 4));
        out[startSample + i] += ring * env * vel01 * 0.42 * bright;
      }
      break;
    }
    default: { // perc
      const n = Math.floor(sr * k.percDecay);
      let phase = 0;
      for (let i = 0; i < n && startSample + i < out.length; i++) {
        const t = i / n;
        const f = 420 * (1 + 0.5 * Math.exp(-t * 20));
        phase += (2 * Math.PI * f) / sr;
        let s;
        if (k.percWave === 'square') s = Math.sign(Math.sin(phase));
        else if (k.percWave === 'sawtooth') s = 2 * ((phase / (2 * Math.PI)) % 1) - 1;
        else if (k.percWave === 'triangle') s = Math.asin(Math.sin(phase)) * (2 / Math.PI);
        else s = Math.sin(phase);
        const env = Math.exp(-t * 9);
        out[startSample + i] += s * env * vel01 * 0.35;
      }
    }
  }
}

/**
 * Render the whole document to mono Float32 samples.
 * Exact loop duration: bars * beatsPerBar * beat seconds. Voice tails at the
 * cycle edge are intentionally clipped so a rendered file loops on the grid.
 */
export function renderDocument(doc, { bpm } = {}) {
  const plan = documentAudioPlan(doc, { bpm });
  const length = Math.ceil(plan.durationSec * SAMPLE_RATE);
  const out = new Float32Array(length);

  for (const ev of plan.events) {
    const startSample = Math.min(
      length - 1,
      Math.max(0, Math.round((ev.absoluteStep * plan.stepSec + ev.offset * plan.stepSec) * SAMPLE_RATE))
    );
    renderVoice(out, ev.role, startSample, ev.velocity / 127, plan.kit, hashOf(doc.seed, ev));
  }

  // soft clip + volume
  const vol = plan.volume;
  for (let i = 0; i < length; i++) {
    out[i] = Math.tanh(out[i] * vol);
  }
  return out;
}

function hashOf(seed, ev) {
  let h = 2166136261;
  const input = `${seed}|${ev.role}|${ev.bar}|${ev.slotInBar}`;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

/** Render + encode in one call. */
export function documentToWav(doc, opts = {}) {
  return encodeWav16(renderDocument(doc, opts), SAMPLE_RATE);
}

export function wavFileName(doc) {
  const fam = (doc.family || 'random').replace(/[^a-z0-9]+/gi, '-').toLowerCase();
  const modes = [...new Set(doc.measures.slice(0, doc.bars).map((m) => m.mode))];
  const parts = [
    'groove-dice',
    fam,
    modes.length === 1 ? modes[0] : 'mixed',
    `${doc.bars}bar`,
    `${doc.bpm ?? DEFAULT_BPM}bpm`,
    `seed-${String(doc.seed).replace(/[^a-zA-Z0-9-]/g, '')}`,
  ];
  return parts.join('_') + '.wav';
}
