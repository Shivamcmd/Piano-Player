function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const sounds = [
  "./asset/cinematic-piano-note-362716.mp3",
  "./asset/d6-82020.mp3",
  "./asset/g6-82013.mp3",
  "./asset/do-80236.mp3",
  "./asset/guit-91472.mp3",
  "./asset/toy-piano-87353.mp3",
  "./asset/2-notes-octave-guitar-83275.mp3",
  "./asset/scale-d6-106129.mp3",
  "./asset/piano-chord-6-97900.mp3",
  "./asset/a3-101081.mp3"
];

const keys = ["A", "S", "D", "F", "G", "H", "J", "K", "L", ";"];

let boxes = [];
let container = document.querySelector(".piano-container");

let isTouchDevice = 'ontouchstart' in window;

for (let i = 0; i < 10; i++) {
  let div = document.createElement("div");
  div.classList.add("box");

  div.style.backgroundColor = getRandomColor();
  div.textContent = keys[i];

  if (isTouchDevice) {
    // Mobile → Click event
    div.addEventListener("click", () => {
      div.style.backgroundColor = getRandomColor();
      new Audio(sounds[i]).play();
    });
  } else {
    // Laptop/Desktop → Hover effect
    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = getRandomColor();
      new Audio(sounds[i]).play();
    });
  }

  container.appendChild(div);
  boxes.push(div);
}
