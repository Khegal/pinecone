// Exercise 1

// Write a function "tipAmount" that is given the bill amount and the level of
// service (one of good, fair and poor) and returns the dollar amount for the tip.

// Based on:
// good --> 20%
// fair --> 15%
// poor --> 10%

// Examples:
// tipAmount(100, 'good') --> 20
// tipAmount(40, 'fair') --> 6
function tipAmount(a, b) {
  if (b == "good") {
    return a * 0.2;
  } else if (b == "fair") {
    return a * 0.15;
  } else if (b == "poor") {
    return a * 0.1;
  }
}
console.log(tipAmount(100, "poor"));
// Exercise 2

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "totalAmount" that takes the same arguments as "tipAmount"
// except it returns the total as the tip amount plus the bill amount.
// Hint: this function may use "tipAmount" internally
function totalAmount(a, b) {
  let totalAmount = a;
  if (b == "good") {
    return totalAmount + a * 0.2;
  } else if (b == "fair") {
    return totalAmount + a * 0.15;
  } else if (b == "poor") {
    return totalAmount + a * 0.1;
  }
}
console.log(totalAmount(100, "fair"));
// Examples:
// totalAmount(100, 'good') --> 120
// totalAmount(40, 'fair') --> 46

// Exercise 3

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "splitAmount" that takes a bill amount, the level of service,
// and the number of people to split the bill between. It should return the final
// amount for each person.
function splitAmount(a, b, c) {
  let totalAmount = a;
  if (b == "good") {
    return (totalAmount + a * 0.2) / c;
  } else if (b == "fair") {
    return (totalAmount + a * 0.15) / c;
  } else if (b == "poor") {
    return (totalAmount + a * 0.1) / c;
  }
}
console.log(splitAmount(100, "fair", 2));
// Examples:
// splitAmount(100, 'good', 5) --> 24
// splitAmount(40, 'fair', 2) --> 23

