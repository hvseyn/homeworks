///!----TASK01----\\\
// let friends = ["Huseyn", "Ramin", "Fehmin"];
// friends.shift()
// friends.push("Huseyn")
// console.log(friends);

///!----TASK02----\\\
// let array = [3, 7, 2, 9, 5, 10, 1, 8, 6, 4];
// let max = Math.max(...array);
// console.log(max);

///!----TASK03----\\\
// let employees = [
//     ['Jaylee Macy', 'marketing'],
//     ['John Smith', 'management'],
//     ['Blossom Hartley', 'design'],
//     ['Austin Carpenter', 'marketing'],
//     ['Joan Knowles', 'development'],
//     ['Sally Nunez', 'management'],
//     ['Laurel Ward', 'development'],
//     ['Lark Simon', 'marketing'],
//     ['Jane Stone', 'management'],
//     ['Courtney Olson', 'development'],
// ];
// let development = employees.filter(employees => employees[1] === 'development');
// console.log(development);

///!----TASK04----\\\
// let queue = ["Huseyn Rehmanov", "Ramin Gozelov", "Fehmin Mireliyev"];

// while (true) {
//     let userInput = prompt("novbeye qosulmaq ucun adinizi ve soyadinizi daxil edin; eger novbedeki adamlari gormek isteyirsinizse = daxil edin; ilk adami novbeden kenar etmek ucun ise sadece bosluq girin")

//     if (userInput === " ") {
//         if (queue.length > 0) {
//             let nextCustomer = queue.shift();
//             console.log(" novbeden cixan musteri " + nextCustomer);
//             break;
//         } else {
//             console.log("novbe bosdur");
//             break;
//         }
//     } else if (userInput === "=") {
//         console.log("novbedeki adamlar " + queue);
//         break;
//     } else {
//         queue.push(userInput);
//         console.log(userInput + " elave edildi");
//         break;
//     }
// }

///!----TASK05----\\\
// let numbers = [3, -5, 7, -2, 8, -4];
// function negativeNumber(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < 0) {
//             console.log(arr[i]);
//         }
//     }
// }
// negativeNumber(numbers);

///!----TASK06----\\\
// let numbers = [3, -5, 7, -2, 8, -4];
// function positiveNumber(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             console.log(arr[i]);
//         }
//     }
// }
// positiveNumber(numbers);

///!----TASK07----\\\
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

///!----TASK08----\\\
// function kebabToUpper(text) {
//     return text.toUpperCase().replace(/-/g, "_");
// }
// console.log(kebabToUpper("first-user"));

///!----TASK09----\\\
// let numbers = [1, 5, -7, 3, -9, 4, -6, 2];

// let modifiedNum = numbers.map(function (numbers) {
//     if (numbers < 0) {
//         return -numbers;
//     } else {
//         return numbers * 2;
//     }
// })
// console.log(modifiedNum);

///!----TASK10----\\\
// let strings = ["huseyn", "aztu", "realmadrid", "19"];
// function getFirstThreeChars(arr) {


//     let filtered = arr.filter(function (item) {
//         return item.length >= 3;
//     })

//     if (filtered.length === 0) {
//         return null;
//     } else {
//         return filtered[0].substring(0, 3);
//     }
// }
// let result = getFirstThreeChars(strings);
// console.log(result);

///!----TASK11----\\\
// let names = ["Aydan", "Huseyn", "Ayxan", "Ibrahim"];
// let filteredNames = names.filter(function (name) {
//     return name[0] === "A" || name[0] === "a"
// })
// console.log(filteredNames);

///!----TASK12----\\\


///!----TASK13----\\\
