//!---TASK1---//
// let user = "My name is Huseyn";
// console.log(user);


//!---TASK2---//
// const name = "Huseyn";
// console.log(name);


//!---TASK3---//
//person and $add


//!---TASK4---//
// let bookPrice = 750
// let bookAmount = 14
// let totalPrice = bookPrice * bookAmount
// console.log(totalPrice);


//!---TASK5---//
// let kmhSpeed = 75;
// let msSpeed = kmhSpeed * 10 / 36
// console.log(msSpeed);


//!---TASK6---//
// const date = new Date();
// let nowyear = date.getFullYear();
// let year = prompt("Tezol tarixini de!");
// let age = nowyear - year;
// console.log("Bugune qeder " + age*365 + "gun yasamisan");


//!---TASK7---//
// let num = 13
// console.log(num**5);
// console.log(num%3);


//!---TASK8---//
// let firstName = "Huseyn";
// let lastName = "Rahmanov";
// console.log("Sizin adiniz " + firstName + " "+ lastName + "." + " Sad oldum!" );


//!---TASK9---//
// let firstName = "Huseyn";
// let lastName = "Rahmanov";
// console.log("Sizi bir daha gormeyimize sadiq, " + firstName + " " + lastName );


//!---TASK10---//
// let name = "Huseyn Rahmanov"
// console.log(name.length-1);


//!---TASK11---//
// let name = "Huseyn Rahmanov"
// let spaceIndex = name.indexOf (" ")
// console.log(name[0], name[spaceIndex +1]);


//!---TASK12---//
// let fullname = prompt("Adini daxil et");
// let spaceIndex = fullname.indexOf (" ")
// let name = fullname.slice (0, spaceIndex)
// let surname = fullname.slice (spaceIndex +1)
// console.log(surname, name);


//!---TASK13---//
// let name = prompt("Adini daxil et");
// console.log("Salam, "+ name);


//!---TASK14---//
// let a = Number(prompt("Reqem daxil edin"));
// let b = Number(prompt("Bir reqem daha daxil edin"));
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);


//!---TASK15---//
// let a = 12345
// let b = 98765
// let result = String(a*b)
// console.log(result);
// console.log(result[5]);


//!---TASK16---//
// console.log("" + 1 + 0);
// console.log("" - 1 + 0);
// console.log("true" - false);
// console.log(6 / "3");
// console.log(4 + 5 + "px");
// console.log("$" + 4 +5);
// console.log("4" - 2);
// console.log("4px" - 2 + "px");
// console.log(7/0);
// console.log("-9" + 5);
// console.log("-9" - 5);
// console.log(null + 1);
// console.log(undefined + 1);


//!---TASK17---//
// let num = prompt("4 reqemli eded daxil edin");
// console.log(Number(num[0]) + Number(num[1]) + Number(num[2]) + Number(num[3]) );


//!---TASK18---//
// let fullname = prompt("Tam adini daxil et");
// console.log("Salam, "+ fullname);


//!---TASK19---//
// let price = "530.90"
// let pointindex = price.indexOf (".")
// console.log(price.slice(0, pointindex) +" manat " + price.slice(pointindex+1)+ " qepik");


//!---TASK20---//
// let salary = prompt("Vergisiz maasinizi hesablamaq ucun hal hazirda aldiginiz maasi daxil edin:");
// console.log(salary - salary*13/100);


//!---TASK21---//
// let fullname = prompt("adinizi soyadinizi ve ata adini daxil edin")
// let spaceindex = fullname.indexOf (" ")
// let fathername = fullname[fullname.lastIndexOf(" ") +1]
// console.log(fullname.slice (0, spaceindex +2) + "." + fathername + "." );


//!---TASK22---//
// let salary = prompt("Depozit etmek istediyiniz meblegi daxil edin");
// let month = prompt("Depozit etmek istediyiniz muddeti daxil edin(ay olaraq!)");
// let percentage = prompt("Faiz derecesini daxil edin");
// console.log("Sizin " + month +" ay ucun umumi geliriniz " + salary * percentage /100 + " manatdir." );


