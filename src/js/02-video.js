import Vimeo from '@vimeo/player';
import _ from "lodash";

const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo(iframe);
player.on('timeupdate', _.throttle((event) => {
    localStorage.setItem('videoplayer-current-time', event.seconds);
},1000));

window.addEventListener('DOMContentLoaded', () => {
  const time = localStorage.getItem('videoplayer-current-time');
  player.setCurrentTime(time);
});
