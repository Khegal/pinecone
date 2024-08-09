let isGameActive = false;
let SCORE = 0;
let TIME = 0;
let NEXT_FIVE_TETROMINOS = [];
let HOLD = null;
let ON_HAND = null;
let frame = 0;
const ROWS = 22;
const COLS = 10;
const tetrominoSeq = [];

let allowedSwitchLeft = 1;

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
  playfield.forEach((row, y) => {
    row.forEach((value, x) => {
      const field = document.createElement("div");
      field.classList.add("field");
      if (y >= 2) {
        field.setAttribute("id", "playField");
      } else {
        field.setAttribute("id", "spawnField");
      }
      if (y === 0 && x === 4) {
        field.setAttribute("id", "spawnPoint");
      }
      if (value) {
        field.style.backgroundColor = colors[value];
      }
      tetrisFromDoc.appendChild(field);
    });
  });
};

const holdfield = Array.from({ length: 5 }, () => Array(5).fill(0));

const renderHoldField = () => {
  holdTetrominoFromDoc.innerHTML = "";
};

const playfield = Array.from({ length: ROWS }, () => Array(COLS).fill(0));

const rngInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const rngSequence = () => {
  const sequence = ["I", "J", "L", "O", "S", "T", "Z"];
  while (sequence.length) {
    const rng = rngInt(0, sequence.length);
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
  const col = Math.floor(
    playfield[0].length / 2 - Math.ceil(matrix[0].length / 2)
  );
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
};

const fillNextTetrominos = () => {
  while (NEXT_FIVE_TETROMINOS.length < 5) {
    NEXT_FIVE_TETROMINOS.push(rngTetrominos());
  }
};

const tetrominoOnHand = () => {
  ON_HAND = NEXT_FIVE_TETROMINOS.shift();
  if (!ON_HAND) {
    console.error("ON_HAND is not defined or is null");
    return;
  }
  fillNextTetrominos();
};

const rotate = (matrix) => {
  const N = matrix.length - 1;
  const result = matrix.map((row, i) => row.map((val, j) => matrix[N - j][i]));

  return result;
};

const isValidMove = (matrix, cellRow, cellCol) => {
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (
        matrix[row][col] &&
        (cellCol + col < 0 ||
          cellCol + col >= playfield[0].length ||
          cellRow + row >= playfield.length ||
          playfield[cellRow + row][cellCol + col])
      ) {
        return false;
      }
    }
  }
  return true;
};

let rAF = null;

const drawTetromino = (tetromino) => {
  tetromino.matrix.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value) {
        const fieldIndex = (tetromino.row + y) * COLS + (tetromino.col + x);
        const field = tetrisFromDoc.children[fieldIndex];
        field.style.backgroundColor = colors[tetromino.name];
      }
    });
  });
};

const updateGame = () => {
  if (++frame > 35) {
    ON_HAND.row++;
    if (!isValidMove(ON_HAND.matrix, ON_HAND.row, ON_HAND.col)) {
      ON_HAND.row--;
      placeTetromino();
      tetrominoOnHand();
      frame = 0;
    }
    frame = 0;
  }
};

const render = () => {
  renderPlayField();
  drawTetromino(ON_HAND);
  updateGame();
  rAF = requestAnimationFrame(render);
};

const placeTetromino = () => {
  for (let row = 0; row < ON_HAND.matrix.length; row++) {
    for (let col = 0; col < ON_HAND.matrix[row].length; col++) {
      if (ON_HAND.matrix[row][col]) {
        const targetRow = ON_HAND.row + row;
        const targetCol = ON_HAND.col + col;

        if (
          targetRow < 0 ||
          targetRow >= playfield.length ||
          targetCol < 0 ||
          targetCol >= playfield[0].length
        )
          playfield[targetRow][targetCol];
        playfield[targetRow][targetCol] = ON_HAND.name;
      }
    }
  }

  for (let row = playfield.length - 1; row >= 0; row--) {
    for (let i = 0; i < ON_HAND.matrix.length; i++) {
      if (playfield[row].every((cell) => cell)) {
        playfield.splice(row, 1);

        playfield.unshift(Array(COLS).fill(0));

        SCORE += 100;
      }
    }
  }

  allowedSwitchLeft++;
};

const eventHandler = () => {
  playButtonFromDoc.addEventListener("click", () => {
    isGameActive = true;
  });
  document.addEventListener("keydown", (event) => {
    if (event.keyCode === 67 && allowedSwitchLeft > 0) {
      if (HOLD === null) {
        HOLD = ON_HAND;
        HOLD.row = 0;
        HOLD.col = 0;
        frame = 0;
        allowedSwitchLeft--;
        tetrominoOnHand();
      } else {
        allowedSwitchLeft--;
        [HOLD, ON_HAND] = [ON_HAND, HOLD];
        ON_HAND.row = 0;
        ON_HAND.col = 3;
        frame = 0;
        HOLD.row = 0;
        HOLD.col = 3;
      }
    } else {
      if (event.keyCode === 37 || event.keyCode === 39) {
        const col = event.keyCode === 37 ? ON_HAND.col - 1 : ON_HAND.col + 1;

        if (isValidMove(ON_HAND.matrix, ON_HAND.row, col)) {
          ON_HAND.col = col;
        }
      } else {
        if (event.keyCode === 38) {
          const matrix = rotate(ON_HAND.matrix);
          if (isValidMove(matrix, ON_HAND.row, ON_HAND.col)) {
            ON_HAND.matrix = matrix;
          }
        } else {
          if (event.keyCode === 40) {
            frame += 35;
          } else {
            if (event.keyCode === 32) {
              while (
                isValidMove(ON_HAND.matrix, ON_HAND.row + 1, ON_HAND.col)
              ) {
                ON_HAND.row++;
              }
              placeTetromino();
              tetrominoOnHand();
              frame = 0;
            }
          }
        }
      }
    }
  });
};

nextFiveTetrominos();
tetrominoOnHand();
eventHandler();
render();
