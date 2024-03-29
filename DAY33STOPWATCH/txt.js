// let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
// let timeRef = document.querySelector(".timer-display");
// let int = null;

// const startButton = document.getElementById("start-button");
// const pauseButton = document.getElementById("pause-button");
// const resetButton = document.getElementById("reset-button");

// startButton.addEventListener("click", startTimer);
// pauseButton.addEventListener("click", pauseTimer);
// resetButton.addEventListener("click", resetTimer);

// function startTimer() {
//     if (int !== null) {
//         clearInterval(int);
//     }
//     int = setInterval(displayTimer, 10);
// }

// function pauseTimer() {
//     clearInterval(int);
// }


// function resetTimer() {
//     clearInterval(int);
//     [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
//     displayTimer();
//     timeRef.innerHTML = "00 : 00 : 00 : 000";
// }
// function displayTimer() {
//     milliseconds += 10;
//     if (milliseconds >= 1000) {
//         milliseconds = 0;
//         seconds++;
//         if (seconds >= 60) {
//             seconds = 0;
//             minutes++;
//             if (minutes >= 60) {
//                 minutes = 0;
//                 hours++;
//             }
//         }
//     }

//     const h = formatTime(hours);
//     const m = formatTime(minutes);
//     const s = formatTime(seconds);
//     const ms = pad(milliseconds, 3);

//     timeRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
// }

// function formatTime(time) {
//     return time < 10 ? "0" + time : time;
// }

// function pad(num, size) {
//     let s = num + "";
//     while (s.length < size) s = "0" + s;
//     return s;
// }