// Exercise 4

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "isVowel" that takes a character (i.e. a string of length 1)
// as input and returns true if it is a vowel, false otherwise.
function isVowel(a) {
  if (a.length == 1) {
    if (
      a.toLowerCase() == "a" ||
      a.toLowerCase() == "e" ||
      a.toLowerCase() == "i" ||
      a.toLowerCase() == "o" ||
      a.toLowerCase() == "u" ||
      a.toLowerCase() == "y"
    ) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
console.log(isVowel("a"));
// Useful resource:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
//
// Examples:
// isVowel('c') --> false
// isVowel('e') --> true
// isVowel('A') --> true
// isVowel(99) --> false
// isVowel({e: 'Elephant'}) --> false

// Exercise 5

// Write a function "rockPaperScissors" which takes the throw of player 1 and
// the throw of player 2.
// A throw can have the values of 'rock', 'paper', or 'scissors'.
// It should return the winner: 'player 1', 'player 2', or 'draw'
// Examples:
// rockPaperScissors('rock', 'scissors') --> 'player 1'
// rockPaperScissors('rock', 'paper') --> 'player 2'
// rockPaperScissors('paper', 'paper') --> 'draw'
function rockPaperScissors(a, b) {
  if (a.toLowerCase() == "rock") {
    if (b.toLowerCase() == "rock") {
      return "draw";
    } else if (b.toLowerCase() == "scissors") {
      return "p1 ";
    } else if (b.toLowerCase() == "paper") {
      return "p2 ";
    }
  } else if (a.toLowerCase() == "paper") {
    if (b.toLowerCase() == "rock") {
      return "p1";
    } else if (b.toLowerCase() == "scissors") {
      return "p2";
    } else if (b.toLowerCase() == "paper") {
      return "draw";
    }
  } else if (a.toLowerCase() == "scissors") {
    if (b.toLowerCase() == "rock") {
      return "p2";
    } else if (b.toLowerCase() == "scissors") {
      return "draw";
    } else if (b.toLowerCase() == "paper") {
      return "p1";
    }
  }
}
console.log(rockPaperScissors("scissors", "rock"));
// Exercise 6

// Write a function "numberJoinerWhile" which is given a start number and an end number.
// It should return a string of the numbers joined together by the "_" character.
// Use a "while" loop to do this.
// Examples:
// numberJoinerWhile(1, 10) --> '1_2_3_4_5_6_7_8_9_10'
// numberJoinerWhile(12, 14) --> '12_13_14'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "numberJoinerFor" which does the same thing as "numberJoinerWhile",
// except using a "for" loop internally.

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "numberJoinerFancy" which does the same thing as "numberJoinerWhile",
// except it takes an optional third argument specifying the separator between the numbers.
// Use either a "while" or a "for" loop (your preference).
// Examples:
// numberJoinerFancy(1, 10) --> '1_2_3_4_5_6_7_8_9_10'
// numberJoinerFancy(1, 5, '~') --> 1~2~3~4~5
// numberJoinerFancy(3, 6, '***BANANAS***') --> 1***BANANAS***2***BANANAS***3
function numberJoinerFancy(a, b, c) {
  let result = "";

  for (let i = a; i <= b; i++) {
    if (c == null) {
      if (i == b) {
        result += i;
      } else {
        result += i + "_";
      }
    } else {
      if (i == b) {
        result += i;
      } else {
        result += i + c;
      }
    }
  }

  return result;
}
console.log(numberJoinerFancy(1, 4, "asd"));
// Exercise 7

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "reverse" that computes the reversal of a string.
//
// Example:
// reverse("skoob") --> "books"
function reverse(a) {
  if (typeof a == "number") {
    return Number(a.toString().split("").reverse().join(""));
  } else {
    return a.split("").reverse().join("");
  }
}
console.log(reverse(12312));
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "findLongestWord" that takes a string of words and returns
// the longest word in that string. If there are multiple words with the same
// maximum length return the first longest word.
//
// Example:
// findLongestWord('a book full of dogs') --> 'book'
function findLongestWord(str) {
  let strSplit = str.split(" ");
  let longestWord = "";
  for (let i = 0; i < strSplit.length; i++) {
    if (strSplit[i].length > longestWord.length) {
      longestWord = strSplit[i];
    }
  }
  return longestWord;
}
console.log(findLongestWord("a book full of dogs"));
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "nicer"
// It should clean up the language in its input sentence.
// Forbidden words include heck, darn, dang, and crappy.
//
// Example:
// nicer('mom get the heck in here and bring me a darn sandwich.')
// > 'mom get the in here and bring me a sandwich.'
function nicer(str) {
  let strSplit = str.split(" ");
  let nicerStr = "";
  for (let i = 0; i < strSplit.length; i++) {
    if (
      strSplit[i] == "heck" ||
      strSplit[i] == "darn" ||
      strSplit[i] == "dang" ||
      strSplit[i] == "crappy"
    ) {
      strSplit[i] = "";
    } else {
      nicerStr += strSplit[i] + " ";
    }
  }
  return nicerStr;
}
console.log(nicer("mom get the heck in here and bring me a darn sandwich."));
// Exercise 8

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "capitalizeAll"
// It should take as input a sentence and capitalize the first letter
// of every word in the sentence.
//
// Examples:
// capitalizeAll('hello world') --> 'Hello World'
// capitalizeAll('every day is like sunday') --> 'Every Day Is Like Sunday'
function capitalizeAll(a) {
  let strSplit = a.split(" ");
  let capitalized = "";
  for (let i = 0; i < strSplit.length; i++) {
    let remainingLetters = strSplit[i].slice(1);
    capitalized += strSplit[i][0].toUpperCase() + remainingLetters + " ";
  }
  return capitalized;
}
console.log(capitalizeAll("asd asd"));
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "split" that does the same thing as String.split
// It should take two inputs: (1) a string and (2) a delimiter string
// Do not use the native .split() method for this. Your task is to reverse-engineer
// .split() and write your own.
//
// Examples:
// split('a-b-c', '-') --> ['a', 'b', 'c']
// split('APPLExxBANANAxxCHERRY', 'xx') --> ['APPLE', 'BANANA', 'CHERRY']
// split('xyz', 'r') --> ['xyz']
function split(str, splitBy) {
  let strSplit = str.split(splitBy);
  return strSplit;
}
console.log(split("APPLExxBANANAxxCHERRY", "xx"));
// Exercise 9

// Write a function "max" that takes an array of numbers returns the highest
// number in the array.
function max(arrOfNumber) {
  let highestNumber = 0;
  for (let i = 0; i < arrOfNumber.length; i++) {
    if (highestNumber < arrOfNumber[i]) {
      highestNumber = arrOfNumber[i];
    }
  }
  return highestNumber;
}
console.log(max([1, 1, 22]));
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "sumNumbers" which is given an array of numbers and returns
// the sum of the numbers.
// Example:
// sumNumbers([1, 4, 8]) --> 13
function sumNumbers(arrOfNumber) {
  let sum = 0;
  for (let i = 0; i < arrOfNumber.length; i++) {
    sum += arrOfNumber[i];
  }
  return sum;
}
console.log(sumNumbers([1, 1, 22]));
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "positives" which is given an array of numbers and
// returns a new array containing only the positive numbers within the given array.
// Examples:
// positives([1, -3, 5, -3, 0]) --> [1, 5]
// positives([1, 2, 3]) --> [1, 2, 3]
// positives([-1, -2, -3]) --> []
function positives(arrOfNumber) {
  let positiveNumbers = [];
  for (let i = 0; i < arrOfNumber.length; i++) {
    if (arrOfNumber[i] >= 0) {
      positiveNumbers.push(arrOfNumber[i]);
    }
  }
  return positiveNumbers;
}
console.log(positives([1, 1, -12]));
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "evens" which takes an array of numbers and returns a new
// array containing only the even numbers in the given array.
// Hint: you may want to re-use your "isEven" function from 01-predicate-functions.js
function evens(arrOfNumber) {
  let evenNumbers = [];
  for (let i = 0; i < arrOfNumber.length; i++) {
    if (arrOfNumber[i] % 2 == 0) {
      evenNumbers.push(arrOfNumber[i]);
    }
  }
  return evenNumbers;
}
console.log(evens([1, 12, -12]));
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "odds" which takes an array of numbers and returns a new
// array containing only the odd numbers in the given array.
// Hint: you may want to re-use your "isOdd" function from 01-predicate-functions.js
function odds(arrOfNumber) {
  let oddNumbers = [];
  for (let i = 0; i < arrOfNumber.length; i++) {
    if (arrOfNumber[i] % 2 == 1) {
      oddNumbers.push(arrOfNumber[i]);
    }
  }
  return oddNumbers;
}
console.log(odds([1, 12, -12]));
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "integers" which takes an array of numbers and returns a new
// array containing only the integers in the given array.
// Hint: Do you need a new predicate function for this?

//
// Example:
// integers([3.14, 2.4, 7, 8.1, 2]) --> [7, 2]
function integers(arrOfNumber) {
  let integerNumber = [];
  for (let i = 0; i < arrOfNumber.length; i++) {
    let numberToString = arrOfNumber[i].toString();
    for (let j = 0; j < numberToString.split().length; j++) {
      if (numberToString.split(".").length < 2) {
        integerNumber.push(arrOfNumber[i]);
      }
    }
  }
  return integerNumber;
}
console.log(integers([1, 12, -1.12, 1.1]));
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "squareDance" which takes an array of numbers and returns a
// new array containing the result of squaring each of the numbers in the given array.
//
// Example:
// squareDance([1, 2, 3]) --> [1, 4, 9]
function squareDance(arrOfNumber) {
  squaredNumbers = [];
  for (let i = 0; i < arrOfNumber.length; i++) {
    squaredNumbers.push(arrOfNumber[i] * arrOfNumber[i]);
  }
  return squaredNumbers;
}
console.log(squareDance([1, 12, 2]));
//Exercise

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
function targetFinder(numbers, target) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] <= target) {
      for (let j = 0; j < numbers.length; j++) {
        if (numbers[i] + numbers[j] == target) {
          result.push(i, j);
          for (let k = 0; k < result.length; k++) {}
        }
      }
    }
  }
  return result;
}
console.log(targetFinder([2, 8, 12, 15], 14));
//Exercise

// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
function isPalindrome(number) {
  let numberRev = "";
  for (let i = number.toString().length - 1; i >= 0; i--) {
    numberRev += number.toString()[i];
  }
  if (numberRev == number) {
    return true;
  } else {
    return false;
  }
}
console.log(isPalindrome(1213));
//Exercise

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true

//Exercise

// write a JavaScript function that checks if the string is palindrome or not.

// A string is a palindrome if it is read the same from forward or backward.
//  For example, dad reads the same either from forward or backward. So the word dad is a palindrome.
// Similarly, madam is also a palindrome.

// Input: s = "dad"
// Output: true
// Example 2:

// Input: s = "civic"
// Output: true

// Input: s = "race"
// Output: false
function isPalindromesTR(str) {
  let strRev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    strRev += str[i];
  }
  if (str == strRev) {
    return true;
  } else {
    return false;
  }
}
console.log(isPalindromesTR("dad"));
