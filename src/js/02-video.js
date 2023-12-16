import Vimeo from '@vimeo/player';
import throttle from "lodash.throttle";

const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo(iframe);
player.on('timeupdate', throttle((event) => {
    localStorage.setItem('videoplayer-current-time', event.seconds);
},1000));

/*window.addEventListener('DOMContentLoaded', () => {
  const time = localStorage.getItem('videoplayer-current-time');
  player.setCurrentTime(time);
});
*/
const storedTime = localStorage.getItem('videoplayer-current-time');

if (storedTime) {
  player
    .setCurrentTime(storedTime)
    .then(function (seconds) {
      // seconds = the actual time that the player seeked to
    })
    .catch(function (error) {
      switch (error.name) {
        case 'RangeError':
          // the time was less than 0 or greater than the video’s duration
          break;

        default:
          // some other error occurred
          break;
      }
    });
}
