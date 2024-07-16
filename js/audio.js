let Ringtone = new Audio('ringtones/notification_sound.mp3');

export function playAudio() {
    Ringtone.play();
};

export function changeRingtoneVolume(volume) {
    Ringtone.volume = volume / 100;
};

export function changeRingtone(ringtone){

};