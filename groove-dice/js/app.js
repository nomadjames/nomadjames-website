// Groove Dice application controller. Wires the canonical document model to
// the sequencer UI, transport, per-bar GROOVE/FILL control, playback and exports.

import {
  createDocument, setBarCount, slotsForMeter,
  addManualNote, removeManualNote, suppressNote,
  ROLES, ROLE_LABELS,
} from './model.js';
import { FAMILIES, FAMILY_KEYS, KITS } from './families.js';
import { rollDocument, newSeed, regenerateBar, documentAudioPlan, refreshDocumentControls } from './generate.js';
import { documentToMidi, midiFileName } from './midi.js';
import { documentToWav, wavFileName } from './wav.js';
import { getAudioContext, unlockAudio, makeNoiseBuffer, playVoice } from './audio.js';
import { advanceCycleStart, scheduleWindow } from './scheduler.js';
import { createTransportGate } from './transport-state.js';

const $ = (id) => document.getElementById(id);

// populate family/kit selects
for (const key of FAMILY_KEYS) {
  const o = document.createElement('option');
  o.value = key; o.textContent = FAMILIES[key].name.toUpperCase();
  $('family').appendChild(o);
}
for (const k of KITS) {
  const o = document.createElement('option');
  o.value = k.id; o.textContent = k.name.toUpperCase();
  $('kit').appendChild(o);
}

const doc = createDocument({ bars: 2 });
let activeBar = 0;
let playing = false;
let loopPlayback = true;
let schedulerTimer = null;
let noiseBuf = null;
let playbackState = null;
let pendingPlaybackState = null;
let pendingPlaybackRevision = 0;
const transportGate = createTransportGate();

function setStatus(text, blocked = false) {
  const el = $('status');
  el.textContent = text;
  el.classList.toggle('blocked', blocked);
}

function currentMeter() {
  return doc.measures[activeBar].meter;
}

// ---------------------------------------------------------------------------
// Sequencer rendering — retain 30 DOM slots per track for stable machine
// density, while only the active measure's slots are visible.
function renderGrid() {
  const grid = $('grid');
  grid.innerHTML = '';
  const bar = doc.measures[activeBar];
  const activeSlots = slotsForMeter(bar.meter);
  grid.style.setProperty('--slots', activeSlots);

  for (const role of ROLES) {
    const label = document.createElement('div');
    label.className = 'lane-label';
    label.textContent = ({ kick: 'K', snare: 'S', hat: 'CHH', perc: 'PER' })[role];
    grid.appendChild(label);
    for (let s = 0; s < 30; s++) {
      const reserved = s >= activeSlots;
      const cell = document.createElement(reserved ? 'div' : 'button');
      cell.className = 'cell' + (s % 4 === 0 ? ' beat' : '') + (reserved ? ' reserved' : '');
      const note = !reserved && bar.notes.find((n) => n.role === role && n.slot === s);
      if (note) applyCellState(cell, note.velocity, note.offset);
      cell.dataset.role = role;
      cell.dataset.slot = String(s);
      cell.dataset.reserved = String(reserved);
      if (reserved) {
        cell.setAttribute('aria-hidden', 'true');
      } else {
        cell.setAttribute('aria-label',
          `${ROLE_LABELS[role]} step ${s + 1} of ${activeSlots}${note ? ` on, velocity ${note.velocity}` : ', off'}`);
      }
      grid.appendChild(cell);
    }
  }
}

function applyCellState(cell, velocity, offset) {
  cell.classList.add('on');
  cell.classList.remove('vel-ghost', 'vel-soft', 'vel-mid', 'vel-accent');
  if (velocity < 48) cell.classList.add('vel-ghost');
  else if (velocity < 75) cell.classList.add('vel-soft');
  else if (velocity < 105) cell.classList.add('vel-mid');
  else cell.classList.add('vel-accent');
  // visible timing offset: horizontal shift inside the fixed slot
  cell.style.transform = offset ? `translateX(${(offset * 40).toFixed(1)}%)` : '';
}

