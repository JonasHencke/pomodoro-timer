export let timer;
export let minutes = 25;
export let seconds = 0;
export let isPaused = true;
let timeSelected = 25;
export let pomodoroLength = 25;
export let shortBreakLength = 5;
export let longBreakLength = 15;
let Ringtone = new Audio('ringtones/notification_sound.mp3');

export function startTimer() {
    if (isPaused) {
        isPaused = false;
        timer = setInterval(updateTimer, 1000);
        document.querySelector("#playBtn").classList.add('d-none');
        document.querySelector("#pauseBtn").classList.remove('d-none');
    }
}

export function pauseTimer() {
    isPaused = true;
    clearInterval(timer);
    document.querySelector("#pauseBtn").classList.add('d-none');
    document.querySelector("#playBtn").classList.remove('d-none');
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
        playAudio();
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

function playAudio() {
    Ringtone.play();
}