// const startBtn = document.getElementById("start");
// const pauseBtn = document.getElementById("pause");
// const resetBtn = document.getElementById("reset");

// const timer = document.getElementById("timer");

// let minutes = 25;
// let seconds = 0;
// let timerId;

// startBtn.addEventListener("click", () => {
//     clearInterval(timerId);
//     timerId = setInterval(() => {
//         if (seconds === 0) {
//             seconds = 59;
//             if (minutes !== 0) {
//                 minutes--;
//             }
//         } else {
//             seconds--;
//         }
//         timer.innerHTML = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
//     }, 1000);
// });

// pauseBtn.addEventListener("click", () => {
//     clearInterval(timerId);
// });

// resetBtn.addEventListener("click", () => {
//     clearInterval(timerId);
//     minutes = 25;
//     seconds = 0;
//     timer.innerHTML = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
// });

const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');

const timer = document.getElementById('timer');

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);

let minutes = 25;
let seconds = 0;
let timerId;

function updateTimer() {
    timer.innerHTML = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
}

function startTimer() {
    clearInterval(timerId);
    timerId = setInterval(() => {
        if (seconds === 0) {
            seconds = 59;
            if (minutes !== 0) {
                minutes--;
            }
        } else {
            seconds--;
        }
        updateTimer();
    }, 1000);
}

function pauseTimer() {
    clearInterval(timerId);
}

function resetTimer() {
    clearInterval(timerId);
    minutes = 25;
    seconds = 0;
    updateTimer();
}