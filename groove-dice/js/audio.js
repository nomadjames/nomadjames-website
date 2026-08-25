// Groove Dice — Web Audio live playback engine.
// One AudioContext, user-gesture-safe unlock (mobile Safari proven pattern),
// synthesized voices matching the pure-JS WAV renderer kit definitions.

export function requestPlaybackAudioSession(browser = globalThis.navigator) {
  if (!browser?.audioSession) return false;
  try {
    browser.audioSession.type = 'playback';
    return browser.audioSession.type === 'playback';
  } catch {
    return false;
  }
}

let ctxRef = null;

/** Create-or-reuse the single AudioContext. Returns null only if unsupported. */
export function getAudioContext() {
  if (ctxRef && ctxRef.state !== 'closed') return ctxRef;
  const AC = globalThis.AudioContext || globalThis.webkitAudioContext;
  if (!AC) return null;
  ctxRef = new AC();
  return ctxRef;
}

/**
 * Unlock audio from a user gesture. Resolves true only when state is running.
 */
export async function unlockAudio() {
  requestPlaybackAudioSession();
  const ctx = getAudioContext();
  if (!ctx) return false;
  if (ctx.state !== 'running') {
    try { await ctx.resume(); } catch { /* blocked */ }
  }
  // Silent one-sample tick to satisfy iOS gesture requirement.
  if (ctx.state !== 'running') {
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    g.gain.value = 0.0001;
    o.connect(g).connect(ctx.destination);
    o.start();
    o.stop(ctx.currentTime + 0.02);
    try { await ctx.resume(); } catch { /* blocked */ }
  }
  return ctx.state === 'running';
}

export function makeNoiseBuffer(ctx) {
  const len = Math.floor(ctx.sampleRate * 0.5);
  const buf = ctx.createBuffer(1, len, ctx.sampleRate);
  const data = buf.getChannelData(0);
  let a = 0x9e3779b9;
  for (let i = 0; i < len; i++) {
    a ^= a << 13; a |= 0;
    a ^= a >>> 17;
    a ^= a << 5; a |= 0;
    data[i] = (a % 20000) / 20000 - 0.5;
  }
  return buf;
}

// Kit parameters mirror wav.js KIT_VOICES.
import { KIT_VOICES } from './wav.js';

function env(ctx, when, peak, attack, decay) {
  const g = ctx.createGain();
  g.gain.setValueAtTime(0.0001, when);
  g.gain.linearRampToValueAtTime(peak, when + attack);
  g.gain.exponentialRampToValueAtTime(0.0001, when + attack + decay);
  return g;
}

export function playVoice(ctx, noiseBuf, role, when, vel01, out, kitId, offsetSeed = 0) {
  const k = KIT_VOICES[kitId] ?? KIT_VOICES['tape-room'];
  switch (role) {
    case 'kick': {
      const o = ctx.createOscillator();
      o.type = 'sine';
      o.frequency.setValueAtTime(k.kickTune * 3.4, when);
      o.frequency.exponentialRampToValueAtTime(k.kickTune, when + 0.055);
      const g = env(ctx, when, vel01 * 0.95, 0.002, k.kickDecay);
      o.connect(g).connect(out);
      o.start(when); o.stop(when + k.kickDecay + 0.1);
      break;
    }
    case 'snare': {
      const o = ctx.createOscillator();
      o.type = 'triangle';
      o.frequency.setValueAtTime(k.snareTone, when);
      const g = env(ctx, when, vel01 * (1 - k.snareNoise) * 0.8, 0.001, 0.09);
      o.connect(g).connect(out); o.start(when); o.stop(when + 0.2);
      const n = ctx.createBufferSource(); n.buffer = noiseBuf; n.loop = true;
      const nf = ctx.createBiquadFilter(); nf.type = 'highpass'; nf.frequency.value = 1400;
      const ng = env(ctx, when, vel01 * k.snareNoise * 0.8, 0.001, k.snareNoise > 0.6 ? 0.11 : 0.16);
      n.connect(nf).connect(ng).connect(out); n.start(when, (offsetSeed % 100) / 400); n.stop(when + 0.3);
      break;
    }
    case 'hat': {
      const n = ctx.createBufferSource(); n.buffer = noiseBuf; n.loop = true;
      const hp = ctx.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = k.hatRing;
      const g = env(ctx, when, vel01 * 0.4, 0.001, k.hatDecay * 3);
      n.connect(hp).connect(g).connect(out); n.start(when, (offsetSeed % 137) / 500); n.stop(when + k.hatDecay * 4 + 0.05);
      break;
    }
    default: { // perc
      const o = ctx.createOscillator();
      o.type = k.percWave === 'sine' ? 'sine' : k.percWave === 'square' ? 'square'
        : k.percWave === 'sawtooth' ? 'sawtooth' : 'triangle';
      o.frequency.setValueAtTime(620, when);
      o.frequency.exponentialRampToValueAtTime(430, when + 0.04);
      const g = env(ctx, when, vel01 * 0.32, 0.001, k.percDecay);
      o.connect(g).connect(out); o.start(when); o.stop(when + k.percDecay + 0.1);
    }
  }
}
