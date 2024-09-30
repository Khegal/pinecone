const answer = "SKIBIDI TOILET";

const hits = [];
let fails = 0;

const failEl = document.querySelector("#fails");
const wordEl = document.querySelector("#word");
const lettersEl = document.querySelector("#letters");
const hangmanEl = document.querySelector("#hangman");

const printAnswer = () => {
  let displayText = answer;

  for (let char = 0; char < answer.length; char++) {
    if (answer[char] !== " ") {
      if (!hits.includes(answer[char].toLowerCase())) {
        displayText = displayText.replaceAll(answer[char], "_");
      }
    }
  }

  wordEl.innerText = displayText;
};

const keyboard = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["z", "x", "c", "v", "b", "n", "m"],
];

const updateFails = () => {
  failEl.innerText = `Fails: ${fails}`;
};

const printKeyboard = () => {
  lettersEl.innerHTML = "";
  for (let row = 0; row < keyboard.length; row++) {
    const rowEl = document.createElement("div");
    rowEl.className = "keyboard-row";
    for (let col = 0; col < keyboard[row].length; col++) {
      const letterBtn = document.createElement("button");
      letterBtn.innerText = keyboard[row][col];

      if (hits.includes(keyboard[row][col])) {
        letterBtn.disabled = true;
      } else {
        letterBtn.addEventListener("click", () => {
          if (!answer.toLowerCase().includes(keyboard[row][col])) {
            fails++;
            loadIfWrong();
            updateFails();
          }
          hits.push(keyboard[row][col]);
          printAnswer();
          printKeyboard();
        });
      }

      rowEl.appendChild(letterBtn);
    }
    lettersEl.appendChild(rowEl);
  }
};

const loadIfWrong = () => {
  if (fails > 0 && fails <= 6) {
    const failEl = document.createElement("img");
    failEl.setAttribute("src", `./imgs/${fails + 3}.jpg`);
    hangmanEl.appendChild(failEl);
  }
};

printAnswer();
printKeyboard();
updateFails();
