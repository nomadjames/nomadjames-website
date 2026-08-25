// Small transport lifecycle gate shared by the UI and its async audio unlock.
// A stale unlock completion must never resurrect a stopped transport.
export function createTransportGate() {
  let phase = 'stopped';
  let requestRevision = 0;
  let rollRevision = 0;

  return {
    beginPlay() {
      if (phase !== 'stopped') return null;
      phase = 'unlocking';
      return ++requestRevision;
    },
    resolvePlay(request, ok) {
      if (phase !== 'unlocking' || request !== requestRevision) return false;
      if (!ok) {
        phase = 'stopped';
        return false;
      }
      phase = 'playing';
      return true;
    },
    stop() {
      requestRevision++;
      phase = 'stopped';
    },
    roll() {
      rollRevision++;
    },
    boundary() {},
    snapshot() {
      const playing = phase === 'playing';
      return {
        phase,
        label: playing ? 'STOP' : 'PLAY',
        playing,
        schedulerActive: playing,
        rollRevision,
      };
    },
  };
}
