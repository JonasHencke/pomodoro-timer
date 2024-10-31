export default function setPlaylist(name) {
    let iframe = document.querySelector('iframe');

    switch (name) {
        case 'lofi_chill':
            iframe.src = 'https://open.spotify.com/embed/playlist/1osCrUUV4UeTgYqM9oenvy?utm_source=generator&theme=0';
            break;
        case 'calm_piano':
            iframe.src = 'https://open.spotify.com/embed/playlist/2DXyAzxLI0alMeUJyF5tui?utm_source=generator&theme=0';
            break;
        case 'dark_ambience':
            iframe.src = 'https://open.spotify.com/embed/playlist/5HqYovXbJpnCfUFk4519tE?utm_source=generator&theme=0';
            break;
        default:
            iframe.src = 'https://open.spotify.com/embed/playlist/1osCrUUV4UeTgYqM9oenvy?utm_source=generator&theme=0';
            break;
        }
    }
