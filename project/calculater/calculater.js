const value1 = document.getElementById("value1");
const value2 = document.getElementById("value2");
const result = document.getElementById("result");

const minusBtn = document.querySelector("#minusBtn");
const plusBtn = document.querySelector("#plusBtn");
const divideBtn = document.querySelector("#divideBtn");
const multiplyBtn = document.querySelector("#multiplyBtn");
const clear = document.querySelector("#clear");

minusBtn.addEventListener("click", () => {
  result.value = Number(value1.value) - Number(value2.value);
});

plusBtn.addEventListener("click", () => {
  result.value = Number(value1.value) + Number(value2.value);
});
divideBtn.addEventListener("click", () => {
  result.value = Number(value1.value) / Number(value2.value);
});
multiplyBtn.addEventListener("click", () => {
  result.value = Number(value1.value) * Number(value2.value);
});
clear.addEventListener("click", () => {
  value1.value = null;
  value2.value = null;
  result.value = null;
});
