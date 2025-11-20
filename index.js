function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const sounds = [
  "./asset/c6.mp3",
  "./asset/d6.mp3",
  "./asset/e6.mp3",
  "./asset/f6.mp3",
  "./asset/g6.mp3",
  "./asset/a6.mp3",
  "./asset/b6.mp3"
];

const keys = ["Z","X","C","V","B","N","M"];
const isTouch = 'ontouchstart' in window;
let container = document.querySelector(".piano-container");

let boxes = [];

function playNote(i) {
  const audio = new Audio(sounds[i]);
  audio.currentTime = 0;
  audio.play();
  boxes[i].style.backgroundColor = getRandomColor();
}

// Create keys
for (let i = 0; i < sounds.length; i++) {
  let div = document.createElement("div");
  div.classList.add("box");
  div.textContent = keys[i];

  // 🔥 Fix — Set initial color so blank na dikhaye
  div.style.backgroundColor = getRandomColor();

  div.addEventListener("click", () => playNote(i));
  if (!isTouch) {
    div.addEventListener("mouseover", () => playNote(i));
  }

  boxes.push(div);
  container.appendChild(div);
}

// Keyboard support
if (!isTouch) {
  document.addEventListener("keydown", (e) => {
    const idx = keys.indexOf(e.key.toUpperCase());
    if (idx !== -1) playNote(idx);
  });
}
