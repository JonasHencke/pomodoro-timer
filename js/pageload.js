import { changeSelectedTime } from "./timer";
import setBackground from "./background";
import setPlaylist from "./playlist";
import { changeRingtoneVolume, initiateAudio } from "./audio";

export default function pageload() {
    //background settings
    const urlObj = new URL(window.location.href);
    const searchParams = Object.fromEntries(urlObj.searchParams.entries());

    if(localStorage.getItem('background')) {
        setBackground(localStorage.getItem('background'))
    } else if(searchParams.theme) {
        setBackground(searchParams.theme);
    } else {
        setBackground('starry_night');
    }

    //initialise settings
    changeSelectedTime(parseInt(localStorage.getItem('pomodoroLength')) ? localStorage.getItem('pomodoroLength') : 25);
    setPlaylist(localStorage.getItem('playlist') ? localStorage.getItem('playlist') : 'lofi_chill');
    initiateAudio(localStorage.getItem('alarm') ? localStorage.getItem('alarm') : 'standard')
    changeRingtoneVolume(localStorage.getItem('volume'));

    //enter modal input values from localStorage
    document.getElementById('timer-pomodoro').value = parseInt(localStorage.getItem('pomodoroLength')) ? localStorage.getItem('pomodoroLength') : 25;
    document.getElementById('timer-short-break').value = parseInt(localStorage.getItem('shortBreakLength')) ? localStorage.getItem('shortBreakLength') : 5;
    document.getElementById('timer-long-break').value = parseInt(localStorage.getItem('longBreakLength')) ? localStorage.getItem('longBreakLength') : 10;
    document.querySelector('#volume-range').value = localStorage.getItem('volume');

    //select options from localStorage
    localStorage.getItem('alarm') && document.getElementById('alarm-select').querySelector(`option[value='${localStorage.getItem('alarm')}']`).setAttribute('selected', true);
    localStorage.getItem('playlist') && document.getElementById('playlist-select').querySelector(`option[value='${localStorage.getItem('playlist')}']`).setAttribute('selected', true);
    document.getElementById('background-select').querySelector(`option[value='${localStorage.getItem('background') ? localStorage.getItem('background') : "starry_night"}']`).setAttribute('selected', true);
}

//TODO: Move Event Listener to this file (from main.js)