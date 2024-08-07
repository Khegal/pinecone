let isGameActive = false;
let SCORE = 0;
let TIME = 0;
let NEXT_FIVE_TETROMINOS = 0;
let HOLD = null;
let ON_HAND = null;
let allowedSwitchLeft = 1;

const ROWS = 22;
const COLS = 10;
const tetrominoSeq = [];

const playButtonFromDoc = document.getElementById("playButton");
const tetrisFromDoc = document.getElementById("tetris");
const timeFromDoc = document.getElementById("time");
const holdTetrominoFromDoc = document.getElementById("hold");
const nextTetrominosFromDoc = document.getElementById("nextShapes");
const shapeOnHandFromDoc = document.getElementById("shapeOnHand");

const tetrominoes = {
  T: [
    [0, 1, 0],
    [1, 1, 1],
    [0, 0, 0],
  ],

  I: [
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  L: [
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0],
  ],
  J: [
    [1, 0, 0],
    [1, 1, 1],
    [0, 0, 0],
  ],
  O: [
    [0, 1, 1],
    [0, 1, 1],
    [0, 0, 0],
  ],
  S: [
    [0, 1, 1],
    [1, 1, 0],
    [0, 0, 0],
  ],
  Z: [
    [1, 1, 0],
    [0, 1, 1],
    [0, 0, 0],
  ],
};

const colors = {
  I: "cyan",
  J: "navy",
  L: "orange",
  O: "yellow",
  T: "purple",
  Z: "red",
  S: "green",
};

const renderPlayField = () => {
  tetrisFromDoc.innerHTML = "";
  Array.from({ length: ROWS * COLS }).forEach((_, index) => {
    const field = document.createElement("div");
    field.classList.add("field");
    const rows = Math.floor(index / COLS);

    if (rows >= 2) {
      field.setAttribute("id", "playField");
    } else {
      field.setAttribute("id", "spawnField");
    }

    if (index === 14) {
      field.setAttribute("id", "spawnPoint");
    }

    tetrisFromDoc.appendChild(field);
  });
};

const render = () => {
  renderPlayField();
};
render();
