import {
    timer,
    minutes,
    seconds,
    isPaused,
    updateDisplay,
    startTimer,
    pauseTimer,
    resetTimer
} from "./timer.js"

// Timer buttons
const playBtn = document.querySelector('#startBtn');
const pauseBtn = document.querySelector('#pauseBtn');
const cancelBtn = document.querySelector('#cancelBtn');

// Timer functionality
playBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
cancelBtn.addEventListener('click', resetTimer);
