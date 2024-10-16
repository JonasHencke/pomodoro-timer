import { playAudio, pauseAudio } from "./audio";
import { clearInterval, setInterval} from 'worker-timers';

let isPaused = true;
let timerInterval;

//durations
let minutes = 25;
let seconds = 0;
let timeSelected = 25;

//DOM elements
let playBtn = document.querySelector("#playBtn");
let pauseBtn = document.querySelector("#pauseBtn");
let Timer = document.getElementById('timer');

//functions
export function startTimer() {
    if (isPaused) {
        isPaused = false;
        timerInterval = setInterval(updateTimer, 1000);
        playBtn.classList.add('d-none');
        pauseBtn.classList.remove('d-none');
        playAudio();
        pauseAudio();
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
    minutes = timeSelected;
    seconds = 0;
    updateDisplay();
    pauseBtn.classList.add('d-none');
    playBtn.classList.remove('d-none');
}

function updateTimer() {
    if (minutes === 0 && seconds === 0) {
        resetTimer();
        playAudio();
    } else if (seconds === 0) {
        minutes--;
        seconds = 59;
    } else {
        seconds--;
    }

    updateDisplay();
}

function updateDisplay() {
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
    Timer.innerText = `${formattedMinutes}:${formattedSeconds}`;
    document.title = `${formattedMinutes}:${formattedSeconds} | Studytimer`;
};

export function changeSelectedTime(length) {
    pauseTimer();
    timeSelected = length;
    seconds = 0;
    minutes = length;

    updateDisplay();
}