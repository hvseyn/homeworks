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
//             console.log("novbeden cixan musteri " + nextCustomer);
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