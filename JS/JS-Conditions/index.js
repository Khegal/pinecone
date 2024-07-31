// 1. 4 н хувьсагч зарлан тоон утга өг.Өгөгдсөн 4 тооны 80-аас их тоонуудын нийлбэрийг ол.:
// a=85 b=75 c=96 d=69
// 80-аас их тоонуудын нийлбэрийг: 181

let a = 85;
let b = 75;
let c = 96;
let d = 69;
let sum = 0;
if (a >= 80) {
  sum += a;
}
if (b >= 80) {
  sum += b;
}
if (c >= 80) {
  sum += c;
}
if (d >= 80) {
  sum += d;
}
console.log(sum);
// 2. 4 н хувьсагч зарлан тоон утга өг.Өгөгдсөн 4 тооны 5-аас бага тоонуудын үржвэрийг ол. 5-аас бага тоо ядаж 1 байгаа:
// a=3 b=7 c=2 d=4
// 5-аас бага тоонуудын үржвэр: 24
let a1 = 3;
let b1 = 7;
let c1 = 2;
let d1 = 4;
if (a1 <= 5) {
  a1 = a1;
} else {
  a1 = 1;
}
if (b1 <= 5) {
  a1 = a1 * b1;
}
if (c1 <= 5) {
  a1 = a1 * c1;
}
if (d1 <= 5) {
  a1 = a1 * d1;
}
console.log(a1);
// 3.if … else ашиглан myAge болон yourAge-ийн утгыг харьцуул. Харьцуулалт дээр үндэслэн үр дүнг консол руу хөгшин (би эсвэл та) гэж тэмдэглэнэ үү. Насыг оруулахын тулд prompt("Насаа оруулна уу:")-г ашиглана уу.
const myAge = prompt("my age is:");
const yourAge = prompt("your age is:");
if (myAge < yourAge) {
  console.log("chi hugshin");
} else {
  if (myAge > yourAge) {
    console.log("bi hugshin");
  } else {
    console.log("tsatsuu");
  }
}

// 4. Амралтын өдөр эсвэл ажлын өдөр эсэхийг шалгаарай.
const today = prompt("today is:");
if (today == "sunday" || today == "saturday") {
  console.log("weekend");
} else {
  console.log("work");
}
// 5. Өгөгдсөн жилийг өндөр жил мөн эсэхийг шалгаад хэрвээ мөн бол өндөр жил мөн үгүй бол үгүй гэж хариулна уу.
// Өндөр жил гэдэг нь 4 жилд нэг удаа болдог бөгөөд тэр нь 2-р сар 29 хоногтой үед тохиолддог. Энэ нь 4-д хуваагдаж байвал мөн, 100 хуваагдаж байвал өндөр жил биш. Харин 400 жилд бүтнээрээ хуваагдаж байвал мөн.
const thisYear = prompt("this year  is:");

