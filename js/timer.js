export let timer;
export let minutes = 25;
export let seconds = 0;
export let isPaused = true;
let timeSelected = 'pomodoro';
export let pomodoroLength = 25;
export let shortBreakLength = 5;
export let longBreakLength = 15

export function startTimer() {
    if (isPaused) {
        isPaused = false;
        timer = setInterval(updateTimer, 1000);
    }
}

export function pauseTimer() {
    isPaused = true;
    clearInterval(timer);
}

export function resetTimer() {
    isPaused = true;
    clearInterval(timer);
    minutes = timeSelected;
    seconds = 0;
    updateDisplay();
}

export function updateTimer() {
    if (minutes === 0 && seconds === 0) {
        // Pomodoro phase is over, reset timer for the break
        minutes = 5;
    } else if (seconds === 0) {
        minutes--;
        seconds = 59;
    } else {
        seconds--;
    }

    updateDisplay();
}

export function changeSelectedTime(length) {
    pauseTimer();
    timeSelected = length;
    seconds = 0;

    // switch statement draus machen
    if(length === pomodoroLength) {
        document.querySelector('#timer').innerText = `${pomodoroLength}:00`;
        minutes = pomodoroLength;
    } else if (length === longBreakLength) {
        document.querySelector('#timer').innerText = `${longBreakLength}:00`;
        minutes = longBreakLength;
    } else if (length === shortBreakLength) {
        document.querySelector('#timer').innerText = `${shortBreakLength}:00`;
        minutes = shortBreakLength;
    }
}

export function updateDisplay() {
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
    document.getElementById('timer').innerText = `${formattedMinutes}:${formattedSeconds}`;
};