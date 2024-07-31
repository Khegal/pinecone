// 1. 10 хүртэлх натурал тоог хэвлэх программ бич
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
// 2. 10 хүртэлх натурал тооны сондгой тоонуудыг хэвлэх программ бич
for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
// 3. 10 хүртэлх натурал тооны тэгш тоонуудыг хэвлэх программ бич
for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
// 4. 100 хүртэлх натурал тооны нийлбэрийг олох программ бич
sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum);
// 5. N хүртэлх натурал тооны хэвлэх болон тэдгээр тооны нийлбэрийг олох программ бич
N = 10;
sum1 = 0;
for (let i = 1; i <= N; i++) {
  sum1 += i;
}
console.log(sum1);
// 6. Өгөгдсөн тоог анхны мөн эсэхийг олох программ бич
num = 2;
let isPrime;
if (num == 1) {
  console.log("1 is either not prime or not prime");
} else {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      isPrime = false;
    }
  }
  if (isPrime == false) {
    console.log("number is not prime");
  } else {
    console.log("number is prime");
  }
}
// 7. Өгөгдсөн интервал дахь анхны тоог хэвлэх программ бич
let a = 1;
let b = 10;
if ((a = 1)) {
  a = 2;
  for (let i = a; i <= b; i++) {}
}
// 8. N тооны факториал олох программ бич
let num4 = 5;
num5 = 1;
for (let i = 1; i <= num4; i++) {
  num5 *= i;
}
console.log(num5);
// 9. Өгөгдсөн тооны цифрүүдийн нийлбэрийг олох программ бич
let num10 = 3023;
let sum2 = 0;
for (let i = 1; i <= num10.toString().length; i++) {
  let a = i - 1;
  let b = i;
  sum2 += Number(num10.toString().slice(a, b));
}
console.log(sum2);
// 10. N хүртэлх тооны сондгой тоо хэвлэх болон түүний нийлбэрийг олох программ бич
let n2 = 12;
sum3 = 0;
for (let i = 1; i <= n2; i++) {
  if (i % 2 == 1) {
    console.log(i);
    sum3 += i;
  }
}
console.log(sum3);
// 11. N хүртэлх тооны тэгш тоо хэвлэх болон түүний нийлбэрийг олох программ бич

let n3 = 12;
sum4 = 0;
for (let i = 1; i <= n3; i++) {
  if (i % 2 == 0) {
    console.log(i);
    sum4 += i;
  }
}
console.log(sum4);
// 12. Өгөгдсөн тооны урвууг хэвлэх программ бич // 123 <=> 321
let num20 = 123124;
let num20rev = Number(num20.toString().split("").reverse().join(""));
console.log(num20rev);
// 13. Өгөдсөн тооны цифрүүдийг үгээр хэвлэх программ бич
let num13 = 9837;
let num13InWord = "";
for (let i = 1; i <= num13.toString().length; i++) {
  let a = i - 1;
  let b = i;
  if (Number(num13.toString().slice(a, b)) == 0) {
    num13InWord += "zero ";
  } else if (Number(num13.toString().slice(a, b)) == 1) {
    num13InWord += "one ";
  } else if (Number(num13.toString().slice(a, b)) == 2) {
    num13InWord += "two ";
  } else if (Number(num13.toString().slice(a, b)) == 3) {
    num13InWord += "three ";
  } else if (Number(num13.toString().slice(a, b)) == 4) {
    num13InWord += "four ";
  } else if (Number(num13.toString().slice(a, b)) == 5) {
    num13InWord += "five  ";
  } else if (Number(num13.toString().slice(a, b)) == 6) {
    num13InWord += "six ";
  } else if (Number(num13.toString().slice(a, b)) == 7) {
    num13InWord += "seven ";
  } else if (Number(num13.toString().slice(a, b)) == 8) {
    num13InWord += "eight ";
  } else if (Number(num13.toString().slice(a, b)) == 9) {
    num13InWord += "nine ";
  }
}
console.log(num13InWord);
// 14. prompt ашиглан n -д утга орууlахад palindrome тоо мөн эсэхийг шалгах.
// Example1 : input: 111, output: true
// Example2 : input: 110, output: false
// Example3 : input: 101, output: true
// https://en.wikipedia.org/wiki/Palindromic_number
let num21 = 2121;
let num21rev = Number(num21.toString().split("").reverse().join(""));
if (num21 == num21rev) {
  console.log("is palindromic number");
} else {
  console.log("is not palindromic number");
}
// 15 1-100 ийн хооронд random оор 1 утга авдаг randomNumber гэсэн variable зарлана уу.
// 15.1 Prompt ашиглан 1 утга аваад тэр тоог таах хүртэл зогсолтгүй ажиллах loop бичээргэй.
// 15.2 Хэрвээ prompt - оос авсан утга нь randomNumber оос их бол "таны оруулсан тоо их байна" г.м чиглүүлэх маягаар хэвлэдэг байх.
rngNumber = Math.floor(Math.random() * 100);
console.log(rngNumber);