if (thisYear % 100 == 0) {
  console.log("not leap year");
} else {
  if (thisYear % 4 == 0 || thisYear % 400 == 0) {
    console.log("leap year");
  } else {
    console.log("not leap year");
  }
}
// if (thisYear % 4 == 0) {
//   console.log("leap year");
// } else {
//   console.log("is not leap year");
// }
// 6. Багш сурагчдын эцсийн шалгалтын дүнг дүгнэхээр болжээ
// 6.1 Бат - 67 оноо, Болд - 59 оноо авчээ.
// 6.2 Шалгалтын онооноос хамааран багш тодорхой дүнгийн жагсаалт гаргах ёстой бөгөөд энэ нь
//   a. Хэрвээ оноо 60 хувиас доош байвал (60 орохгүй) - Маш муу
//   b. Хэрвээ оноо 60 - 70 (70 орохгүй) хооронд байвал - Хангалттай
//   c. Хэрвээ оноо 70 - 80 (80 орохгүй) хооронд байвал - Дунд
//   d. Хэрвээ оноо 80 - 90 (90 орохгүй) хооронд байвал - Сайн
//   e. Хэрвээ оноо 90 - 100 хооронд байвал - Маш сайн гэсэн үнэлгээг өгч байгаа юм байна.
// 6.3 Тэгвэл тухайн сурагчдыг тэнцсэн болоод тэнцээгүй эсэхийг жагсааж доорх хэлбэрээр
// НЭР - АВСАН ОНОО - ҮНЭЛГЭЭ гэсэн маягаар console дээр харуулна уу.\
const name = "Bat";
const score = 96;
if (score < 60) {
  console.log(name, "-", score, "-", "Маш муу");
} else {
  if (score < 70) {
    console.log(name, "-", score, "-", "Хангалттай");
  } else {
    if (score < 80) {
      console.log(name, "-", score, "-", "Дунд");
    } else {
      if (score < 90) {
        console.log(name, "-", score, "-", "Сайн");
      } else {
        if (score <= 100) {
          console.log(name, "-", score, "-", "Маш сайн");
        }
      }
    }
  }
}
// 7. Хоёр багийн дундаж оноог олно уу. ( A team - 96, 108, 89; B team - 88, 91, 110 )
// 7.1 Багийн дундаж нөгөө багийхаас их бол тэр баг түрүүлсэн гэж хэвлэнэ үү. Багуудын оноо тэнцсэн тохиолдолд багууд тэнцсэн гэж хэвлэнэ үү.
// Энэ дүрэм нь зөвхөн багийн дундаж 100 аас багагүй тохиолдолд энэхүү дүрэм хэрэгжэхийг анхаарна уу. Хэрвээ 2 баг 2 уулаа 100 аас бага тохиолдолд ялагч байхгүй. Тус бүрийн нөхцөлийг оноог өөрчилж туршиж үзээрэй.
const aTeamScore1 = 110;
const aTeamScore2 = 108;
const aTeamScore3 = 90;
const bTeamScore1 = 108;
const bTeamScore2 = 91;
const bTeamScore3 = 110;
if (
  ((aTeamScore1 + aTeamScore2 + aTeamScore3) / 3 +
    (bTeamScore1 + bTeamScore2 + bTeamScore3) / 3) /
    2 <
  100
) {
  if (
    (aTeamScore1 + aTeamScore2 + aTeamScore3) / 3 <
    (bTeamScore1 + bTeamScore2 + bTeamScore3) / 3
  ) {
    console.log("B is winner");
  } else {
    console.log("a is winner");
  }
} else {
  console.log("no winner ");
}
// 8.Write conditional expressions to satisfy the following safety rules:
// a) If crewStatus is true, print "Crew Ready" else print "Crew Not Ready".
const crewStatus = true;
if (crewStatus == true) {
  console.log("Crew Ready");
} else {
  console.log("Crew Not Ready");
}
// b) If computerStatusCode is 200, print "Please stand by. Computer is rebooting." Else if computerStatusCode is 400, print "Success! Computer online." Else print "ALERT: Computer offline!"
const computerStatusCode = 200;
if (computerStatusCode == 200) {
  console.log("Please stand by. Computer is rebooting.");
} else {
  if (computerStatusCode == 400) {
    console.log("Success! Computer online.");
  } else {
    console.log("ALERT: Computer offline!");
  }
}
// c) If shuttleSpeed is > 17,500, print "ALERT: Escape velocity reached!" Else if shuttleSpeed is < 8000, print "ALERT: Cannot maintain orbit!" Else print "Stable speed".
const shuttleSpeed = 9358;
if (shuttleSpeed > 17500) {
  console.log("ALERT: Escape velocity reached!");
} else {
  if (shuttleSpeed < 8000) {
    console.log("ALERT: Cannot maintain orbit!");
  } else {
    console.log("Stable speed");
  }
}
// 9.Write a JavaScript conditional statement to find the sign of product of three numbers.
// Display an console.log box with the specified sign.
let num1 = 3;
let num2 = -6;
let num3 = 2;
if (num1 + num2 + num3 >= 0) {
  console.log("the sign is +");
} else {
  console.log("the sign is -");
}
// Sample numbers : 3, -7, 2
// Output : The sign is -
