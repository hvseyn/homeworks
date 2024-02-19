//!-----TASK01-----//
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let [first, second, ...rest] = numbers;
// let newArray = rest;

// console.log("Dəyişənlər:", first, second);
// console.log("Yeni Massiv:", newArray);

//!-----TASK02-----//
// let numbers = [7, 14, 5, 19, 34, 10, 8, 3, 12];
// let maxNumber = Math.max(...numbers);
// console.log(maxNumber);

//!-----TASK03-----//
// let originalArr = [3, 6, 9, 12, 15];
// let newArr = [...originalArr];
// newArr = newArr.map(num => num * 2);
// console.log(originalArr);
// console.log(newArr);

//!-----TASK04-----//
// let array = [1, 6, 34, 5, 1, -4, 54, 76, 23, 65, 3, 50, 45, 100, 2346, -52, 6545, 0, 45, 22];
// function sortArray(array) {
//     array.sort(function (a, b) {
//         return a - b;
//     });
//     return array;
// }
// let sortedArray = sortArray(array);
// console.log(sortedArray);

//!-----TASK05-----//
// function removeNegativeNumbers(numbers) {
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] < 0) {
//             console.log(numbers[i]);
//         }
//     }
// }
// let numbersArray = [1, -2, 3, -4, 5, -6, 7, 8, -9, 10];
// removeNegativeNumbers(numbersArray);

//!-----TASK06-----//
// function removeNegativeNumbers(numbers) {
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] > 0) {
//             console.log(numbers[i]);
//         }
//     }
// }
// let numbersArray = [1, -2, 3, -4, 5, -6, 7, 8, -9, 10];
// removeNegativeNumbers(numbersArray);

//!-----TASK07-----//
// let names = ["Michael", "Trevor", "Franklin", "Lamar", "Jimmy"]
// function printWithDashes(name) {
//     console.log("-------------");
//     console.log(name);
//     console.log("-------------");
// }

// function printWithHearts(name) {
//     console.log("<3<3<3<3 " + name + " <3<3<3<3");
// }

// function printWithIndex(name, index) {
//     console.log(index + " - " + name);
// }

// names.forEach(printWithDashes);
// names.forEach(printWithHearts);
// names.forEach(printWithIndex);