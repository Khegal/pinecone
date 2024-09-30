// Create a function that takes two numbers as arguments and returns their sum.
function Somme(a, b) {
  sum = a + b;
  return sum;
}
console.log(Somme(7, 15));
// Write a function that takes the base and height of a triangle as arguments and returns its area.
function TriangleArea(a, b) {
  area = (a * b) / 2;
  return area;
}
console.log(TriangleArea(10, 12));
// Write a function that takes the height and the width of rectangle as arguments and returns its perimeter.
function RectanglePerimetre(a, b) {
  p = (a + b) * 2;
  return p;
}

console.log(RectanglePerimetre(6, 6));
// Write a function that takes a number as argument and returns it square.
function SquareNumber(a) {
  square = a * a;
  return square;
}
console.log(SquareNumber(9));

// Write a function that takes hours as argument  and converts its into seconds.
function HourToSecond(a) {
  second = a * 60 * 60;
  return second;
}
console.log(HourToSecond(24));
// Create a function that  takes a string as argument and returns the length of this string.
function strLength(a) {
  length = a.length;
  return length;
}
console.log(strLength("asdsaa"));
// write a function that takes a string as argument and returns it to number
function strToNum(a) {
  num = Number(a);
  return num;
}
console.log(strToNum("123124"));
// write a function that takes a number as argument and returns it to string
function numToStr(a) {
  str = Number(a);
  return str;
}
console.log(numToStr(123124));
// Exercise 1
// <h3>Write a function which checks given input/parameter:</h3>
// <ul>
//   <li>If input/parameter is divisible by 3 print => Fizz</li>
//   <li>If input/parameter is divisible by 5 print => Buzz</li>
//   <li>If input/parameter is divisible by 3 or 5 print => FizzBuzz</li>
//   <li>If input/parameter is NOT divisible by 3 or 5 print => given Input Number/Value</li>
//   <li>If input/parameter is other than Number/Value print => 'Nan - Not a Number! Please Input Number' </li>
// </ul>
function FizzBuzz(num) {
  if (typeof num !== "number") {
    return "Nan - Not a Number! Please Input Number";
  } else if (num % 5 == 0 && num % 3 == 0) {
    return "FizzBuzz";
  } else if (num % 3 == 0) {
    return "Fizz";
  } else if (num % 5 == 0) {
    return "Buzz";
  } else {
    return "given Input Number/Value";
  }
}
console.log(FizzBuzz(15));
// Exercise 2

// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n.
//  In simple terms, the Factorial of 7 is solved like this:
// 7 _ 6 _ 5 _ 4 _ 3 _ 2 _ 1 = 5,040
function factorializer(a) {
  let output = "";
  let mul = 1;
  for (let i = a; i >= 1; i--) {
    if (i == 1) {
      output += i + " = ";
    } else {
      output += i + " _ ";
    }
    mul *= i;
  }
  output += mul;
  return output;
}
console.log(factorializer(3));
// Example:
// > console.log(factorializer(7));
// > 5040

// Exercise 3
// Identify if a number is Odd or Even?
// A function that lets you know if a number is Even or Odd
function oddOrEven(a) {
  if (a % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
}
console.log(oddOrEven(3));
// Example:
// > console.log(oddOrEven(7));
// > "Odd"

// Exercise 4

// Return the sum of a number going back to it's root. In other words, the function will work like this:
function addUp(a) {
  let sum = 0;
  for (let i = 1; i <= a; i++) {
    sum += i;
  }
  return sum;
}
console.log(addUp(8));
// addUp(5);
// 5 + 4 + 3 + 2 + 1 + 0 = 15
// Example:
// > console.log(addUp(8));
// > 36

// Exercise 5
function isEmpty(a) {
  if (a.trim().length === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isEmpty(" a"));
// Create a function  that takes a string as argument and returns true if a string is empty and false otherwise.
// isEmpty(“ ”)➞ true
// isEmpty(“Chaima”)➞ false

// Exercise 6

// Create a function that takes two strings as arguments and returns true if
// the total number of characters in the first string is equal to the total number of characters in the second string.
// Otherwise return false.
function isEqualStr(a, b) {
  if (a.length === b.length) {
    return true;
  } else {
    return false;
  }
}
console.log(isEqualStr("asdsd", "asd"));
// isEqualStr (“ Simplon”,”tunis ”)➞ false
// isEqualStr (“CA”,”FS”)➞ true

// Exercise 7

// Create a function that takes two numbers, a and b, return true if a can be divided evenly by b , return false otherwise.
// oneDevideByTwo(9,3)➞true
// oneDevideByTwo(10,2)➞true
// oneDevideByTwo(13,2)➞false
function oneDevideByTwo(a, b) {
  if (a % b == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(oneDevideByTwo(10, 3));
// Exercise 8

// Create a function that takes in a mood and return a sentence in the following format:
// "Today, I am feeling {mood}". However, if no argument is passed, return "Today, I am feeling neuter".
// moodToday("happy") ➞ "Today, I am feeling happy"
// moodToday( ) ➞ "Today, I am feeling neuter"
function moodToday(a) {
  if (a.trim().length === 0) {
    return "Today, I am feeling neuter";
  } else {
    return `Today, I am feeling ${a}`;
  }
}
console.log(moodToday("asd"));
// Exercise 9

// Write a function that validates whether two strings are identical. Make it case insensitive.
// match(“HELLO WORLD”) and (”hello world”) → true
// match("mask", "mAskinG") ➞ false
function match(a, b) {
  if (a.toLowerCase() == b.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}
console.log(match("asdsd", "asdasd"));
// Exercise 10

// Create a function that takes a string as argument and returns "upper" if all the letters in a word are uppercase, "lower" if lowercase and "mixed" for any mix of the two.
// getCase("javascript..") ➞ "lower"
// getCase("SHOUT!") ➞ "upper"
function getCase(a) {
  if (a.toLowerCase() === a) {
    return "lower";
  } else if (a.toUpperCase() === a) {
    return "upper";
  } else {
    return "mixed";
  }
}
console.log(getCase("ASasdas DSAD"));
// Exercise 11

// Create a function that takes  a string as argument (of a person’s first and last name) and returns a string with the first and last name swapped.
// swapName("Ada Lovelace") ➞ "Lovelace Ada"
// swapName(“Alan Turing”)➞  “Turing Alan”
function swapName(a) {
  const words = a.split(" ");
  return words[1] + " " + words[0];
}
console.log(swapName("ajkshd sajkdhasj"));
// Exercise 12

// Create a function that takes a string and returns a string with its letters in alphabetical order.
// AlphabetSoup("javascript") ➞ "aacijprstv"
// AlphabetSoup(“simplon”) ➞”ilmnops”
function AlphabetSoup(a) {
  return a.split("").sort().join("");
}
console.log(AlphabetSoup("asd"));
// Exercise 13

// Create a function that takes a number as argument and returns the incrementing (+1) for each odd number and decrementing (-1) for each even number.
// incrementOrDecrement(5) ➞4
// incrementOrDecrement(2) ➞3
function incrementOrDecrement(a) {
  if (a % 2 == 0) {
    return a + 1;
  } else {
    return a - 1;
  }
}
console.log(incrementOrDecrement(23));
