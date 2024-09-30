const TOTAL_WHITE_NOTES = 36;
const TOTAL_BLACK_NOTES = 25;

const PIANO_BOARD = document.querySelector("#piano");

const NOTES = ["C", "D", "E", "F", "G", "A", "B"];

const KEYBOARD = "123QWERTYUIOP[]ASDFGHJKL;'ZXCVBNM,./";

const BLACK_KEY_LAYOUT = [1, 2, 4, 5, 6];

let NOTE_DIGIT = 2;

for (let i = 0; i < TOTAL_WHITE_NOTES; i++) {
  const keyboardKey = KEYBOARD[i];
  const tileEl = document.createElement("div");
  tileEl.className = "tile";
  const noteLetter = NOTES[i % 7];
  const tileNote = `${noteLetter}${NOTE_DIGIT}`;

  const audio = new Audio(`./src/${tileNote}.mp3`);

  tileEl.addEventListener("click", () => {
    audio.play();
  });
  tileEl.setAttribute("data-key", keyboardKey);

  tileEl.innerText = tileNote;
  PIANO_BOARD.appendChild(tileEl);

  if (noteLetter === "B") {
    NOTE_DIGIT++;
  }
}
window.addEventListener("keydown", (e) => {
  const pressedKey = e.key.toUpperCase();
  if (KEYBOARD.includes(pressedKey)) {
    const tile = document.querySelector(`[data-key='${pressedKey}']`);
    console.log(tile);
  }
});
