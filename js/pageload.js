import { changeSelectedTime } from "./timer";
import setBackground from "./background";
import setPlaylist from "./playlist";


export default function pageload() {
    changeSelectedTime(localStorage.getItem('pomodoroLength') ? localStorage.getItem('pomodoroLength') : 25);
    setBackground(localStorage.getItem('background'));
    setPlaylist(localStorage.getItem('playlist'));

    //enter modal input values from localStorage
    document.getElementById('timer-pomodoro').value = localStorage.getItem('pomodoroLength');
    document.getElementById('timer-short-break').value = localStorage.getItem('shortBreakLength');
    document.getElementById('timer-long-break').value = localStorage.getItem('longBreakLength');
    document.querySelector('#volume-range').value = localStorage.getItem('volume');

    //select options from localStorage
    document.getElementById('alarm-select').querySelector(`option[value='${localStorage.getItem('alarm')}']`).setAttribute('selected', true);
    document.getElementById('background-select').querySelector(`option[value='${localStorage.getItem('background')}']`).setAttribute('selected', true);
    document.getElementById('playlist-select').querySelector(`option[value='${localStorage.getItem('playlist')}']`).setAttribute('selected', true);
}