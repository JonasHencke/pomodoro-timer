let Ringtone = new Audio();
let Preview = new Audio();

function returnRingtonePath(value) {
    switch (value) {
        case 'heartbeat':
            return 'ringtones/heartbeat.mp3';
        case '8bit':
            return 'ringtones/8bit.mp3';
        case 'xylophone':
            return 'ringtones/xylophone.mp3';
        case 'happy_jingle':
            return 'ringtones/happy_jingle.mp3';
        case 'glass_bubbles':
            return 'ringtones/glass_bubbles.mp3';
        case 'alarm_clock':
            return 'ringtones/alarm_clock.mp3';
        case 'bell':
            return 'ringtones/Bell.mp3';
        case 'chime':
            return 'ringtones/chime.mp3';
        case 'choir':
            return 'ringtones/choir.mp3';
        case 'dreamy':
            return 'ringtones/dreamy.mp3';
        case 'echoes':
            return 'ringtones/echoes.mp3';
        case 'level_up':
            return 'ringtones/level_up.mp3';
        default:
            return 'ringtones/standard.mp3';
        }
};

export function initiateAudio(value) {
    let ringtonePath = returnRingtonePath(value);

    Ringtone.src = ringtonePath;
    Ringtone.load();
};

export function playAudio() {
    Ringtone.play();
};

export function changeRingtoneVolume(volume) {
    Ringtone.volume = volume / 100;
};

export function playRingtonePreview() {
    let currentValue = document.querySelector("#alarm-select").value;
    let currentVolume = document.querySelector("#volume-range").value;
    let previewPath = returnRingtonePath(currentValue);

    Preview.src = previewPath;
    Preview.volume = currentVolume / 100;
    Preview.load();
    Preview.play();
};