function refreshGridStates() {
  const bar = doc.measures[activeBar];
  for (const cell of $('grid').querySelectorAll('.cell')) {
    const note = bar.notes.find((n) =>
      n.role === cell.dataset.role && n.slot === Number(cell.dataset.slot));
    cell.classList.remove('on', 'vel-ghost', 'vel-soft', 'vel-mid', 'vel-accent');
    cell.style.transform = '';
    if (note) applyCellState(cell, note.velocity, note.offset);
  }
}

function renderBarSelector() {
  const sel = $('barSelector');
  sel.innerHTML = '';
  for (let i = 0; i < doc.bars; i++) {
    const tab = document.createElement('button');
    tab.className = 'bar-tab' + (i === activeBar ? ' active' : '') +
      (doc.measures[i].mode === 'fill' ? ' fill-mark' : '');
    tab.textContent = String(i + 1);
    tab.setAttribute('aria-label', `Bar ${i + 1}`);
    tab.addEventListener('click', () => { activeBar = i; renderAll(); });
    sel.appendChild(tab);
  }
}

function renderModeControl() {
  const mode = doc.measures[activeBar].mode;
  $('modeGrooveBtn').classList.toggle('active', mode === 'groove');
  $('modeFillBtn').classList.toggle('active', mode === 'fill');
}

function renderSettings() {
  $('family').value = doc.family;
  $('kit').value = doc.kit;
  $('bpm').value = String(doc.bpm);
  $('density').value = Math.round(doc.density * 100);
  $('densityOut').textContent = `${Math.round(doc.density * 100)}%`;
  $('feel').value = Math.round(doc.feel * 100);
  $('feelOut').textContent = `${Math.round(doc.feel * 100)}%`;
  $('humanize').value = Math.round(doc.humanize * 100);
  $('humanizeOut').textContent = `${Math.round(doc.humanize * 100)}%`;
  $('bars').value = String(doc.bars);
  $('volume').value = Math.round((doc.volume ?? 0.8) * 100);
  $('volumeOut').textContent = `${Math.round((doc.volume ?? 0.8) * 100)}%`;
}

function renderAll() {
  renderGrid();
  renderBarSelector();
  renderModeControl();
}

// ---------------------------------------------------------------------------
// Transport actions
// ---------------------------------------------------------------------------
$('rollBtn').addEventListener('click', async () => {
  transportGate.roll();
  rollDocument(doc);
  if (playing) {
    pendingPlaybackState = makePlaybackState(doc);
    pendingPlaybackRevision++;
  }
  activeBar = Math.min(activeBar, doc.bars - 1);
  renderAll(); renderSettings();
  setStatus(`ROLLED · ${FAMILIES[doc.family]?.name ?? doc.family} · ${kitName(doc.kit)}`);
});

$('loopBtn').addEventListener('click', () => {
  loopPlayback = !loopPlayback;
  $('loopBtn').textContent = `LOOP: ${loopPlayback ? 'ON' : 'OFF'}`;
  $('loopBtn').setAttribute('aria-pressed', String(loopPlayback));
  $('loopBtn').classList.toggle('active-toggle', loopPlayback);
  setStatus(`LOOP ${loopPlayback ? 'ON' : 'OFF'}`);
});

$('newSeedBtn').addEventListener('click', () => {
  stopPlayback();
  newSeed(doc);
  renderAll();
  setStatus(`NEW SEED ${doc.seed}`);
});

for (const btn of [ $('modeGrooveBtn'), $('modeFillBtn') ]) {
  btn.addEventListener('click', () => {
    const mode = btn.dataset.mode;
    regenerateBar(doc, activeBar, mode); // regenerates THIS bar in this mode
    renderAll();
    setStatus(`BAR ${activeBar + 1} SET TO ${mode.toUpperCase()} + REGENERATED`);
  });
}

$('bars').addEventListener('change', () => {
  setBarCount(doc, Number($('bars').value));
  activeBar = Math.min(activeBar, doc.bars - 1);
  renderAll();
});

