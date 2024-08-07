let isGameActive = false;
let SCORE = 0;
let TIME = 0;
let NEXT_FIVE_TETROMINOS = [];
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

const tetrominos = {
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

const rngInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min - 1)) + min;
};

const rngSequence = () => {
  const sequence = ["I", "J", "L", "O", "S", "T", "Z"];

  while (sequence.length) {
    const rng = rngInt(0, sequence.length - 1);
    const name = sequence.splice(rng, 1)[0];
    tetrominoSeq.push(name);
  }
};

const rngTetrominos = () => {
  if (tetrominoSeq.length === 0) {
    rngSequence();
  }

  const name = tetrominoSeq.pop();
  const matrix = tetrominos[name];
  const col = Math.floor(COLS / 2 - matrix[0].length / 2);
  const row = 0;

  return {
    name: name,
    matrix: matrix,
    col: col,
    row: row,
  };
};

const nextFiveTetrominos = () => {
  for (let i = 0; i < 5; i++) {
    NEXT_FIVE_TETROMINOS.push(rngTetrominos());
  }
  return NEXT_FIVE_TETROMINOS;
};

const fillNextTetrominos = () => {
  if (NEXT_FIVE_TETROMINOS.length < 5) {
    NEXT_FIVE_TETROMINOS.push(rngTetrominos());
  }
};

const tetrominoOnHand = () => {
  ON_HAND = NEXT_FIVE_TETROMINOS[0];
  NEXT_FIVE_TETROMINOS.shift();
  fillNextTetrominos();
  return ON_HAND;
};

const drawTetromino = (tetromino) => {
  const fields = document.querySelectorAll("#tetris .field");
  tetromino.matrix.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value) {
        const fieldIndex = (tetromino.row + y) * COLS + (tetromino.col + x);
        fields[fieldIndex].style.backgroundColor = colors[tetromino.name];
      }
    });
  });
};

const eventHandler = () => {
  document.addEventListener("keydown", (event) => {
    if (event.keyCode === 67) {
      if (HOLD === null) {
        HOLD = ON_HAND;
        ON_HAND = NEXT_FIVE_TETROMINOS[0];
        NEXT_FIVE_TETROMINOS.shift();
        fillNextTetrominos();
        render();
      } else {
        const temp = ON_HAND;
        ON_HAND = HOLD;
        HOLD = temp;
        render();
      }
    } else {
      if (event.keyCode === 37 || event.keyCode == 39) {
      }
    }
  });
};

const render = () => {
  renderPlayField();
  nextFiveTetrominos();
  tetrominoOnHand();
  drawTetromino(ON_HAND);
  eventHandler();
};
render();
