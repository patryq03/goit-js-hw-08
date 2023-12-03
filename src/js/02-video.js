import Vimeo from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
player.on('timeupdate', (event) => {
    localStorage.setItem('videoplayer-current-time', event.seconds);
});

window.addEventListener('DOMContentLoaded', () => {
    const time = localStorage.getItem('videoplayer-current-time');
    player.setCurrentTime(time);
});