$('family').addEventListener('change', () => {
  const chosen = $('family').value;
  if (chosen === 'random') {
    rollDocument(doc);
  } else {
    const family = FAMILIES[chosen];
    if (!family) {
      setStatus(`UNKNOWN FAMILY: ${chosen}`);
      renderSettings();
      return;
    }
    doc.family = chosen;
    const meter = family.meter;
    for (const measure of doc.measures) measure.meter = [...meter];
    newSeed(doc, doc.seed);
  }
  renderAll();
  renderSettings();
});
$('kit').addEventListener('change', () => { doc.kit = $('kit').value; });
$('bpm').addEventListener('change', () => {
  // BPM commits only from the explicit Enter handler below.
});
$('bpm').addEventListener('keydown', (event) => {
  if (event.key !== 'Enter') return;
  event.preventDefault();
  const raw = $('bpm').value.trim();
  const bpm = Number(raw);
  if (!/^\d+$/.test(raw) || !Number.isInteger(bpm) || bpm < 40 || bpm > 220) {
    $('bpm').value = String(doc.bpm);
    setStatus('BPM REJECTED — ENTER A WHOLE NUMBER FROM 40 TO 220', true);
    $('bpm').classList.add('invalid');
    return;
  }
  doc.bpm = bpm;
  $('bpm').classList.remove('invalid');
  if (playing) {
    pendingPlaybackState = makePlaybackState(doc);
    pendingPlaybackRevision++;
  }
  setStatus(`BPM ACCEPTED · ${bpm}`);
  $('bpm').blur();
});
$('density').addEventListener('input', () => {
  doc.density = Number($('density').value) / 100;
  refreshDocumentControls(doc);
  $('densityOut').textContent = `${$('density').value}%`;
  refreshGridStates();
  if (playing) { pendingPlaybackState = makePlaybackState(doc); pendingPlaybackRevision++; }
});
$('feel').addEventListener('input', () => {
  doc.feel = Number($('feel').value) / 100;
  refreshDocumentControls(doc);
  $('feelOut').textContent = `${$('feel').value}%`;
  refreshGridStates();
  if (playing) { pendingPlaybackState = makePlaybackState(doc); pendingPlaybackRevision++; }
});
$('humanize').addEventListener('input', () => {
  doc.humanize = Number($('humanize').value) / 100;
  refreshDocumentControls(doc);
  $('humanizeOut').textContent = `${$('humanize').value}%`;
  refreshGridStates();
  if (playing) { pendingPlaybackState = makePlaybackState(doc); pendingPlaybackRevision++; }
});
$('volume').addEventListener('input', () => {
  doc.volume = Number($('volume').value) / 100;
  $('volumeOut').textContent = `${$('volume').value}%`;
});

function kitName(id) { return (KITS.find((k) => k.id === id)?.name ?? id).toUpperCase(); }

// ---------------------------------------------------------------------------
// Pointer paint / erase
// ---------------------------------------------------------------------------
const VELOCITIES = { ghost: 35, soft: 60, med: 90, accent: 120 };
let velocityMode = 'med';
let gesture = null;
const gridEl = $('grid');

for (const button of document.querySelectorAll('[data-velocity-mode]')) {
  button.addEventListener('click', () => {
    velocityMode = button.dataset.velocityMode;
    for (const option of document.querySelectorAll('[data-velocity-mode]')) {
      const active = option.dataset.velocityMode === velocityMode;
      option.classList.toggle('active', active);
      option.setAttribute('aria-pressed', String(active));
    }
  });
}

gridEl.addEventListener('pointerdown', (e) => {
  const cell = e.target.closest('.cell');
  if (!cell) return;
  e.preventDefault();
  gridEl.setPointerCapture?.(e.pointerId);
  beginGesture(cell);
});
gridEl.addEventListener('pointermove', (e) => {
  if (!gesture) return;
  const el = document.elementFromPoint(e.clientX, e.clientY);
  const cell = el?.closest?.('.cell');
  if (cell) paintCell(cell);
});
window.addEventListener('pointerup', () => { gesture = null; });

gridEl.addEventListener('click', (e) => {
  // Keyboard activation dispatches click without a preceding pointerdown.
  if (e.detail !== 0) return;
  const cell = e.target.closest('.cell');
  if (cell) {
    beginGesture(cell);
    gesture = null;
  }
});

