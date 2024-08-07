let isGameActive = false;
let SCORE = 0;
let TIME = 0;
let NEXT_FIVE_TETROMINOS = [];
let HOLD = null;
let ON_HAND = null;
let allowedSwitchLeft = 10;
const ROWS = 22;
const COLS = 10;
const tetrominoSeq = [];
const playButton = document.getElementById("playButton");
const tetris = document.getElementById("tetris");
const time = document.getElementById("timeValue");
const score = document.getElementById("scoreValue");
const hold = document.getElementById("holdValue");
const shapeOnHand = document.getElementById("shapeOnHandValue");
const nextShapes = document.getElementById("nextShapesValue");

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
  tetris.innerHTML = "";
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

    tetris.appendChild(field);
  });
};

const rngInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const rngSequence = () => {
  const sequence = ["I", "J", "L", "O", "S", "T", "Z"];

  while (sequence.length) {
    const rng = rngInt(0, sequence.length - 1);
    const name = sequence.splice(rng, 1)[0];
    tetrominoSeq.push(name);
  }
};

const rngTetrominoes = () => {
  if (tetrominoSeq.length === 0) {
    rngSequence();
  }
  const name = tetrominoSeq.pop();
  const matrix = tetrominoes[name];
  const col = Math.floor(COLS / 2 - matrix[0].length / 2);
  const row = name === "I" ? 0 : 0;
  return {
    name: name,
    matrix: matrix,
    col: col,
    row: row,
  };
};

const fillNextTetrominoes = () => {
  if (NEXT_FIVE_TETROMINOS.length < 5) {
    NEXT_FIVE_TETROMINOS.push(rngTetrominoes());
  }
  return NEXT_FIVE_TETROMINOS;
};

const nextFiveTetrominoes = () => {
  for (let i = 0; i < 5; i++) {
    NEXT_FIVE_TETROMINOS.push(rngTetrominoes());
  }
  return NEXT_FIVE_TETROMINOS;
};

const tetrominoOnHand = () => {
  ON_HAND = NEXT_FIVE_TETROMINOS[0];
  NEXT_FIVE_TETROMINOS.shift();
  fillNextTetrominoes();
  return ON_HAND;
};

const switchHandAndHold = () => {
  document.addEventListener("keydown", (event) => {
    if (event.keyCode === 67) {
      if (HOLD === null) {
        HOLD = ON_HAND;
        ON_HAND = NEXT_FIVE_TETROMINOS[0];
        NEXT_FIVE_TETROMINOS.shift();
        fillNextTetrominoes();
        render();
        console.log(HOLD, ON_HAND, NEXT_FIVE_TETROMINOS);
      } else {
        allowedSwitchLeft--;
        const temp = HOLD;
        HOLD = ON_HAND;
        ON_HAND = temp;
        render();
        console.log(allowedSwitchLeft, HOLD, ON_HAND, NEXT_FIVE_TETROMINOS);
      }
    }
  });
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

const rotate = (martix) => {
  const N = martix.length - 1;
  const result = martix.map((row, i) => row.map((val, j) => martix[N - j][i]));
  return result;
};

const render = () => {
  renderPlayField();
  nextFiveTetrominoes();
  tetrominoOnHand();
  switchHandAndHold();
  if (isGameActive) {
    drawTetromino(ON_HAND);
  }
};

playButton.addEventListener("click", () => {
  isGameActive = true;
  render();
});

render();
