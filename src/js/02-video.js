import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const KEY_STORAGE = 'videoplayer-current-time';

player.on('timeupdate', throttle(onSavePlaybackTime, 1000));

function onSavePlaybackTime(event) {
  try {
    localStorage.setItem(KEY_STORAGE, JSON.stringify(event.seconds));
  } catch (error) {
    console.log(error.message);
  }
}

try {
  const time = Number(localStorage.getItem(KEY_STORAGE));
  player.setCurrentTime(time);
} catch (error) {
  console.log(error.message);
}
