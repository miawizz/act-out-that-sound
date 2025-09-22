// Act Out That Sound — single-deck surprise flow

// 1) List your sound files here (start with a few to test)
const sounds = [
  "sounds/boing.mp3",
  "sounds/whoosh.mp3",
  "sounds/horn.mp3"
];

// 2) Grab UI
const el = {
  play:   document.getElementById("playBtn"),
  replay: document.getElementById("replayBtn"),
  next:   document.getElementById("nextBtn"),
  back:   document.getElementById("backBtn"),
  status: document.getElementById("status")
};

let unlocked = false;
let deck = [];
let history = [];  // array of file paths in order played
let hpos = 0;      // cursor into history (0..history.length)
const cache = new Map();

function shuffle(a){ for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]];} return a; }

function ensureUnlocked(){
  if (unlocked) return;
  const a = new Audio();
  a.muted = true;
  a.play().catch(()=>{}).finally(()=>{ unlocked = true; });
}

function preload(paths){
  paths.forEach(p => {
    if (cache.has(p)) return;
    const a = new Audio(p);
    a.preload = "auto";
    cache.set(p, a);
  });
}
preload(sounds);

function refillDeck() {
  const remaining = sounds.filter(p => !history.includes(p));
  if (remaining.length === 0){
    history = [];
    hpos = 0;
    deck = shuffle([...sounds]);
  } else {
    deck = shuffle(remaining);
  }
}

function current(){ return hpos > 0 ? history[hpos-1] : null; }

async function playPath(path){
  if (!path) return;
  ensureUnlocked();
  const audio = cache.get(path) || new Audio(path);
  cache.set(path, audio);
  try {
    audio.currentTime = 0;
    await audio.play();
    el.status.textContent = `Playing ${path.split("/").pop()}`;
  } catch {
    el.status.textContent = "Playback blocked. Tap again";
  }
}

async function onPlay(){
  if (hpos === 0){
    if (deck.length === 0) refillDeck();
    const first = deck.shift();
    history.push(first);
    hpos = history.length;
  }
  await playPath(current());
}
async function onReplay(){ await playPath(current()); }
async function onNext(){
  if (hpos < history.length) history = history.slice(0, hpos);
  if (deck.length === 0) refillDeck();
  const pick = deck.shift();
  history.push(pick);
  hpos = history.length;
  await playPath(current());
}
async function onBack(){
  if (hpos <= 1){ el.status.textContent = "Start reached"; return; }
  hpos -= 1;
  await playPath(current());
}

// Wire up
el.play  .addEventListener('click', onPlay);
el.replay.addEventListener('click', onReplay);
el.next  .addEventListener('click', onNext);
el.back  .addEventListener('click', onBack);

// Optional keyboard shortcuts
document.addEventListener('keydown', e => {
  const k = e.key.toLowerCase();
  if (k === 'enter' || k === ' ') onPlay();
  if (k === 'arrowright') onNext();
  if (k === 'arrowleft') onBack();
  if (k === 'r') onReplay();
});
