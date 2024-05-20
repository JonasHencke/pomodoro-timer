export default function setBackground(name) {
    switch (name) {
        case 'gas_station':
            document.body.style.background = 'no-repeat fixed 25% 100% url(https://images.pexels.com/photos/5411700/pexels-photo-5411700.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)';
            break;
        case 'starry_night':
            document.body.style.background = 'no-repeat fixed 25% 100% url(https://images.pexels.com/photos/1567069/pexels-photo-1567069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)';
            break;
        case 'virtual_reality':
            document.body.style.background = 'no-repeat fixed 25% 100% url(https://images.pexels.com/photos/8721342/pexels-photo-8721342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)';
            break;
        case 'tokyo_tower':
            document.body.style.background = 'no-repeat fixed 25% 100% url(https://images.pexels.com/photos/4410426/pexels-photo-4410426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)';
            break;
        }
    }