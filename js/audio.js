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