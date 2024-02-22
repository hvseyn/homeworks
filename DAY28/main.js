//!----TASK01----//
// let userAbout = {
//     name: "Huseyn",
//     gender: "male",
//     birthday: "18 august"
// }
// console.log(userAbout.birthday);

//!----TASK02----//
// let userAbout = {
//     name: "Huseyn",
//     gender: "male",
//     birthday: "18 august"
// }

// userAbout.age = 19;
// delete userAbout.birthday
// console.log(userAbout);

//!----TASK03----//
// let userAbout = {
//     name: "Huseyn",
//     gender: "male",
//     birthday: "18 august",
//     age: 19,

//     setAge: function (newAge) {
//         userAbout.age = newAge
//     },

//     getYearsBeforeRetirement: function (lastAge) {
//         return lastAge - userAbout.age
//     }
// }
// userAbout.setAge(20);
// console.log(userAbout);
// console.log(userAbout.getYearsBeforeRetirement(65));

//!----TASK04----//
// let client = {
//     fullName: "Hüseyn Rəhmanov",
//     creditLimit: 5000,
//     balance: 3000,
//     percentOfMinPayment: 5,
//     getBalance: function () {
//         if (this.balance >= 0) {
//             return "Balansınız " + this.balance;
//         } else {
//             return "Borcunuz " + Math.abs(this.balance);
//         }
//     },
//     getMinPayment: function () {
//         if (this.balance > 0) {
//             let minPayment = Math.max(20, this.balance * this.percentOfMinPayment / 100);
//             return "Minimum ödənişiniz " + minPayment;
//         } else {
//             return "Sizin borcunuz yoxdur";
//         }
//     },
//     withdraw: function (amount) {
//         if (this.balance + this.creditLimit >= amount) {
//             this.balance -= amount;
//             console.log("Hesabınızdan " + amount + " çıxarıldı. Yeni balans: " + this.balance);
//         } else {
//             console.log("Kifayət qədər vəsait yoxdur.");
//         }
//     },
//     refill: function (amount) {
//         this.balance += amount;
//         console.log("Balansınıza " + amount + " əlavə edildi. Yeni balans: " + this.balance);
//     }
// };

// console.log(client.getBalance());
// console.log(client.getMinPayment());
// client.withdraw(900);
// client.refill(200);

//!----TASK05----//
// const Calculator = {
//     result: null,

    //? Toplama metodunu
    // add: function (num1, num2) {
    //     this.result = num1 + num2;
    //     return this.result;
    // },

    //? Çıxma metodunu
    // subtract: function (num1, num2) {
    //     this.result = num1 - num2;
    //     return this.result;
    // },

    //? Vurma metodunu
    // multiply: function (num1, num2) {
    //     this.result = num1 * num2;
    //     return this.result;
    // },

    //? Bölmə metodunu
    // divide: function (num1, num2) {
    //     if (num2 !== 0) {
    //         this.result = num1 / num2;
    //     } else {
    //         console.log("Sıfıra bölmə mümkün deyil.");
    //     }
    //     return this.result;
    // },

    //? Dəyərin yaddaşda saxlanması üçün metod
    // storeResult: function (value) {
    //     this.result = value;
    //     console.log("Nəticə yaddaşda saxlanıldı: " + this.result);
    // },

    //? Yaddaşın təmizlənməsi üçün metod
    // clearMemory: function () {
    //     this.result = null;
    //     console.log("Yaddaş təmizləndi.");
    // },

    //? Yaddaşdan dəyərin oxunması üçün metod
//     getResultFromMemory: function () {
//         return this.result;
//     }
// };

// console.log(Calculator.add(5, 3));
// console.log(Calculator.subtract(10, 4));
// console.log(Calculator.multiply(6, 2));
// console.log(Calculator.divide(8, 2));
// Calculator.storeResult(4);
// console.log(Calculator.getResultFromMemory());
// Calculator.clearMemory();
// console.log(Calculator.getResultFromMemory());