const board = document.querySelector(".board");
const body = document.getElementsByTagName("body");
const timer = document.getElementById("timer");
const scores = document.getElementById("score");
const restartButton = document.getElementById("restartButton");

const maxWidth = 500;
let rowCount = 2;
let columnCount = 2;
let margin = 100;
let score = 0;
let time = 100;
let isGameActive = true;

const countDown = setInterval(() => {
  timer.innerHTML = "Time: " + time;
  if (time > 0) {
    console.log(time);
    time -= 1;
  } else {
    clearInterval(countDown);
    isGameActive = false;
  }
}, 1000);
const scoresShow = setInterval(() => {
  scores.innerHTML = "Score: " + score;
}, 0);

const draw = () => {
  if (isGameActive == true) {
    board.innerHTML = "";
    const oddIndex = Math.floor(Math.random() * rowCount * columnCount);

    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    for (let i = 0; i < rowCount * columnCount; i++) {
      const tileEl = document.createElement("div");

      tileEl.className = "tile";
      tileEl.style.width = `${maxWidth / columnCount}px`;
      tileEl.style.height = `${maxWidth / rowCount}px`;

      if (i === oddIndex) {
        tileEl.addEventListener("click", handleCorrectClick);

        tileEl.style.backgroundColor = `rgb(${red - margin}, ${
          green - margin
        }, ${blue - margin})`;
        tileEl.className = "tile odd";
      } else {
        tileEl.addEventListener("click", handleWrongClick);
        tileEl.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
      }

      board.appendChild(tileEl);
    }
    console.log(score);
  }
};

const handleCorrectClick = () => {
  if (isGameActive == true) {
    score++;
    if (score % 3 == 0) {
      columnCount++;
      rowCount++;

      if (margin != 20) {
        margin -= 10;
      }
    }
    draw();
  }
};

const handleWrongClick = () => {
  if (isGameActive == true) {
    if (time >= 5) {
      time -= 5;
    } else {
      time -= time;
    }
    console.log(time);
  }
};
draw();
