let isGameActive = false;
let SCORE = 0;
let TIME = 0;
let HOLD;
let NEXTSHAPES = [];
let TETROMINO_ONHAND;
let ROW = 22;
let COL = 10;

const playButton = document.getElementById("playButton");
const score = document.getElementById("score");
const tetris = document.getElementById("tetris");
const time = document.getElementById("time");
const hold = document.getElementById("hold");
const shapeOnHand = document.getElementById("shapeOnHand");
const nextShapes = document.getElementById("nextShapes");

playButton.addEventListener("click", () => {
  isGameActive = true;
});

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

const rngTetrominoes = (min, max) => {
  min = Math.ceil(0);
  max = Math.floor(6);

  rng = Math.floor(Math.random() * (max - min + 1)) + min;

  const tetrominoes = ["I", "J", "L", "O", "S", "T", "Z"];
  return tetrominoes[rng];
};

const nextFiveTetrominoes = () => {
  const nextTetrominoes = [];
  for (let i = 0; i < 5; i++) {
    nextTetrominoes.push(rngTetrominoes());
  }
  return nextTetrominoes;
};

const onHand = () => {
  return (TETROMINO_ONHAND = nextFiveTetrominoes()[0]);
};

console.log(nextFiveTetrominoes());

console.log(onHand());
const render = () => {
  Array.from({ length: ROW * COL }).forEach((_, index) => {
    const field = document.createElement("div");
    field.classList.add("field");
    tetris.appendChild(field);
    const rows = Math.floor(index / COL);

    if (rows >= 2) {
      field.setAttribute("id", "playField");
    } else {
      field.setAttribute("id", "spawnField");
    }

    if (index === 14) {
      field.setAttribute("id", "spawnPoint");
    }
  });

  if (isGameActive == true) {
  }
};
render();
