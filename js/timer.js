import { playAudio } from "./audio";
import { clearInterval, setInterval} from 'worker-timers';

let isPaused = true;
let timerInterval;
let targetTime;
let seconds;
let timeSelected;

//DOM elements
let playBtn = document.querySelector("#playBtn");
let pauseBtn = document.querySelector("#pauseBtn");
let Timer = document.getElementById('timer');

//functions
export function startTimer() {
    if (isPaused) {
        targetTime = Date.now() + (seconds * 1000);
        isPaused = false;
        timerInterval = setInterval(updateTimer, 1000);
        playBtn.classList.add('d-none');
        pauseBtn.classList.remove('d-none');
    }
}

export function pauseTimer() {
    isPaused = true;
    clearInterval(timerInterval);
    pauseBtn.classList.add('d-none');
    playBtn.classList.remove('d-none');
}

export function resetTimer() {
    isPaused = true;
    clearInterval(timerInterval);
    seconds = timeSelected * 60;
    updateDisplay();
    pauseBtn.classList.add('d-none');
    playBtn.classList.remove('d-none');
}

function updateTimer() {
    let now = Date.now();
    seconds = Math.round((targetTime - now)/1000)

    if (targetTime < now) {
        resetTimer();
        playAudio();
    }

    updateDisplay();
}

function updateDisplay() {
    let displayMinutes = Math.floor(seconds / 60);
    let displaySeconds = seconds % 60;
    const formattedMinutes = displayMinutes < 10 ? '0' + displayMinutes : displayMinutes;
    const formattedSeconds = displaySeconds < 10 ? '0' + displaySeconds : displaySeconds;
    Timer.innerText = `${formattedMinutes}:${formattedSeconds}`;
    document.title = `${formattedMinutes}:${formattedSeconds} | Studytimer`;
};

export function changeSelectedTime(length) {
    pauseTimer();
    timeSelected = length;
    seconds = length * 60;

    updateDisplay();
}