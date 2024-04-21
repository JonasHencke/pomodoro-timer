import {
  startTimer,
  pauseTimer,
  resetTimer,
  changeSelectedTime,
  pomodoroLength,
  shortBreakLength,
  longBreakLength,
} from "./timer.js";

// Timer buttons
const playBtn = document.querySelector("#playBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const cancelBtn = document.querySelector("#cancelBtn");
const pomodoroBtn = document.querySelector("#pomodoroBtn");
const longBreak = document.querySelector("#longBreak");
const shortBreak = document.querySelector("#shortBreak");

// timer-button-group functionality
playBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
cancelBtn.addEventListener("click", resetTimer);

// length-button-group functionality
pomodoroBtn.addEventListener("click", () => {
    changeSelectedTime(pomodoroLength);
    updateSelectBtns(pomodoroBtn);
  });
longBreak.addEventListener("click", () => {
    changeSelectedTime(longBreakLength);
    updateSelectBtns(longBreak);
  });
shortBreak.addEventListener("click", () => {
  changeSelectedTime(shortBreakLength);
  updateSelectBtns(shortBreak);
});

// functions
function updateSelectBtns(selectedBtn) {
  document.querySelectorAll("#selectBtns > button").forEach((button) => {
    button.classList.add("btn-outline-primary");
    button.classList.remove("btn-primary");
  });
  selectedBtn.classList.add("btn-primary");
  selectedBtn.classList.remove("btn-outline-primary");
}