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
  
  "sounds/Awshucks.mp3",
  "sounds/Baby1.mp3",
  "sounds/Babymeow.mp3",
  "sounds/Badopera.mp3",
  "sounds/Badscat.mp3",
  "sounds/Beeyoww.mp3",
  "sounds/Blubbe.mp3",
  "sounds/Blubberish.mp3",
  "sounds/Boing.mp3",
  "sounds/Boredyay.mp3",
  "sounds/Bumbumbum.mp3",
  "sounds/Bumdiddlydum.mp3",
  "sounds/Cackle.mp3",
  "sounds/Cantbelieveit.mp3",
  "sounds/Choptimber.mp3",
  "sounds/Deedeedee.mp3",
  "sounds/Dingdongdumpcakes.mp3",
  "sounds/Dontmindifido.mp3",
  "sounds/Excuseme.mp3",
  "sounds/Excusemeijustfarted.mp3",
  "sounds/Falala.mp3",
  "sounds/Funnykid.mp3",
  "sounds/Getouttahere.mp3",
  "sounds/Goinggoinggone.mp3",
  "sounds/Goodygoody.mp3",
  "sounds/Googoogaagaa.mp3",
  "sounds/Gosh.mp3",
  "sounds/Gurgle.mp3",
  "sounds/Happybirthday.mp3",
  "sounds/Hehehe.mp3",
  "sounds/Helpme.mp3",
  "sounds/Herwe.mp3",
  "sounds/Heyhowyadoin.mp3",
  "sounds/Hmmmhhmm.mp3",
  "sounds/Hoholaugh.mp3",
  "sounds/Hooray.mp3",
  "sounds/Jokin.mp3",
  "sounds/Kiddingme.mp3",
  "sounds/Kidheheh.mp3",
  "sounds/Kidouch.mp3",
  "sounds/Laughingew.mp3",
  "sounds/Manouch.mp3",
  "sounds/Meepmeep.mp3",
  "sounds/Mememe.mp3",
  "sounds/Mmhmm.mp3",
  "sounds/Mmmdelicious.mp3",
  "sounds/Nonono.mp3",
  "sounds/Nottoosure.mp3",
  "sounds/Noway.mp3",
  "sounds/Ohdear.mp3",
  "sounds/Ohfiddlesticks.mp3",
  "sounds/Ohhhh.mp3",
  "sounds/Ohmygarsh.mp3",
  "sounds/Ohyaa.mp3",
  "sounds/Okayjolly.mp3",
  "sounds/Ouch1.mp3",
  "sounds/Ouch2.mp3",
  "sounds/Pleaseplease.mp3",
  "sounds/Pop.mp3",
  "sounds/Saveme.mp3",
  "sounds/Scat.mp3",
  "sounds/Sethut.mp3",
  "sounds/Shhh.mp3",
  "sounds/Sillylaugh1.mp3",
  "sounds/Sillylaugh2.mp3",
  "sounds/Sillylaugh3.mp3",
  "sounds/Sillylaugh4.mp3",
  "sounds/Sillylaugh5.mp3",
  "sounds/Sillylaugh6.mp3",
  "sounds/Sillysiren.mp3",
  "sounds/Sillysneeze.mp3",
  "sounds/Singwah.mp3",
  "sounds/Sohungry.mp3",
  "sounds/Teeheehee.mp3",
  "sounds/Thatwasdelicious.mp3",
  "sounds/Tongueclicks.mp3",
  "sounds/Tootsmcgee.mp3",
  "sounds/Touchdown.mp3",
  "sounds/Uhh.mp3",
  "sounds/Uhokay.mp3",
  "sounds/Wahwah.mp3",
  "sounds/Wehwehweh.mp3",
  "sounds/Weird1.mp3",
  "sounds/Weird2.mp3",
  "sounds/Weirdkidlaugh.mp3",
  "sounds/Weirdsinging.mp3",
  "sounds/Weirdsnore.mp3",
  "sounds/What.mp3",
  "sounds/Whatsthatsmell.mp3",
  "sounds/Whatsup.mp3",
  "sounds/Whattayadoin.mp3",
  "sounds/Whereami.mp3",
  "sounds/Woah.mp3",
  "sounds/Woohooweird.mp3",
  "sounds/Wow1.mp3",
  "sounds/Wow2.mp3",
  "sounds/Wow3.mp3",
  "sounds/Yay.mp3",
  "sounds/Yes.mp3",
  "sounds/Youdontsay.mp3",
  "sounds/Youshouldnthave.mp3",
  "sounds/Yoww.mp3",
  "sounds/Zeereereer.mp3",
  "sounds/Zzzz.mp3",
  "sounds/zap.mp3"
];
// --- Bad sound tracking (persisted) ---
const BAD_KEY = 'aots_bad';
let BAD = new Set();
try { BAD = new Set(JSON.parse(localStorage.getItem(BAD_KEY) || '[]')); } catch {}
function saveBad(){ localStorage.setItem(BAD_KEY, JSON.stringify([...BAD])); }
function markBad(path){
  if (!BAD.has(path)) {
    BAD.add(path);
    saveBad();
    console.warn('Marked bad sound:', path);
  }
}