let guessedNumber = prompt("guess the number:");

// if (guessedNumber == rngNumber) {
//   console.log("congrats");
// } else {
//   while (guessedNumber != rngNumber) {
//     if (rngNumber > guessedNumber) {
//       guessedNumber = prompt(" ur number is lower try again:");
//     } else {
//       guessedNumber = prompt(" ur number is higher try again:");
//     }
//   }
// }

// 16. Давхар давталт 1
// Бүхэл тоо өгөгдөнө. Жишээн дээрхтэй төстэй тоон хэлбэрийг үүсгэ.
// Input: 5
// Output:
// - 1
//  - 1 2
//  - 1 2 3
//  - 1 2 3 4
//  - 1 2 3 4 5
let input = 5;
let output = "";
for (let i = 1; i <= input; i++) {
  for (j = 1; j <= i; j++) {
    output += j + " ";
  }
  output += "\n";
}
console.log(output);
// 17. Давхар давталт 2
// Бүхэл тоо өгөгдөнө. Жишээн дээрхтэй төстэй тоон хэлбэрийг үүсгэ.
// Input: 5
// Output:
// - 5 4 3 2 1
// - 5 4 3 2
// - 5 4 3
// - 5 4
// - 5
let input1 = 5;
let output1 = "";
for (let i = input1; i >= 1; i--) {
  for (j = i; j >= 1; j--) {
    output1 += j + " ";
  }
  output1 += "\n";
}
console.log(output1);
// 18. Multiplication Tables
// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result
// (e.g. "2 * 9 = 18").
// Bonus: Use a nested for loop to show the tables for every multiplier from
// 1 to 10 (100 results total).
let result = "";
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    result += i * j + " ";
  }
}
console.log(result);
// 19. Using a for loop print all even numbers up to and including n. Don’t include 0.

// let n1 = 22;
// Example output:
// 2 4 6 8 10 12 14 16 18 20 22 OR each item on a new line
let n19 = 22;
let n19Output = "";
for (let i = 1; i <= n19; i++) {
  if (i % 2 == 0) {
    n19Output += i + " ";
  }
}
console.log(n19Output);
// 20. Given a string change the every second letter to an uppercase ‘Z’. Assume
// there are no space.

// let str1 = "javascript";
// Example output:
// jZvZsZrZpZ OR each letter on a new line
// HINT: You can use  if((i+1) % 2 == 0) to check for even indexes
let str1 = "javascript";
let str1Output = "";
for (let i = 1; i <= str1.toString().length; i++) {
  a = i - 1;
  b = i;
  if ((i + 1) % 2 == 1) {
    str1Output += "Z";
  } else {
    str1Output += str1.slice(a, b);
  }
}
console.log(str1Output);
