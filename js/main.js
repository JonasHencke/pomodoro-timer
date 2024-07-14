import {
  startTimer,
  pauseTimer,
  resetTimer,
  changeSelectedTime
} from "./timer.js";
import 'bootstrap';
import saveChanges from "./save.js";
import pageload from "./pageload.js";

// Timer buttons
const playBtn = document.querySelector("#playBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const cancelBtn = document.querySelector("#cancelBtn");
const pomodoroBtn = document.querySelector("#pomodoroBtn");
const longBreak = document.querySelector("#longBreak");
const shortBreak = document.querySelector("#shortBreak");
const saveBtn = document.querySelector('#save-button')

// timer-button-group functionality
playBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
cancelBtn.addEventListener("click", () => {
  resetTimer();
  cancelBtn.classList.toggle('rotate360');
});

// length-button-group functionality
pomodoroBtn.addEventListener("click", () => {
    changeSelectedTime(localStorage.getItem('pomodoroLength') ? localStorage.getItem('pomodoroLength') : 25);
    updateSelectBtns(pomodoroBtn);
  });
longBreak.addEventListener("click", () => {
    changeSelectedTime(localStorage.getItem('longBreakLength') ? localStorage.getItem('longBreakLength') : 15);
    updateSelectBtns();
  });
shortBreak.addEventListener("click", () => {
  changeSelectedTime(localStorage.getItem('shortBreakLength') ? localStorage.getItem('shortBreakLength') : 5);
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

//playlist functionality
let playlistContainer = document.querySelector('#playlistContainer');
playlistContainer.addEventListener('click', () => {
  playlistContainer.classList.toggle('hideplaylist')
})

saveBtn.addEventListener('click', saveChanges);

pageload()