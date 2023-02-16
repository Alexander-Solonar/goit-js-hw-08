import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
});
let x = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(Number(x));
// // ++++++++++++++++++++++++++++++++++++

// const onPlay = function (data) {
//   // data is an object containing properties specific to that event
// };

// player.on('play', onPlay);
