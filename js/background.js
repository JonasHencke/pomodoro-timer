export function returnBackgroundUrlString(name) {
    switch (name) {
        case 'gas_station':
            return 'url(https://images.pexels.com/photos/5411700/pexels-photo-5411700.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2) 50% center / cover no-repeat';
        case 'starry_night':
            return 'url(https://images.pexels.com/photos/1567069/pexels-photo-1567069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2) 25% center / cover no-repeat fixed ';
        case 'virtual_reality':
            return 'url("https://images.pexels.com/photos/8721342/pexels-photo-8721342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2") 58% center / cover no-repeat fixed';
        case 'tokyo_tower':
            return 'url(https://images.pexels.com/photos/4410426/pexels-photo-4410426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2) 20%';
        case 'mountains':
            return 'url(https://images.pexels.com/photos/1743381/pexels-photo-1743381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2) 50% center / cover no-repeat';
        case 'corals':
            return 'url("https://images.pexels.com/photos/920163/pexels-photo-920163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2") 25% center / cover no-repeat fixed';
        case 'jellyfish':
            return 'url("https://images.pexels.com/photos/2832767/pexels-photo-2832767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2") center / cover no-repeat fixed ';
        case 'autumn':
            return 'url("https://images.pexels.com/photos/28842787/pexels-photo-28842787/free-photo-of-heitere-norwegische-herbstlandschaft-mit-reflexionen.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2") 25% center / cover no-repeat fixed';
        case 'foggy_mountains':
            return 'url("https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2") 25% center / cover no-repeat fixed';
        case 'smooth_clouds':
            return 'url("https://images.pexels.com/photos/2114014/pexels-photo-2114014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2") center / cover no-repeat fixed ';
        case 'cumulus_clouds':
            return 'url("https://images.pexels.com/photos/1605148/pexels-photo-1605148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2") 15% center / cover no-repeat fixed';
        case 'architecure':
            return 'url("https://images.pexels.com/photos/28570477/pexels-photo-28570477/free-photo-of-reflektierende-stadtlandschaft-bei-sonnenuntergang-mit-blick-auf-den-fluss.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2") 25% center / cover no-repeat fixed ';
        case 'waves':
            return 'url("https://images.pexels.com/photos/15272404/pexels-photo-15272404/free-photo-of-ufer-aufsicht-draufsicht-spritzen.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2") 25% center / cover no-repeat fixed ';
        case 'vintage':
            return 'url("https://images.pexels.com/photos/877971/pexels-photo-877971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2") 25% center / cover no-repeat fixed ';
        case 'lotus_flower':
            return 'url("https://images.pexels.com/photos/28579274/pexels-photo-28579274/free-photo-of-leuchtend-rosa-seerose-in-ruhigen-teich.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2") 25% center / cover no-repeat fixed ';
        case 'library':
            return 'url("https://images.pexels.com/photos/2908984/pexels-photo-2908984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2") 50% center / cover no-repeat fixed ';
        case 'ancient':
            return 'url("https://images.pexels.com/photos/2121549/pexels-photo-2121549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2") 50% center / cover no-repeat fixed ';
        default:
            return 'url(https://images.pexels.com/photos/1567069/pexels-photo-1567069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2) 25% center / cover no-repeat fixed ';
        }
    }

export default function setBackground(name) {
    document.body.style.background = returnBackgroundUrlString(name);
}