// 1. Өгөгдсөн 2 тооны ихийг олох функц бич.
function higher(a, b) {
  if (a > b) {
    return "a is higher";
  } else {
    return "b is higher";
  }
}

console.log(higher(12, 20));
// 2. Өгөгдсөн array -аас өгөгдсөн тоо байгаа эсэхийг олох функц бич. Тухайн тоо байвал индексийг буцаана. Байхгүй бол -1 буцаана.
function checkIsNumber(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "number") {
      return arr[i];
    } else {
      return -1;
    }
  }
}
console.log(checkIsNumber(["askdj", "sad", "asd", "asda"]));
// 3. Өгөгдсөн тэмдэгт мөрөөс -аас өгөгдсөн тэмдэгт байгаа эсэхийг олох функц бич. Тухайн тэмдэгт байвал индексийг буцаана. Байхгүй бол -1 буцаана.
arr1 = "асiaosdu";
function checkThing(arr1) {
  if (arr1.includes("аас")) {
    return "аас";
  } else {
    return -1;
  }
}
console.log(checkThing(arr1));
// 4. Өгөгдсөн 2 тоон интервал дахь санамсаргүй тоо буцаах функц бич.
function rngNumber(c, d) {
  let a = Math.floor(Math.random() * d);

  while (a < c) {
    a = Math.floor(Math.random() * d);
    if (a > c) {
      break;
    }
  }
  return a;
}
console.log(rngNumber(12, 20));
// 5. Өгөгдсөн array - ийн дундажыг олох функц бич.
function findMean(arr2) {
  let mean = 0;
  for (i = 0; i < arr2.length; i++) {
    mean += arr2[i];
  }
  return mean / arr2.length;
}
console.log(findMean([123, 56, 4]));
// 6. Өгөгдсөн array - ийн нийлбэрийг олох функц бич.

function findSum(arr3) {
  let sum = 0;
  for (i = 0; i < arr3.length; i++) {
    sum += arr3[i];
  }
  return sum;
}
console.log(findSum([123, 56, 4]));
// 7. Өгөгдсөн тоо анхны эсэхийг олох функц бич.
function checkIsPrime(num) {
  let isPrime;
  if (num == 1) {
    return "1 is either not prime or not prime";
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        isPrime = false;
      }
    }
    if (isPrime == false) {
      return "number is not prime";
    } else {
      return "number is prime";
    }
  }
}
console.log(checkIsPrime([2]));
// 8. Өгөгдсөн тэмдэгт мөрийн бүх үсгийг том үсэг болгох функц бич.
function turnIntoUppercase(arr4) {
  let uppers = "";
  for (let i = 0; i < arr4.length; i++) {
    uppers += arr4[i].toUpperCase() + " ";
  }
  return uppers;
}
console.log(turnIntoUppercase(["asdwqd", "asdw", "asdw"]));
// 9. Өгөгдсөн тэмдэгт мөрийн бүх үсгийг жижиг үсэг болгох функц бич.

function turnIntoLowerCase(arr5) {
  let lowers = "";
  for (let i = 0; i < arr5.length; i++) {
    lowers += arr5[i].toLowerCase() + " ";
  }
  return lowers;
}
console.log(turnIntoLowerCase(["ASDSFS", "sgtESDF", "aisijIUAHsdjnkHJ"]));
// 10. arr = [4, 32, 2, 5, 8, -10, 20, 1, 0, -20]
// arraySorter гэдэг function - руу өгж явуулахад уг function нь array ийг багаас их рүү эрэмбэлээд буцаадаг.
arr6 = [4, 32, 2, 5, 8, -10, 20, 1, 0, -20];
function sortHighToLow(arr6) {
  return arr6.sort(function (a, b) {
    return a - b;
  });
}
console.log(sortHighToLow(arr6));
