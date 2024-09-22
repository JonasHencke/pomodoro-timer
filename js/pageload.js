import { changeSelectedTime } from "./timer";
import setBackground from "./background";
import setPlaylist from "./playlist";
import { changeRingtoneVolume, initiateAudio } from "./audio";


export default function pageload() {
    changeSelectedTime(parseInt(localStorage.getItem('pomodoroLength')) ? localStorage.getItem('pomodoroLength') : 25);
    setBackground(localStorage.getItem('background') ? localStorage.getItem('background') : "starry_night");
    setPlaylist(localStorage.getItem('playlist') ? localStorage.getItem('playlist') : 'lofi_chill');
    initiateAudio(localStorage.getItem('alarm') ? localStorage.getItem('alarm') : 'standard')
    changeRingtoneVolume(localStorage.getItem('volume'));

    //enter modal input values from localStorage
    document.getElementById('timer-pomodoro').value = parseInt(localStorage.getItem('pomodoroLength')) ? localStorage.getItem('pomodoroLength') : 25;
    document.getElementById('timer-short-break').value = parseInt(localStorage.getItem('shortBreakLength')) ? localStorage.getItem('shortBreakLength') : 5;
    document.getElementById('timer-long-break').value = parseInt(localStorage.getItem('longBreakLength')) ? localStorage.getItem('longBreakLength') : 10;
    document.querySelector('#volume-range').value = localStorage.getItem('volume');

    //select options from localStorage
    document.getElementById('alarm-select').querySelector(`option[value='${localStorage.getItem('alarm')}']`).setAttribute('selected', true);
    document.getElementById('background-select').querySelector(`option[value='${localStorage.getItem('background')}']`).setAttribute('selected', true);
    document.getElementById('playlist-select').querySelector(`option[value='${localStorage.getItem('playlist')}']`).setAttribute('selected', true);
}

//Add Event Listener to this file (from main.js)