function beginGesture(cell) {
  gesture = {
    visited: new Set(),
    action: velocityMode === 'erase' || cell.classList.contains('on') ? 'erase' : 'paint',
  };
  paintCell(cell);
}

function paintCell(cell) {
  if (!gesture || cell.dataset.reserved === 'true') return;
  const key = `${cell.dataset.role}:${cell.dataset.slot}`;
  if (gesture.visited.has(key)) return;
  gesture.visited.add(key);
  const role = cell.dataset.role;
  const slot = Number(cell.dataset.slot);
  const bar = doc.measures[activeBar];
  if (gesture.action === 'erase') {
    removeManualNote(bar, role, slot);
    suppressNote(bar, role, slot);
  } else {
    addManualNote(bar, { role, slot, velocity: VELOCITIES[velocityMode], offset: 0 });
  }
  refreshDocumentControls(doc);
  refreshGridStates();
  if (playing) {
    pendingPlaybackState = makePlaybackState(doc);
    pendingPlaybackRevision++;
  }
}

// Keyboard operability: Enter/Space handled by native buttons; arrow navigation
gridEl.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    const cell = document.activeElement?.closest?.('.cell');
    if (cell) {
      e.preventDefault();
      beginGesture(cell);
      gesture = null;
    }
    return;
  }
  if (!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key)) return;
  e.preventDefault();
  const cells = [...gridEl.querySelectorAll('.cell:not(.reserved)')];
  const i = cells.indexOf(document.activeElement);
  if (i < 0) return;
  const cols = slotsForMeter(currentMeter());
  let next = i;
  if (e.key === 'ArrowRight') next = i + 1;
  if (e.key === 'ArrowLeft') next = i - 1;
  if (e.key === 'ArrowDown') next = i + cols;
  if (e.key === 'ArrowUp') next = i - cols;
  cells[Math.max(0, Math.min(cells.length - 1, next))]?.focus();
});

// ---------------------------------------------------------------------------
// Playback: look-ahead scheduler over documentEvents
// ---------------------------------------------------------------------------
$('playBtn').addEventListener('click', async () => {
  if (playing) { stopPlayback(); return; }
  const request = transportGate.beginPlay();
  if (request === null) return;
  setStatus('UNLOCKING AUDIO…', true);
  const ok = await unlockAudio();
  const accepted = transportGate.resolvePlay(request, ok);
  if (!accepted) {
    if (!ok && transportGate.snapshot().phase === 'stopped') {
      setStatus('AUDIO BLOCKED — TAP PLAY AGAIN', true);
    }
    return;
  }
  startPlayback();
});

