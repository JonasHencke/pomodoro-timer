import setBackground from "./background";

export default function preparePIP() {
    const pipButton = document.querySelector('#pipBtn');
    const playerContainer = document.querySelector('#playerContainer');
    const player = document.querySelector('#player');

    pipButton.addEventListener('click', async () => {
        const pipWindow = await documentPictureInPicture.requestWindow({
            width: "400",
            height: "300", 
          });

        //append all stylesheets
        [...document.styleSheets].forEach((styleSheet) => {
            try {
            const cssRules = [...styleSheet.cssRules].map((rule) => rule.cssText).join('');
            const style = document.createElement('style');

            style.textContent = cssRules;
            pipWindow.document.head.appendChild(style);
            } catch (e) {
            const link = document.createElement('link');

            link.rel = 'stylesheet';
            link.type = styleSheet.type;
            link.media = styleSheet.media;
            link.href = styleSheet.href;
            pipWindow.document.head.appendChild(link);
            }
        });

        //append fontAwesome stylesheet 
        const fontAwesome = document.createElement('link');

        fontAwesome.rel = 'stylesheet';
        fontAwesome.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css";
        fontAwesome.integrity = "sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==";
        fontAwesome.crossOrigin = "anonymous";
        fontAwesome.referrerPolicy = "no-referrer";

        pipWindow.document.head.appendChild(fontAwesome);
      
        // Move the player to the Picture-in-Picture window.
        pipWindow.document.body.append(player);
        //setBackground(localStorage.getItem('background'));
        pipWindow.document.body.style.background = 'url(https://images.pexels.com/photos/5411700/pexels-photo-5411700.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2) 50% center / cover no-repeat';

        pipWindow.addEventListener('pagehide', () => {
            playerContainer.append(player);
        })
      });
}