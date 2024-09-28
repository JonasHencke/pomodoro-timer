import { playAudio, pauseAudio } from "./audio";
export let timer;
export let minutes = 25;
export let seconds = 0;
export let isPaused = true;
let audioTimeout;
let timeSelected = 25;
let pomodoroLength = parseInt(localStorage.getItem('pomodoroLength')) ? localStorage.getItem('pomodoroLength') : 25;
let shortBreakLength = parseInt(localStorage.getItem('shortBreakLength')) ? localStorage.getItem('shortBreakLength') : 5;
let longBreakLength = parseInt(localStorage.getItem('longBreakLength')) ? localStorage.getItem('longBreakLength') : 10;

export function startTimer() {
    if (isPaused) {
        isPaused = false;
        timer = setInterval(updateTimer, 1000);
        document.querySelector("#playBtn").classList.add('d-none');
        document.querySelector("#pauseBtn").classList.remove('d-none');
        playAudio();
        pauseAudio();

        audioTimeout = setTimeout(() => {playAudio()}, (60 * minutes + seconds) * 1000);
    }
}

export function pauseTimer() {
    isPaused = true;
    clearInterval(timer);
    document.querySelector("#pauseBtn").classList.add('d-none');
    document.querySelector("#playBtn").classList.remove('d-none');
    clearTimeout(audioTimeout);
}

export function resetTimer() {
    isPaused = true;
    clearInterval(timer);
    minutes = timeSelected;
    seconds = 0;
    updateDisplay();
    document.querySelector("#pauseBtn").classList.add('d-none');
    document.querySelector("#playBtn").classList.remove('d-none');
}

export function updateTimer() {
    if (minutes === 0 && seconds === 0) {
        resetTimer();
    } else if (seconds === 0) {
        minutes--;
        seconds = 59;
    } else {
        seconds--;
    }

    updateDisplay();
}

export function updateDisplay() {
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
    document.getElementById('timer').innerText = `${formattedMinutes}:${formattedSeconds}`;
    document.title = `${formattedMinutes}:${formattedSeconds} | Studytimer`;
};

export function changeSelectedTime(length) {
    pauseTimer();
    timeSelected = length;
    seconds = 0;
    minutes = length;

    updateDisplay();
}



export function ChangeTimerLengths(pomodoro, short, long) {
    pomodoroLength = pomodoro ? pomodoro : pomodoroLength;
    shortBreakLength = short ? short : shortBreakLength;
    longBreakLength = long ? long : longBreakLength;
}