//!---TASK23---//
// let a = 20;
// let b = 20;
// console.log(a<b);
// console.log(a!=b);
// console.log(a<=b);
// console.log(b>=a);


//!---TASK24---//
// let age = prompt("Yasinizi daxil edin!");
// if (age < 18) {
// console.log("Access denied!");
// } else { 
//     console.log("Access granted");
// }


//!---TASK25---//
//!---TASK26---//


// let year = prompt ("Il daxil edin!");
// if (year % 4 == 0) {
// console.log("Uzun ildir");
// } else {
//     console.log("Uzun il deyil");
// }


//!---TASK27---//
// let id = prompt('enter product id:');
// if (id === '1') {
//   alert ('Available 10 pcs.');
// }
// else if (id === '2') {
//   alert ('Available 256 pcs.');
//  }
// else if (id === '3') {
//   alert ('Available 53 pcs.');
//  }
//   else if (id === '4') {
//   alert ('There are 3 available.');
//  }
// else {
//   alert ('Out of stock');
// }
// switch (id) {
//     case "1":
//         alert('Available 10 pcs.');
//         break;
//     case "2":
//         alert('Available 256 pcs.');
//         break;
//     case "3":
//         alert('Available 53 pcs.');
//         break;
//     default:
//         break;
// }


//!---TASK28---//
// let gender = prompt("Cinsini daxil et, F or M")
// switch (gender) {
//     case "M":
//         alert("MALE");
//         break;
//     case "F":
//         alert("FEMALE");
//         break;
//     default:
//         break;
// }


//!---TASK29---//
// let date = prompt("Necenci ayda oldugunuzu daxil edin.");
// switch (date) {
//     case "1":
//         alert("YANVAR")
//         break;
//     case "2":
//         alert("FEVRAL")
//         break;
//     case "3":
//         alert("MART")
//         break;
//     case "4":
//         alert("APREL")
//         break;
//     case "5":
//         alert("MAY")
//         break;
//     case "6":
//         alert("IYUN")
//         break;
//     case "7":
//         alert("IYUL")
//         break;
//     case "8":
//         alert("AVQUST")
//         break;
//     case "9":
//         alert("SENTYABR")
//         break;
//     case "10":
//         alert("OKTYABR")
//         break;
//     case "11":
//         alert("NOYABR")
//         break;
//     case "12":
//         alert("DEKABR")
//         break;
//     default:
//         break;
// }


//!---TASK30---//
// let date = prompt("Oldugunuz tarixi 2009.12.19 formatında daxil edin.");
// let pointindex = date.indexOf(".");
// let year = date.slice(0, pointindex);
// let month = date.slice(pointindex + 1, date.lastIndexOf("."));
// switch (month) {
//     case "1":
//     case "01":
//         month = ("YANVAR")
//         break;
//     case "2":
//     case "02":
//         month = ("FEVRAL")
//         break;
//     case "3":
//     case "03":
//         month = ("MART")
//         break;
//     case "4":
//     case "04":
//         alert("APREL")
//         break;
//     case "5":
//     case "05":
//         alert("MAY")
//         break;
//     case "6":
//     case "06":
//         month = ("IYUN")
//         break;
//     case "7":
//     case "07":
//         month = ("IYUL")
//         break;
//     case "8":
//     case "08":
//         month = ("AVQUST")
//         break;
//     case "9":
//     case "09":
//         month = ("SENTYABR")
//         break;
//     case "10":
//         month = ("OKTYABR")
//         break;
//     case "11":
//         month = ("NOYABR")
//         break;
//     case "12":
//         month = ("DEKABR")
//         break;
//     default:
//         break;
// }
// let day = date.slice(date.lastIndexOf(".") + 1);

// if (month > 12) {
//     console.log("Tarix duzgun qeyd edilmeyib");
// } else if (day > 31) {
//     console.log("Tarix duzgun qeyd edilmeyib");
// } else {
//     console.log(day + " " + month + " " + year + "-cu il");
// }