// Exercise 1
// Write a JavaScript function to sort three numbers in array. Return sorted array.
// Sample numbers : [0, -1, 4]
// Output : [4, 0, -1]
// notes:
//     https://www.geeksforgeeks.org/javascript-array-sort/
//     https://www.w3schools.com/jsref/met_win_alert.asp

// 1. write function ==> function will take array as input
// 2. sort the numbers inside the array and return sorted array

function sortedArray(array) {
  return array.sort(function (a, b) {
    return b - a;
  });
}

console.log(sortedArray([5, 7, 10, -10, 56]));
// ==> [56, 10, 7,5,-10]

// Exercise 2

// Write a JavaScript function to find the largest of five numbers of array.
// Sample numbers : -5, -2, -6, 0, -1
// Output : 0
function sortNumber(arr) {
  let highestNumber = arr[0];
  arr.forEach((element) => {
    if (highestNumber < element) {
      highestNumber = element;
    }
  });
  return highestNumber;
}
console.log(sortNumber([-5, -2, -6, 0, 71, -1]));

// Exercise 3

// Function that will return your string in Alphabetical order

// Example:
// > console.log(AlphabeticalOrder('hello'));
// > "ehllo"
function alphabeticalOrder(arr) {
  let splited = [];
  for (let i = 0; i < arr.length; i++) {
    splited.push(arr[i]);
  }

  return splited.sort();
}
console.log(alphabeticalOrder("hello"));
// Exercise 4

// Create a function that will display the smallest value in the array.

// Example:
// > console.log(findSmallest([30, 45, 60, 7]));
// > 1
function findSmallest(arr) {
  let lowestNumber = arr[0];
  arr.forEach((element) => {
    if (lowestNumber > element) {
      lowestNumber = element;
    }
  });
  return lowestNumber;
}
console.log(findSmallest([30, 45, 60, 7]));
// Exercise 5
// Remove all Odd number(s) in an array and return a new array that contains Even numbers only

// Example:
// > console.log(evenOnly([1, 2, 3, 4, 5, 6]));
// > [ 2, 4, 6 ]
function evenOnly(arr) {
  let evens = [];
  arr.forEach((element) => {
    if (element % 2 == 0) {
      evens.push(element);
    }
  });
  return evens;
}
console.log(evenOnly([1, 2, 3, 4, 5, 6]));
// Exercise 6

// Create a function that will accept an array, check the data type of each element. The function will delete string elements and will return a the new array

// Example:
// > console.log(numbersOnly(['text', 3, 7, 'github', 13, 'dev']));
// > [ 3, 7, 13 ]
function numbersOnly(arr) {
  let numbersOnly = [];
  arr.forEach((element) => {
    if (typeof element == "number") {
      numbersOnly.push(element);
    }
  });
  return numbersOnly;
}
console.log(numbersOnly(["text", 3, 7, "github", 13, "dev"]));
// Exercise 7

// Create a function that will accept an array and do the following:
// Get the lowest element
// Get the highest element
// Get the length of array
// Get the Average of all element;
// Store these criteria in a new array

// Example:
// > console.log(minMaxLengthAverage([7, 13, 3, 77, 100]));
// > [ 3, 100, 5, 40 ]
function minMaxLengthAverage(arr) {
  let elements = [];

  let lowestElement = arr[0];
  arr.forEach((element) => {
    if (lowestElement > element) {
      lowestElement = element;
    }
  });
  elements.push(lowestElement);
  let highestElement = arr[0];
  arr.forEach((element) => {
    if (highestElement < element) {
      highestElement = element;
    }
  });
  elements.push(highestElement);

  elements.push(arr.length);

  let sum = 0;
  arr.forEach((element) => {
    sum += element;
  });
  elements.push(sum / arr.length);

  return elements;
}
console.log(minMaxLengthAverage([7, 13, 3, 77, 100]));
// Exercise 8

// Count the number of Words
// Return how many words was given

// Example:
// > countWords('hello from kbpsystem!');
// > 3
function countWords(arr) {
  return arr.split(" ").length;
}
console.log(countWords("hello from kbpsystem!"));
// Exercise 9

// Multiply by Length
// Multiply all elements in an array by it's length

// Example:
// > MultiplyByLength([4,1,1]);
// > [12, 3, 3]
function multiplyByLength(arr) {
  let length = arr.length;
  let result = [];
  arr.forEach((element) => {
    result.push(element * length);
  });
  return result;
}
console.log(multiplyByLength([4, 1, 1]));
// Exercise 10

// Find the correct Index location
// Return the index location of an element from a given array. First argument is the array you'd like to search and the second one is the element (either string/number) to look for.

// Example:
// > console.log(findIndex(['github', 'gitlab', 'bitbucket', 'apollo'], 'gitlab'));
// > 1

function findIndex(arr, str) {
  let result = arr.findIndex((element) => element === str);
  return result;
}

console.log(findIndex(["github", "gitlab", "bitbucket", "apollo"], "gitlab"));
