console.log("Act Out That Sound app.js loaded");

// ---------- SOUNDS ----------
const sounds = [
  "./sounds/animalmusic.mp3",
  "./sounds/bark.mp3",
  "./sounds/bear.mp3",
  "./sounds/bigfart.mp3",
  "./sounds/bite.mp3",
  "./sounds/blinking.mp3",
  "./sounds/boink.mp3",
  "./sounds/boo.mp3",
  "./sounds/burp.mp3",
  "./sounds/burp1.mp3",
  "./sounds/carhorn.mp3",
  "./sounds/carhorn1.mp3",
  "./sounds/cat.mp3",
  "./sounds/cat1.mp3",
  "./sounds/charm.mp3",
  "./sounds/chick.mp3",
  "./sounds/chicken.mp3",
  "./sounds/chipmunklaugh.mp3",
  "./sounds/cow.mp3",
  "./sounds/cricket.mp3",
  "./sounds/crying.mp3",
  "./sounds/didyouhearthat.mp3",
  "./sounds/ding.mp3",
  "./sounds/doorbell.mp3",
  "./sounds/dream.mp3",
  "./sounds/eagle.mp3",
  "./sounds/earthquake.mp3",
  "./sounds/elephant.mp3",
  "./sounds/evillaugh.mp3",
  "./sounds/explosion.mp3",
  "./sounds/fanfare.mp3",
  "./sounds/fart.mp3",
  "./sounds/firework.mp3",
  "./sounds/frog.mp3",
  "./sounds/funnyfart.mp3",
  "./sounds/gasp.mp3",
  "./sounds/goat.mp3",
  "./sounds/growl.mp3",
  "./sounds/grunt.mp3",
  "./sounds/hammer.mp3",
  "./sounds/hearts.mp3",
  "./sounds/hello.mp3",
  "./sounds/hellothere.mp3",
  "./sounds/hiss.mp3",
  "./sounds/honk.mp3",
  "./sounds/honking.mp3",
  "./sounds/hornhonk.mp3",
  "./sounds/horse.mp3",
  "./sounds/iloveyou.mp3",
  "./sounds/jackinthebox.mp3",
  "./sounds/jump.mp3",
  "./sounds/kids.mp3",
  "./sounds/kiss.mp3",
  "./sounds/kiss2.mp3",
  "./sounds/laugh.mp3",
  "./sounds/lion.mp3",
  "./sounds/longfart.mp3",
  "./sounds/magic.mp3",
  "./sounds/magic1.mp3",
  "./sounds/meow.mp3",
  "./sounds/mmmhmmm.mp3",
  "./sounds/monkey.mp3",
  "./sounds/noises.mp3",
  "./sounds/ohno.mp3",
  "./sounds/opera.mp3",
  "./sounds/panting.mp3",
  "./sounds/phone.mp3",
  "./sounds/phonevoice.mp3",
  "./sounds/pig.mp3",
  "./sounds/proudfart.mp3",
  "./sounds/quack.mp3",
  "./sounds/reaction.mp3",
  "./sounds/rimshot.mp3",
  "./sounds/roar.mp3",
  "./sounds/rooster.mp3",
  "./sounds/running.mp3",
  "./sounds/sad.mp3",
  "./sounds/sadhorn.mp3",
  "./sounds/scream.mp3",
  "./sounds/scream1.mp3",
  "./sounds/scream2.mp3",
  "./sounds/scream3.mp3",
  "./sounds/sheep.mp3",
  "./sounds/shortfart.mp3",
  "./sounds/sing.mp3",
  "./sounds/sing1.mp3",
  "./sounds/slidewhistle.mp3",
  "./sounds/snoring.mp3",
  "./sounds/sofunny.mp3",
  "./sounds/spaceship.mp3",
  "./sounds/spin.mp3",
  "./sounds/splash.mp3",
  "./sounds/splat.mp3",
  "./sounds/spring.mp3",
  "./sounds/springjump.mp3",
  "./sounds/squeakytoy.mp3",
  "./sounds/thunder.mp3",
  "./sounds/trombone.mp3",
  "./sounds/ufo.mp3",
  "./sounds/violin.mp3",
  "./sounds/vocal.mp3",
  "./sounds/wetfart.mp3",
  "./sounds/whale.mp3",
  "./sounds/windgust.mp3",
  "./sounds/witch.mp3",
  "./sounds/wobble.mp3",
  "./sounds/woohoo.mp3",
  "./sounds/yay.mp3",
  "./sounds/yeahh.mp3",
  "./sounds/yes.mp3",
  "./sounds/yoink.mp3"
];

// ---------- UI ----------
const playBtn = document.getElementById("playBtn");
const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");
const statusEl = document.getElementById("status");

// ---------- STATE ----------
let currentIndex = -1;
let history = [];
let audio = null;

// ---------- HELPERS ----------
function randomIndex() {
  return Math.floor(Math.random() * sounds.length);
}

function stopSound() {
  if (audio) {
    audio.pause();
    audio = null;
  }
  playBtn.textContent = currentIndex === -1 ? "▶ Play" : "▶ Play again";
}

// ---------- PLAY ----------
function playSound(index) {
  stopSound();

  audio = new Audio(sounds[index]);
  playBtn.textContent = "⏸ Pause";
  statusEl.textContent = `Playing ${sounds[index].split("/").pop()}`;

  audio.play();

  audio.onended = () => {
    stopSound();
  };
}

// ---------- EVENTS ----------
playBtn.addEventListener("click", () => {
  if (audio) {
    stopSound();
    return;
  }

  if (currentIndex === -1) {
    currentIndex = randomIndex();
    history.push(currentIndex);
  }

  playSound(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex = randomIndex();
  history.push(currentIndex);
  playSound(currentIndex);
});

backBtn.addEventListener("click", () => {
  if (history.length <= 1) {
    statusEl.textContent = "Start reached";
    return;
  }

  history.pop();
  currentIndex = history[history.length - 1];
  playSound(currentIndex);
});

// ---------- INIT ----------
stopSound();
