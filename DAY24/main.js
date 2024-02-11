//! ----TASK 1----//
// function sayActive (name) {
//     console.log(name + " is active now");
// }
// sayActive("Huseyn")
// sayActive("Ramin")
// sayActive("Ayxan")

//! ----TASK 2----//
// function compareNum(a, b, c) {
//     if (a > b && a > c) {
//         return a
//     } else if (b > a && b > c) {
//         return b
//     } else if (c > a && c > b) {
//         return c
//     }
// }
// console.log(compareNum());

//! ----TASK 3----//
// function showBalance(rubl, usd) {
//     let result = rubl + (usd *75);
//     console.log(result);
// }
// showBalance(1000, 5)

//! ----TASK 4----//
// function teklik(num) {
//     switch (num) {
//         case "1":
//             return "bir";
//         case "2":
//             return "iki";
//         case "3":
//             return "uc";
//         case "4":
//             return "dord";
//         case "5":
//             return "bes";
//         case "6":
//             return "alti";
//         case "7":
//             return "yeddi";
//         case "8":
//             return "sekkiz";
//         case "9":
//             return "doqquz";
//         default:
//             break;
//     }
// }

// function onluq(num) {
//     switch (num) {
//         case "1":
//             return "on";
//         case "2":
//             return "iyirmi";
//         case "3":
//             return "otuz";
//         case "4":
//             return "qirx";
//         case "5":
//             return "elli";
//         case "6":
//             return "altimis";
//         case "7":
//             return "yetmis";
//         case "8":
//             return "seksen";
//         case "9":
//             return "doxsan";
//         default:
//             break;
//     }
// }


// function numberToText(param) {
//     if (param.lenght === 1) {
//         console.log(teklik(param));
//     }
//     else if (param.lenght === 2 && param[1] === "0") {
//         console.log(onluq(param[0]));
//     }
//     else if (param.lenght === 2 && param[1] !== "0") {
//         console.log(onluq(param[0]), teklik(param[1]));
//     }

// }
// numberToText ("5")

//! ----TASK 5----//
// function min(a, b) {
//     if (a > b) {
//         return b
//     } else {
//         return a
//     }
// }

// console.log(min(1, 2));

//! ----TASK 6----//
// function calc(a, b, c) {
//     let result;
//     switch (c) {
//         case "+":
//             result = a + b
//             break;
//         case "-":
//             result = a - b
//             break;
//         case "*":
//             result = a * b
//             break;
//         case "/":
//             result = a / b
//             break;

//         default:
//             break;
//     }
//     console.log(result);
// }

// calc(1, 2, "+")

//! ----TASK 7----//
// function isLucky(params) {
//     let strVal = String(params)
//     let firstPart = +strVal[0] + +strVal[1] + +strVal[2];
//     let secondPart = +strVal[3] + +strVal[4] + +strVal[5];
//     if (firstPart === secondPart) {
//         return true
//     }
//     else {
//         return false
//     }
// }
// console.log(isLucky(234201));

//! ----TASK 8----//
// function capitalizeWord(sentence) {
//     let words = sentence.split(" ");
//     for (let i = 0; i < words.length; i++) {
//       words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//     }
//     return words.join(" ");
//   }
  
//   let originalSentence = "javascriptdə capitalizeword funksiyası necə yaradılır?";
//   let capitalizedSentence = capitalizeWord(originalSentence);
//   console.log(capitalizedSentence);

//! ----TASK 9----//
// function isEven(num) {
//     if (num % 2=== 0) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(isEven(3));

//! ----TASK 10----//
function isValidNumber(phoneNumber) {
    // Telefon nömrəsi +7 ilə başlayıb 11 rəqəmdən ibarət olmalıdır
    return /^(\+7)\d{10}$/.test(phoneNumber);
}

// Funksiyani test etmek üçün
console.log(isValidNumber("+71234567890")); // true
console.log(isValidNumber("+71234567"));    // false (11 rəqəm yoxdur)
console.log(isValidNumber("71234567890"));  // false (+7 ilə başlamır)
console.log(isValidNumber("+81234567890")); // false (+7 ilə başlamır)