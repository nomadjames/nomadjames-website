const CLIPS_URL = './data/clips.json';
const FALLBACK_ART_URL = './data/artic-fallback.json';
const FALLBACK_GHOST_URL = './data/faker-fallback.json';
const ARTIC_SEARCH = 'https://api.artic.edu/api/v1/artworks/search';
const FAKER_API = 'https://fakerapi.it/api/v2/persons?_quantity=1';
const ROBOHASH_BASE = 'https://robohash.org';
const IIIF_BASE = 'https://www.artic.edu/iiif/2';
const ART_REFRESH_MS = 17000;
const PRIMARY_REFRESH_MS = 7200;
const GHOST_REFRESH_MS = 11800;
const MOD_REFRESH_MIN_MS = 45000;
const MOD_REFRESH_MAX_MS = 90000;
const ART_CARD_COUNT = 9;
const EMBED_MODE = new URLSearchParams(window.location.search).get('embed') === '1';

document.documentElement.classList.toggle('embed-mode', EMBED_MODE);

const statusEl = document.querySelector('#status');
const creditEl = document.querySelector('#credit');
const modulatorEl = document.querySelector('#modulator');
const startButton = document.querySelector('#startButton');
if (EMBED_MODE && startButton) startButton.textContent = 'start';
const artLayer = document.querySelector('#artLayer');
const roboLayer = document.querySelector('#roboLayer');
const primaryA = document.querySelector('#primaryA');
const primaryB = document.querySelector('#primaryB');
const ghost = document.querySelector('#ghost');
const stage = document.querySelector('.stage');

let clips = [];
let clipQueue = [];
let activePrimary = primaryA;
let standbyPrimary = primaryB;
let artPool = [];
let fallbackArt = [];
let fallbackGhosts = [];
let activeArt = [];
let clipTimer = 0;
let ghostTimer = 0;
let artTimer = 0;
let modTimer = 0;
let currentMod = fallbackModulation('boot');

function clamp(value, min = 0, max = 1) {
  return Math.max(min, Math.min(max, value));
}

function lerp(min, max, amount) {
  return min + (max - min) * clamp(amount);
}

