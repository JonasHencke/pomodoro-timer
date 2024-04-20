export let timer;
export let minutes = 25;
export let seconds = 0;
export let isPaused = true;

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
    minutes = 25;
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

export function updateDisplay() {
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
    document.getElementById('timer').innerText = `${formattedMinutes}:${formattedSeconds}`;
};