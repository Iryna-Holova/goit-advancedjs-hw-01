import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
import common from './common';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const currentTime = localStorage.getItem(common.LS_KEY_PLAYER) ?? 0;

player.on('timeupdate', throttle(saveCurrentTime, 1000));
player.setCurrentTime(currentTime);

function saveCurrentTime({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
}
