//!----TASK1----//
// let i = +prompt("İki rəqəmli ədəd daxil edin.");
// while (i < 100) {
//     console.log(i);
//     i+=7;
// }


//!----TASK2----//
// let i = +prompt()
// while (i > 0) {
//     console.log("I know how to use cycles");
//     i--
// }


//!----TASK3----//
// let i = 100;
// while ( i < 1000 ) {
//     console.log(i);
//     i+=10
// }


//!----TASK4----//
// let j = 0;
// let i = 10;

// while (i < 100) {
//     if (i % 2 === 1) {
//         j += i;
//     }
//     i++;
// }
// console.log(j);


//!----TASK5----//
// let i = 100;
// let j = +prompt();
// let sum = 0;
// while (i < 1000) {
//     if (i % j === 0) {
//         sum += i
//     }
//     i++;
// }
// console.log(sum);


//!----TASK6----//
// let i = +prompt();
// while (i >= 2) {
//     if (i % 2 === 1 && i % 3 !== 0 && i % 4 !== 0 && i % 5 !== 0) {
//         console.log(i);
//     }
//     i--
// }



//!----TASK7----//
// let sum = 1;
// for (let i = 1; i <=10; i++) {
//     sum *= i;
// }
// console.log(sum);


//!----TASK8----//
// let originalString = "Mənim adım Hüseyndir.";
// let reversedString = ""
// for (let i = originalString.length - 1; i >= 0; i--) {
//     reversedString += originalString[i];
// }
// console.log(reversedString);



//!----TASK9----//
// let myString = "JavaScript. Proqramlaşdırma dilidir.";
// let dotIndex = 0;
// for (let i = 0; i < myString.length; i++) {
//     if (myString[i] === ".") {
//         dotIndex = i;
//         break;
//     }
// }
// console.log(dotIndex);


//!----TASK10----//
// let text = "JavaScript 21-ci əsrin ən yaxşı proqramlaşdırma dilidir.";
// let rtrn = false;
// for (let i = 0; i < text.length; i++) {
//     if (!isNaN(text[i])) {
//         rtrn = true;
//         break;
//     }
// }
// if (rtrn) {
//     console.log("Mətndə rəqəm tapıldı.");
// } else {
//     console.log("Mətndə rəqəm tapılmadı.");
// }





// let i = 1;
// let j = 10;
// while (i <= 10) {
//     // console.log(i + " * 10 " + "= " + i * j);
//     console.log(`${i}` * `${j}` = $`{}`);
//     i++;
// }