function shuffle(items) {
  const arr = items.slice();
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function choice(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function hashString(value) {
  let hash = 2166136261;
  const text = String(value ?? '');
  for (let i = 0; i < text.length; i += 1) {
    hash ^= text.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function hashUnit(value, salt = '') {
  return (hashString(`${salt}:${JSON.stringify(value)}`) % 10000) / 9999;
}

function digitSum(value) {
  return String(value ?? '')
    .replace(/\D/g, '')
    .split('')
    .reduce((sum, digit) => sum + Number(digit), 0);
}

function nextClip() {
  if (!clipQueue.length) clipQueue = shuffle(clips);
  return clipQueue.shift();
}

function imageUrl(art, width = 1200) {
  if (art.local_url) return art.local_url;
  return `${IIIF_BASE}/${art.image_id}/full/${width},/0/default.jpg`;
}

function randomLocalArtUrl() {
  const local = fallbackArt.filter((art) => art.local_url);
  if (!local.length) return '';
  return choice(local).local_url;
}

function compactArt(row) {
  return {
    id: row.id,
    title: row.title || 'Untitled',
    artist: (row.artist_display || row.artist || 'Unknown artist').split(/\n/)[0],
    date: row.date_display || row.date || '',
    image_id: row.image_id,
  };
}

async function loadJson(url) {
  const response = await fetch(url, { cache: 'no-store' });
  if (!response.ok) throw new Error(`${url} ${response.status}`);
  return response.json();
}

async function fetchArticBatch() {
  const page = 1 + Math.floor(Math.random() * 80);
  const params = new URLSearchParams({
    'query[term][is_public_domain]': 'true',
    fields: 'id,title,artist_display,date_display,image_id',
    limit: '36',
    page: String(page),
  });
  const response = await fetch(`${ARTIC_SEARCH}?${params.toString()}`, { cache: 'no-store' });
  if (!response.ok) throw new Error(`ArtIC ${response.status}`);
  const data = await response.json();
  const rows = (data.data || []).map(compactArt).filter((row) => row.image_id);
  if (!rows.length) throw new Error('ArtIC returned no image rows');
  artPool = shuffle([...rows, ...artPool]).slice(0, 140);
  return rows;
}

async function loadArtFallback() {
  const data = await loadJson(FALLBACK_ART_URL);
  fallbackArt = (data.artworks || []).filter((row) => row.image_id);
  if (!artPool.length) artPool = shuffle(fallbackArt);
}

async function loadGhostFallback() {
  const data = await loadJson(FALLBACK_GHOST_URL);
  fallbackGhosts = data.people || [];
}

function normalizePerson(row, source = 'fakerapi') {
  const address = row.address || {};
  const name = [row.firstname, row.lastname].filter(Boolean).join(' ') || 'anonymous signal';
  return {
    source,
    name,
    birthday: row.birthday || '',
    gender: row.gender || '',
    zipcode: address.zipcode || row.zipcode || '',
    countryCode: address.country_code || address.countryCode || row.country_code || 'XX',
    latitude: Number(address.latitude ?? row.latitude ?? 0),
    longitude: Number(address.longitude ?? row.longitude ?? 0),
    raw: row,
  };
}

function personFromFallback(reason = 'fallback') {
  const row = fallbackGhosts.length ? choice(fallbackGhosts) : {
    firstname: 'Local',
    lastname: 'Fallback',
    birthday: '1984-05-04',
    gender: 'unknown',
    address: { zipcode: '44444', country_code: 'US', latitude: 41.0998, longitude: -80.6495 },
  };
  return normalizePerson(row, reason);
}

function modulationFromPerson(person) {
  const zipForce = (digitSum(person.zipcode) % 37) / 36;
  const lat = clamp((Math.abs(person.latitude) || hashUnit(person.raw, 'lat')) / 90);
  const lon = clamp((Math.abs(person.longitude) || hashUnit(person.raw, 'lon')) / 180);
  const birthdayYear = Number(String(person.birthday).slice(0, 4));
  const ageish = Number.isFinite(birthdayYear) ? clamp((2026 - birthdayYear) / 80) : hashUnit(person.raw, 'age');
  const country = hashUnit(person.countryCode, 'country');
  const name = hashUnit(person.name, 'name');
  const gender = hashUnit(person.gender, 'gender');
  const whole = hashUnit(person.raw, 'whole');
  const intensity = clamp(0.22 + lon * 0.44 + zipForce * 0.22 + whole * 0.12);
  const tempo = clamp(0.18 + (1 - ageish) * 0.48 + name * 0.34);
  const density = clamp(0.18 + lat * 0.42 + zipForce * 0.28 + country * 0.12);
  const glitch = clamp(0.10 + country * 0.45 + gender * 0.30 + lon * 0.15);
  const warmth = clamp(0.16 + ageish * 0.36 + name * 0.48);
  const seed = [name, country, zipForce, whole];
  return {
    person,
    source: person.source,
    intensity,
    tempo,
    density,
    glitch,
    warmth,
    hue: Math.round(lerp(-130, 150, country)),
    primaryOpacity: lerp(0.62, 0.88, intensity),
    ghostOpacity: lerp(0.18, 0.55, intensity),
    artOpacityBoost: lerp(-0.05, 0.20, density),
    psycheOpacity: lerp(0.36, 0.78, glitch),
    grainOpacity: lerp(0.12, 0.34, density),
    seed,
    id: hashString(`${person.name}:${person.birthday}:${person.countryCode}`).toString(16).slice(0, 6),
  };
}

function fallbackModulation(reason = 'fallback') {
  return modulationFromPerson(normalizePerson({
    firstname: reason,
    lastname: 'operator',
    birthday: '1984-05-04',
    gender: 'unknown',
    address: { zipcode: '44444', country_code: 'US', latitude: 41.0998, longitude: -80.6495 },
  }, reason));
}

function applyModulation(mod) {
  currentMod = mod;
  document.documentElement.style.setProperty('--api-hue', `${mod.hue}deg`);
  document.documentElement.style.setProperty('--api-sat', String(lerp(1.10, 2.05, mod.intensity)));
  document.documentElement.style.setProperty('--api-contrast', String(lerp(1.02, 1.36, mod.glitch)));
  document.documentElement.style.setProperty('--api-brightness', String(lerp(0.72, 0.95, mod.warmth)));
  document.documentElement.style.setProperty('--primary-opacity', mod.primaryOpacity.toFixed(3));
  document.documentElement.style.setProperty('--ghost-opacity', mod.ghostOpacity.toFixed(3));
  document.documentElement.style.setProperty('--psyche-opacity', mod.psycheOpacity.toFixed(3));
  document.documentElement.style.setProperty('--grain-opacity', mod.grainOpacity.toFixed(3));
  document.documentElement.style.setProperty('--grain-a', `${Math.round(lerp(4, 12, mod.density))}px`);
  document.documentElement.style.setProperty('--grain-b', `${Math.round(lerp(8, 19, mod.glitch))}px`);
  document.documentElement.style.setProperty('--spin-speed', `${Math.round(lerp(74, 22, mod.tempo))}s`);
  document.documentElement.style.setProperty('--robo-opacity', String(lerp(0.12, 0.42, mod.intensity)));
  document.documentElement.style.setProperty('--robo-blur', `${lerp(0.2, 3.4, mod.glitch).toFixed(2)}px`);
  document.documentElement.style.setProperty('--robo-speed', `${Math.round(lerp(44, 16, mod.tempo))}s`);
  if (stage) {
    stage.dataset.modSource = mod.source;
    stage.dataset.modId = mod.id;
  }
  renderRoboLayer(mod);
  modulatorEl.textContent = `API ghost: ${mod.source} seed ${mod.id} · robohash · tempo ${mod.tempo.toFixed(2)} · density ${mod.density.toFixed(2)} · glitch ${mod.glitch.toFixed(2)}`;
}

function robohashUrl(seed, setName, size = 700) {
  const safeSeed = encodeURIComponent(`randycamp-${seed}`);
  return `${ROBOHASH_BASE}/${safeSeed}.png?set=${setName}&size=${size}x${size}`;
}

function randomRoboStyle(index, mod) {
  const seed = mod.seed[index % mod.seed.length];
  return {
    x: `${lerp(-6, 106, Math.random() * 0.56 + seed * 0.44)}%`,
    y: `${lerp(-8, 108, Math.random() * 0.58 + mod.seed[(index + 1) % mod.seed.length] * 0.42)}%`,
    size: `${lerp(18, 44, Math.random() * 0.36 + mod.density * 0.64)}vmax`,
    rot: `${lerp(-34, 34, Math.random() * 0.52 + mod.glitch * 0.48)}deg`,
    rotEnd: `${lerp(-38, 38, Math.random() * 0.42 + mod.seed[(index + 2) % mod.seed.length] * 0.58)}deg`,
    scale: String(lerp(0.72, 1.52, Math.random() * 0.44 + mod.intensity * 0.56)),
    opacity: lerp(0.10, 0.52, Math.random() * 0.36 + mod.intensity * 0.64).toFixed(3),
    blend: choice(mod.glitch > 0.56 ? ['difference', 'hard-light', 'color-dodge', 'exclusion'] : ['screen', 'overlay', 'lighten', 'hard-light']),
    hue: `${mod.hue + lerp(-95, 95, Math.random())}deg`,
    sat: String(lerp(1.2, 2.7, mod.intensity)),
    driftX: `${lerp(-4, 4, Math.random())}vmax`,
    driftY: `${lerp(-3, 3, Math.random())}vmax`,
  };
}

function renderRoboLayer(mod = currentMod) {
  if (!roboLayer) return;
  const count = Math.max(2, Math.min(7, Math.round(lerp(2, 7, mod.density))));
  const sets = ['set1', 'set2', 'set3', 'set4'];
  roboLayer.replaceChildren();
  for (let index = 0; index < count; index += 1) {
    const orb = document.createElement('figure');
    orb.className = 'robo-orb';
    const style = randomRoboStyle(index, mod);
    Object.entries(style).forEach(([key, value]) => orb.style.setProperty(`--${key}`, value));
    const img = document.createElement('img');
    img.loading = 'eager';
    img.decoding = 'async';
    img.alt = '';
    const setName = sets[(Math.floor(mod.seed[1] * sets.length) + index) % sets.length];
    img.src = robohashUrl(`${mod.id}-${index}-${mod.person.countryCode}-${mod.person.zipcode}`, setName, index < 2 ? 900 : 600);
    img.onerror = () => orb.remove();
    orb.append(img);
    roboLayer.append(orb);
  }
}

async function refreshModulation() {
  let person;
  try {
    const data = await loadJson(FAKER_API);
    person = normalizePerson((data.data || [])[0] || data, 'fakerapi');
  } catch (error) {
    console.warn('FakerAPI modulation failed, using local fallback', error);
    person = personFromFallback('local-fallback');
  }
  applyModulation(modulationFromPerson(person));
  scheduleModulation();
  renderArtLayer();
}

function scheduleModulation() {
  clearTimeout(modTimer);
  const span = MOD_REFRESH_MAX_MS - MOD_REFRESH_MIN_MS;
  const delay = MOD_REFRESH_MIN_MS + Math.round(span * currentMod.seed[0]);
  modTimer = window.setTimeout(refreshModulation, delay);
}

function randomCardStyle(index) {
  const mod = currentMod;
  const wide = Math.random() > lerp(0.68, 0.38, mod.density);
  const width = wide ? lerp(30, 64, mod.density) + Math.random() * 14 : lerp(16, 38, mod.density) + Math.random() * 14;
  const opacity = clamp(0.08 + Math.random() * 0.25 + mod.artOpacityBoost);
  const blends = mod.glitch > 0.62
    ? ['difference', 'hard-light', 'color-dodge', 'screen', 'overlay']
    : ['normal', 'screen', 'overlay', 'hard-light', 'lighten', 'color-dodge'];
  const spin = mod.seed[(index + 1) % mod.seed.length];
  return {
    x: `${-4 + ((Math.random() * 0.74 + spin * 0.26) * 108)}%`,
    y: `${-3 + ((Math.random() * 0.72 + mod.seed[index % mod.seed.length] * 0.28) * 106)}%`,
    w: `${width}vmax`,
    rot: `${lerp(-42, 42, Math.random() * 0.65 + mod.glitch * 0.35)}deg`,
    scale: String(lerp(0.76, 1.55, Math.random() * 0.55 + mod.density * 0.45)),
    opacity: opacity.toFixed(3),
    blur: `${Math.random() > lerp(0.86, 0.50, mod.glitch) ? lerp(1.2, 6.0, mod.glitch) : Math.random() * 0.5}px`,
    hue: `${mod.hue + lerp(-46, 46, Math.random())}deg`,
    sat: String(lerp(1.02, 2.15, mod.intensity)),
    blend: blends[(index + Math.floor(mod.seed[2] * blends.length)) % blends.length],
    ratio: wide ? '1.35 / 1' : '1 / 1.28',
  };
}

function renderArtLayer() {
  const pool = artPool.length ? artPool : fallbackArt;
  if (!pool.length) return;
  const count = Math.max(5, Math.min(13, Math.round(lerp(ART_CARD_COUNT - 3, ART_CARD_COUNT + 4, currentMod.density))));
  activeArt = shuffle(pool).slice(0, count);
  artLayer.replaceChildren();
  activeArt.forEach((art, index) => {
    const card = document.createElement('figure');
    card.className = 'art-card';
    const style = randomCardStyle(index);
    Object.entries(style).forEach(([key, value]) => card.style.setProperty(`--${key}`, value));
    const img = document.createElement('img');
    img.loading = 'eager';
    img.decoding = 'async';
    img.alt = '';
    img.onerror = () => {
      const fallback = randomLocalArtUrl();
      if (fallback && img.src !== new URL(fallback, window.location.href).href) {
        img.src = fallback;
      }
    };
    img.src = imageUrl(art, index < 4 ? 1400 : 900);
    card.append(img);
    artLayer.append(card);
  });
  const lead = activeArt[0];
  creditEl.textContent = lead ? `Art layer: ${lead.title}, ${lead.artist}${lead.date ? `, ${lead.date}` : ''}. Images from Art Institute of Chicago public API.` : '';
}

async function refreshArtFromApi() {
  try {
    await fetchArticBatch();
    renderArtLayer();
  } catch (error) {
    if (!artPool.length && fallbackArt.length) artPool = shuffle(fallbackArt);
    renderArtLayer();
    console.warn(error);
  }
}

async function playVideo(video, clip, { loop = true } = {}) {
  video.pause();
  video.muted = true;
  video.playsInline = true;
  video.setAttribute('playsinline', '');
  video.preload = 'auto';
  video.loop = loop;
  video.src = clip.url;
  video.load();
  try {
    await video.play();
    document.documentElement.classList.add('is-playing');
    return true;
  } catch (error) {
    console.warn('video play blocked or failed', error);
    return false;
  }
}

function primaryDelay() {
  const mod = currentMod;
  return Math.round(lerp(PRIMARY_REFRESH_MS * 1.35, PRIMARY_REFRESH_MS * 0.58, mod.tempo));
}

function ghostDelay() {
  const mod = currentMod;
  return Math.round(lerp(GHOST_REFRESH_MS * 1.2, GHOST_REFRESH_MS * 0.52, mod.glitch));
}

function artDelay() {
  const mod = currentMod;
  return Math.round(lerp(ART_REFRESH_MS * 1.25, ART_REFRESH_MS * 0.62, mod.density));
}

async function swapPrimary() {
  const clip = nextClip();
  if (!clip) return;
  const mod = currentMod;
  standbyPrimary.style.setProperty('--clip-rot', `${lerp(-6, 6, Math.random() * 0.55 + mod.glitch * 0.45)}deg`);
  standbyPrimary.style.setProperty('--clip-scale', String(lerp(1.00, 1.24, Math.random() * 0.48 + mod.density * 0.52)));
  standbyPrimary.style.filter = `saturate(${lerp(1.08, 2.15, mod.intensity)}) contrast(${lerp(1.02, 1.42, mod.glitch)}) brightness(${lerp(0.92, 1.12, mod.warmth)}) hue-rotate(${mod.hue * 0.35}deg)`;
  await playVideo(standbyPrimary, clip, { loop: true });
  standbyPrimary.classList.add('active');
  activePrimary.classList.remove('active');
  [activePrimary, standbyPrimary] = [standbyPrimary, activePrimary];
  statusEl.textContent = `generated clips cycling · ${clip.category} / ${clip.title}`;
}

async function swapGhost() {
  const clip = nextClip();
  if (!clip) return;
  const mod = currentMod;
  const calmBlends = ['difference', 'overlay', 'screen', 'hard-light', 'lighten'];
  const hardBlends = ['difference', 'exclusion', 'color-dodge', 'hard-light', 'screen'];
  const blends = mod.glitch > 0.58 ? hardBlends : calmBlends;
  ghost.style.opacity = String(clamp(mod.ghostOpacity + Math.random() * 0.12 - 0.04));
  ghost.style.mixBlendMode = choice(blends);
  ghost.style.filter = `saturate(${lerp(1.18, 2.35, mod.intensity)}) contrast(${lerp(1.04, 1.62, mod.glitch)}) hue-rotate(${mod.hue + lerp(-70, 70, Math.random())}deg)`;
  ghost.style.transform = `rotate(${lerp(-9, 9, Math.random() * 0.52 + mod.glitch * 0.48)}deg) scale(${lerp(1.06, 1.31, mod.density)})`;
  await playVideo(ghost, clip, { loop: true });
}

function schedulePrimary() {
  clearTimeout(clipTimer);
  clipTimer = window.setTimeout(async () => {
    await swapPrimary();
    schedulePrimary();
  }, primaryDelay());
}

function scheduleGhost() {
  clearTimeout(ghostTimer);
  ghostTimer = window.setTimeout(async () => {
    await swapGhost();
    scheduleGhost();
  }, ghostDelay());
}

function scheduleArt() {
  clearTimeout(artTimer);
  artTimer = window.setTimeout(async () => {
    await refreshArtFromApi();
    scheduleArt();
  }, artDelay());
}

function clearTimers() {
  clearTimeout(clipTimer);
  clearTimeout(ghostTimer);
  clearTimeout(artTimer);
  clearTimeout(modTimer);
}

async function startPlayback() {
  clearTimers();
  if (!clips.length) return;
  clipQueue = shuffle(clips);
  await swapPrimary();
  await swapGhost();
  await refreshArtFromApi();
  schedulePrimary();
  scheduleGhost();
  scheduleArt();
  scheduleModulation();
}

async function boot() {
  const clipData = await loadJson(CLIPS_URL);
  clips = shuffle(clipData.clips || []);
  await loadArtFallback();
  await loadGhostFallback();
  applyModulation(modulationFromPerson(personFromFallback('local-seed')));
  statusEl.textContent = 'generated clips loaded. API ghost layer warming up.';
  startButton.addEventListener('click', startPlayback);
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) startPlayback();
  });
  await refreshModulation();
  await startPlayback();
}

boot().catch((error) => {
  console.error(error);
  statusEl.textContent = `Could not start preview: ${error.message}`;
});
