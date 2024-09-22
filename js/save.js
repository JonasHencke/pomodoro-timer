import setBackground from "./background.js";
import setPlaylist from "./playlist.js";
import { changeSelectedTime } from "./timer.js";
import { changeRingtoneVolume } from "./audio.js";
import { updateSelectBtns } from "./main.js";


export default function saveChanges() {
    const timerPomodoro     = document.querySelector('#timer-pomodoro');
    const timerShortBreak   = document.querySelector('#timer-short-break');
    const timerLongBreak    = document.querySelector('#timer-long-break');
    const alarmSelect       = document.querySelector('#alarm-select');
    const volumeRange       = document.querySelector('#volume-range');
    const backgroundSelect  = document.querySelector('#background-select');
    const playlistSelect    = document.querySelector('#playlist-select');
    
    localStorage.setItem('pomodoroLength', timerPomodoro.value);
    localStorage.setItem('shortBreakLength', timerShortBreak.value);
    localStorage.setItem('longBreakLength', timerLongBreak.value);
    localStorage.setItem('alarm', alarmSelect.value);
    localStorage.setItem('volume', volumeRange.value);
    localStorage.setItem('background', backgroundSelect.value);
    localStorage.setItem('playlist', playlistSelect.value);
    localStorage.setItem('volume', volumeRange.value);

    setBackground(backgroundSelect.value);
    setPlaylist(playlistSelect.value);
    updateSelectBtns(pomodoroBtn);
    changeSelectedTime(parseInt(timerPomodoro.value) ? timerPomodoro.value : 25);
    changeRingtoneVolume(volumeRange.value);
}