function startPlayback() {
  const ctx = getAudioContext();
  noiseBuf = noiseBuf ?? makeNoiseBuffer(ctx);
  playing = true;
  $('playBtn').textContent = 'STOP';
  $('playBtn').classList.add('playing');
  setStatus(`PLAYING · ${FAMILIES[doc.family]?.name ?? ''} · ${kitName(doc.kit)}`);

  playbackState = makePlaybackState(doc);
  pendingPlaybackState = null;
  let cycleStart = ctx.currentTime + 0.08;
  const master = ctx.createGain();
  master.gain.value = doc.volume ?? 0.8;
  master.connect(ctx.destination);

  const lookahead = 0.15;
  let cycleNumber = 0;
  // Keep dedupe state for the active and staged patterns separate. A rapid
  // second roll replaces the staged pattern; reusing the old set would make
  // the replacement look already scheduled at the same cycle/index keys.
  let scheduled = new Set();
  let pendingScheduled = new Set();
  let scheduledPendingRevision = pendingPlaybackRevision;
  const tick = () => {
    if (!playing) return;
    if (ctx.state === 'closed') { stopPlayback(); return; }
    if (scheduledPendingRevision !== pendingPlaybackRevision) {
      pendingScheduled = new Set();
      scheduledPendingRevision = pendingPlaybackRevision;
    }
    // Mobile browsers may suspend a running context while timers are late.
    // Resume opportunistically; the next tick then rebuilds the look-ahead.
    if (ctx.state !== 'running') ctx.resume?.().catch(() => {});
    const now = ctx.currentTime;
    const advanced = advanceCycleStart(cycleStart, playbackState.cycleDuration, now);
    if (advanced.cycles > 0) {
      if (!loopPlayback) { stopPlayback(); return; }
      cycleStart = advanced.cycleStart;
      const stagedAtBoundary = pendingPlaybackState;
      playbackState = stagedAtBoundary ?? makePlaybackState(doc);
      pendingPlaybackState = null;
      // The staged pattern was deduped in its own cycle namespace. Promote
      // that set with the pattern, then start a fresh set for future rolls.
      // Resetting the active set also bounds memory while preserving events
      // already scheduled for the promoted cycle.
      scheduled = stagedAtBoundary ? pendingScheduled : new Set();
      pendingScheduled = new Set();
      cycleNumber += advanced.cycles;
    }
    const stagedState = pendingPlaybackState;
    const hasPendingState = stagedState !== null;
    const window = scheduleWindow(playbackState.events, cycleStart, playbackState.cycleDuration,
      playbackState.stepSec, now, lookahead, scheduled, cycleNumber,
      hasPendingState ? 1 : 2);
    for (const { event: ev, when } of window) {
      playVoice(ctx, noiseBuf, ev.role, when, ev.velocity / 127, master, playbackState.kit, ev.absoluteStep);
    }
    if (hasPendingState) {
      const pendingWindow = scheduleWindow(
        stagedState.events,
        cycleStart + playbackState.cycleDuration,
        stagedState.cycleDuration,
        stagedState.stepSec,
        now,
        lookahead,
        pendingScheduled,
        cycleNumber + 1,
        1,
      );
      for (const { event: ev, when } of pendingWindow) {
        playVoice(ctx, noiseBuf, ev.role, when, ev.velocity / 127, master,
          stagedState.kit, ev.absoluteStep);
      }
    }
    // playhead
    const pos = Math.floor((now - cycleStart) / playbackState.stepSec);
    highlightPlayhead(pos);
    schedulerTimer = setTimeout(tick, 40);
  };
  tick();
}

function makePlaybackState(d) {
  const plan = documentAudioPlan(d);
  return {
    events: plan.events.map((event) => ({ ...event })),
    kit: plan.kit,
    stepSec: plan.stepSec,
    cycleDuration: plan.durationSec,
  };
}

function highlightPlayhead(stepInDoc) {
  const slots = slotsForMeter(currentMeter());
  const barIdx = Math.floor(stepInDoc / slots);
  const inBar = ((stepInDoc % slots) + slots) % slots;
  const grid = $('grid');
  grid.classList.toggle('playing', playing && barIdx === activeBar && stepInDoc >= 0);
  if (playing && barIdx === activeBar && stepInDoc >= 0) grid.style.setProperty('--playhead-slot', inBar);
}

function stopPlayback() {
  transportGate.stop();
  playing = false;
  clearTimeout(schedulerTimer);
  schedulerTimer = null;
  playbackState = null;
  pendingPlaybackState = null;
  $('playBtn').textContent = 'PLAY';
  $('playBtn').classList.remove('playing');
  highlightPlayhead(-1);
}

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------
function download(bytesOrBlob, filename) {
  const blob = bytesOrBlob instanceof Blob ? bytesOrBlob : new Blob([bytesOrBlob], { type: 'application/octet-stream' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 30000);
}

$('exportMidiBtn').addEventListener('click', () => {
  const bytes = documentToMidi(doc, { bpm: doc.bpm });
  download(bytes, midiFileName(doc));
  setStatus(`EXPORTED ${midiFileName(doc)}`);
});

$('exportWavBtn').addEventListener('click', () => {
  const bytes = documentToWav(doc);
  download(bytes, wavFileName(doc));
  setStatus(`EXPORTED ${wavFileName(doc)}`);
});

// ---------------------------------------------------------------------------
// Boot
// ---------------------------------------------------------------------------
rollDocument(doc);
renderAll();
renderSettings();
setStatus('READY — TAP THE DIE OR PLAY');