// 2) Grab UI (no replay button)
const el = {
  play:   document.getElementById("playBtn"),
  next:   document.getElementById("nextBtn"),
  back:   document.getElementById("backBtn"),
  status: document.getElementById("status")
};

let unlocked = false;
let deck = [];
let history = [];   // array of file paths in order played
let hpos = 0;       // cursor into history (0..history.length)
const cache = new Map();
let currentAudio = null; // track the currently selected <audio>

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

// Build a new deck excluding items already seen AND any known bad files
function refillDeck() {
  const remaining = sounds.filter(p => !history.includes(p) && !BAD.has(p));
  if (remaining.length === 0){
    history = [];
    hpos = 0;
    deck = shuffle(sounds.filter(p => !BAD.has(p)));
  } else {
    deck = shuffle(remaining);
  }
}

function current(){ return hpos > 0 ? history[hpos-1] : null; }

function isPlaying(){ return currentAudio && !currentAudio.paused; }
function stopCurrent(){
  if (currentAudio){
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
}

function setPlayLabel(){
  if (isPlaying()){
    el.play.textContent = "⏸ Pause";
  } else {
    el.play.textContent = (hpos > 0) ? "▶ Play again" : "▶ Play";
  }
}

async function playPath(path){
  if (!path) return;
  ensureUnlocked();

  const audio = cache.get(path) || new Audio(path);
  cache.set(path, audio);

  // If switching tracks, stop the previous one first
  if (currentAudio && currentAudio !== audio){
    stopCurrent();
  }
  currentAudio = audio;

  // If the element errors (404/unsupported), mark bad and skip forward
  audio.onerror = async () => {
    el.status.textContent = `Error playing ${path.split('/').pop()} — skipping`;
    markBad(path);
    await onNext();
  };

  try {
    audio.currentTime = 0;
    await audio.play();
    el.status.textContent = `Playing ${path.split("/").pop()}`;
    setPlayLabel();                 // show "Pause" while playing
    audio.onended = () => setPlayLabel(); // when finished, show "Play again"
  } catch {
    // Autoplay/codec/404 — treat as bad and move on
    el.status.textContent = `Error playing ${path.split('/').pop()} — skipping`;
    markBad(path);
    await onNext();
  }
}

// Play/Pause toggle:
// - If nothing selected yet, pick the first card then play.
// - If already playing, pause.
// - If paused, resume same sound.
async function onPlay(){
  if (isPlaying()){
    currentAudio.pause();
    setPlayLabel();
    return;
  }
  if (hpos === 0){
    if (deck.length === 0) refillDeck();
    const first = deck.shift();
    history.push(first);
    hpos = history.length;
  }
  await playPath(current());
}

async function onNext(){
  // Stop anything currently playing
  if (isPlaying()) stopCurrent();

  // Trim forward history if we had gone back
  if (hpos < history.length) history = history.slice(0, hpos);

  if (deck.length === 0) refillDeck();

  const cur = current();
  let pick = deck.shift();
  // Avoid picking the same as current when possible
  if (cur && pick === cur && deck.length) pick = deck.shift();

  history.push(pick);
  hpos = history.length;
  await playPath(current());
}

async function onBack(){
  if (hpos <= 1){
    el.status.textContent = "Start reached";
    setPlayLabel();
    return;
  }
  if (isPlaying()) stopCurrent();
  hpos -= 1;
  await playPath(current());
}

// Wire up
el.play .addEventListener('click', onPlay);
el.next .addEventListener('click', onNext);
el.back .addEventListener('click', onBack);

// Keyboard shortcuts: Space/Enter toggle play/pause; arrows for nav
document.addEventListener('keydown', e => {
  const k = e.key.toLowerCase();
  if (k === ' ' || k === 'enter'){ e.preventDefault(); onPlay(); }
  if (k === 'arrowright') onNext();
  if (k === 'arrowleft') onBack();
});

// --- Optional: quick scanner you can run from Console to find bad files ---
function probeSound(path, timeout = 6000) {
  return new Promise((resolve, reject) => {
    const a = new Audio();
    a.preload = 'auto';
    a.src = path;

    const done = (ok) => {
      a.src = '';
      clearTimeout(t);
      ok ? resolve() : reject(new Error('unplayable'));
    };

    a.addEventListener('canplaythrough', () => done(true), { once: true });
    a.addEventListener('error', () => done(false), { once: true });
    a.load();

    const t = setTimeout(() => done(false), timeout);
  });
}

window.aotsScan = async function aotsScan() {
  const bad = [];
  let ok = 0;

  for (const p of sounds) {
    if (BAD.has(p)) { bad.push(p); continue; }
    try { await probeSound(p); ok++; }
    catch { bad.push(p); markBad(p); }
  }

  console.log('✅ OK count:', ok);
  console.log('❌ Bad files:', bad);
  try { await navigator.clipboard.writeText(bad.join('\n')); } catch {}
  alert(`Scan complete.\nOK: ${ok}\nBad: ${bad.length}\n(Bad list copied to clipboard)`);
};

window.aotsClearBad = function(){
  localStorage.removeItem(BAD_KEY);
  BAD = new Set();
  console.log('Cleared bad list');
};

// Initial label
setPlayLabel();
