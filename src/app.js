import { sum } from './js/math.js';
import './js/common.js';
import './js/registWorkoutRoutine.js';
import './app.css';
import soccer from './img/soccer.png';
import addIcon from './img/addIcon.png';
import cancelIcon from './img/cancelIcon.png';
import editIcon from './img/editIcon.png';

window.addEventListener('DOMContentLoaded', () => {
  const el = document.querySelector('#app');
  el.innerHTML = `<h1>1+2=${sum(1, 2)}</h1>
  <img src="${soccer}" alt="webpack"/>`;
});
