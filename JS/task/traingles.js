let result = "";
for (let i = 0; i <= 6; i++) {
  for (let j = 0; j <= i; j++) {
    result += "* ";
  }
  result += "\n";
}
console.log(result);
let resultRev = "";
for (let i = 6; i >= 0; i--) {
  for (let j = i; j >= 0; j--) {
    resultRev += "* ";
  }
  resultRev += "\n";
}
console.log(resultRev);

// let result1 = "";
// for (let i = 7; i >= 0; i--) {
//   for (let j = 0; j <= i; j++) {
//     if (i < 7 - j) {
//       result1 += "* ";
//     } else {
//       result += "  ";
//     }
//   }
//   result1 += "\n";
// }
// console.log(result1);
let pattern = "";

for (let i = 6; i >= 0; i--) {
  for (let j = 0; j < 6 - i; j++) {
    pattern += "  ";
  }

  for (let k = 0; k <= i; k++) {
    pattern += "* ";
  }
  pattern += "\n";
}
console.log(pattern);
let pattern1 = "";
for (let i = 0; i <= 6; i++) {
  for (let j = 0; j < 6 - i; j++) {
    pattern1 += "  ";
  }

  for (let k = 0; k <= i; k++) {
    pattern1 += "* ";
  }
  pattern1 += "\n";
}
console.log(pattern1);

let pyramid = "";
for (let i = 1; i <= 6; i++) {
  for (let j = 0; j <= 6 - i; j++) {
    pyramid += "  ";
  }
  for (let k = 0; k < 2 * i - 1; k++) {
    pyramid += "* ";
  }
  pyramid += "\n";
}
console.log(pyramid);
