console.log("Act Out That Sound app.js loaded!");

// Act Out That Sound — single-deck surprise flow

// 1) List your sound files here (start with a few to test)
const sounds = [
  "sounds/animalmusic.mp3",
  "sounds/bark.mp3",
  "sounds/bear.mp3",
  "sounds/bigfart.mp3",
  "sounds/bite.mp3",
  "sounds/blinking.mp3",
  "sounds/boink.mp3",
  "sounds/boo.mp3",
  "sounds/burp.mp3",
  "sounds/burp1.mp3",
  "sounds/carhorn.mp3",
  "sounds/carhorn1.mp3",
  "sounds/cat.mp3",
  "sounds/cat1.mp3",
  "sounds/charm.mp3",
  "sounds/chick.mp3",
  "sounds/chicken.mp3",
  "sounds/chipmunklaugh.mp3",
  "sounds/cow.mp3",
  "sounds/cricket.mp3",
  "sounds/crying.mp3",
  "sounds/didyouhearthat.mp3",
  "sounds/ding.mp3",
  "sounds/doorbell.mp3",
  "sounds/dream.mp3",
  "sounds/eagle.mp3",
  "sounds/earthquake.mp3",
  "sounds/elephant.mp3",
  "sounds/evillaugh.mp3",
  "sounds/explosion.mp3",
  "sounds/fanfare.mp3",
  "sounds/fart.mp3",
  "sounds/firework.mp3",
  "sounds/frog.mp3",
  "sounds/funnyfart.mp3",
  "sounds/gasp.mp3",
  "sounds/goat.mp3",
  "sounds/growl.mp3",
  "sounds/grunt.mp3",
  "sounds/hammer.mp3",
  "sounds/hearts.mp3",
  "sounds/hello.mp3",
  "sounds/hellothere.mp3",
  "sounds/hiss.mp3",
  "sounds/honk.mp3",
  "sounds/honking.mp3",
  "sounds/hornhonk.mp3",
  "sounds/horse.mp3",
  "sounds/iloveyou.mp3",
  "sounds/jackinthebox.mp3",
  "sounds/jump.mp3",
  "sounds/kids.mp3",
  "sounds/kiss.mp3",
  "sounds/kiss2.mp3",
  "sounds/laugh.mp3",
  "sounds/lion.mp3",
  "sounds/longfart.mp3",
  "sounds/magic.mp3",
  "sounds/magic1.mp3",
  "sounds/meow.mp3",
  "sounds/mmmhmmm.mp3",
  "sounds/monkey.mp3",
  "sounds/noises.mp3",
  "sounds/ohno.mp3",
  "sounds/opera.mp3",
  "sounds/panting.mp3",
  "sounds/phone.mp3",
  "sounds/phonevoice.mp3",
  "sounds/pig.mp3",
  "sounds/proudfart.mp3",
  "sounds/quack.mp3",
  "sounds/reaction.mp3",
  "sounds/rimshot.mp3",
  "sounds/roar.mp3",
  "sounds/rooster.mp3",
  "sounds/running.mp3",
  "sounds/sad.mp3",
  "sounds/sadhorn.mp3",
  "sounds/scream.mp3",
  "sounds/scream1.mp3",
  "sounds/scream2.mp3",
  "sounds/scream3.mp3",
  "sounds/sheep.mp3",
  "sounds/shortfart.mp3",
  "sounds/sing.mp3",
  "sounds/sing1.mp3",
  "sounds/slidewhistle.mp3",
  "sounds/snoring.mp3",
  "sounds/sofunny.mp3",
  "sounds/spaceship.mp3",
  "sounds/spin.mp3",
  "sounds/splash.mp3",
  "sounds/splat.mp3",
  "sounds/spring.mp3",
  "sounds/springjump.mp3",
  "sounds/squeakytoy.mp3",
  "sounds/thunder.mp3",
  "sounds/trombone.mp3",
  "sounds/ufo.mp3",
  "sounds/violin.mp3",
  "sounds/vocal.mp3",
  "sounds/wetfart.mp3",
  "sounds/whale.mp3",
  "sounds/windgust.mp3",
  "sounds/witch.mp3",
  "sounds/wobble.mp3",
  "sounds/woohoo.mp3",
  "sounds/yay.mp3",
  "sounds/yeahh.mp3",
  "sounds/yes.mp3",
  "sounds/yoink.mp3",
  "sounds/zap.mp3"
];

// 2) Grab UI (no replay button)
const el = {
  play:   document.getElementById("playBtn"),
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

function updatePlayLabel(){
  el.play.textContent = (hpos > 0) ? "▶ Play again" : "▶ Play";
}

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
  // First ever tap: pick a sound; otherwise just replay the same one
  if (hpos === 0){
    if (deck.length === 0) refillDeck();
    const first = deck.shift();
    history.push(first);
    hpos = history.length;
  }
  await playPath(current());
  updatePlayLabel();
}
async function onNext(){
  if (hpos < history.length) history = history.slice(0, hpos);
  if (deck.length === 0) refillDeck();
  const pick = deck.shift();
  history.push(pick);
  hpos = history.length;
  await playPath(current());
  updatePlayLabel();
}
async function onBack(){
  if (hpos <= 1){ el.status.textContent = "Start reached"; return; }
  hpos -= 1;
  await playPath(current());
  updatePlayLabel();
}

// Wire up (no replay listener)
el.play .addEventListener('click', onPlay);
el.next .addEventListener('click', onNext);
el.back .addEventListener('click', onBack);
el.next.addEventListener('click', () => console.log('[Next] clicked (probe)'));


// Optional keyboard shortcuts (remove 'r' for replay)
document.addEventListener('keydown', e => {
  const k = e.key.toLowerCase();
  if (k === 'enter' || k === ' ') onPlay();
  if (k === 'arrowright') onNext();
  if (k === 'arrowleft') onBack();
});

// Set initial label
updatePlayLabel();
