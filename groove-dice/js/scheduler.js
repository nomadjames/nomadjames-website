// Pure timing helpers for the look-ahead transport scheduler.

/**
 * Advance a cycle start by whole cycle durations, never by an arbitrary gap.
 * Returns the first start at or after `now` and how many boundaries passed.
 */
export function advanceCycleStart(cycleStart, cycleDuration, now) {
  if (!(cycleDuration > 0) || now < cycleStart + cycleDuration) {
    return { cycleStart, cycles: 0 };
  }
  const cycles = Math.floor((now - cycleStart) / cycleDuration);
  return { cycleStart: cycleStart + cycles * cycleDuration, cycles };
}

export function cycleStarts(cycleStart, cycleDuration, count) {
  return Array.from({ length: count }, (_, i) => cycleStart + i * cycleDuration);
}

/** Return each not-yet-scheduled event in the current look-ahead window. */
export function scheduleWindow(events, cycleStart, cycleDuration, stepSec, now,
  lookahead, scheduled = new Set(), cycleNumber = 0, cycleCount = 2) {
  const out = [];
  const end = now + lookahead;
  for (let cycle = 0; cycle < cycleCount; cycle++) {
    const start = cycleStart + cycle * cycleDuration;
    for (let index = 0; index < events.length; index++) {
      const event = events[index];
      const when = start + event.absoluteStep * stepSec + event.offset * stepSec;
      const key = `${cycleNumber + cycle}:${index}`;
      if (when >= now && when < end && !scheduled.has(key)) {
        scheduled.add(key);
        out.push({ event, when });
      }
    }
  }
  return out;
}
