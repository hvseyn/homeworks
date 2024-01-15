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


let year = prompt ("Il daxil edin!");
if (year % 4 == 0) {
console.log("Uzun ildir");
} else {
    console.log("Uzun il deyil");
}