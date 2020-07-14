import { sum } from './js/math.js';
import './js/init.js';
import './js/utils.js';
import './js/dummyData.js';
import './js/registWorkoutRoutine.js';
import './js/registWorkoutRoutineProcess.js';
import './js/registWorkout.js';
import './js/registWorkoutProcess.js';
import './js/workoutPlay.js';

import './workoutRegist.css';
import './workoutPlay.css';
import soccer from './img/soccer.png';
import addIcon from './img/addIcon.png';
import deleteIcon from './img/deleteIcon.png';
import editIcon from './img/editIcon.png';
import { toggleRegisterWorkoutRoutineInput } from './js/registWorkoutRoutineProcess.js';
import { toggleRegisterWorkoutContainer } from './js/registWorkoutProcess';

console.log('### app.js');

window.addEventListener('DOMContentLoaded', () => {
  console.log('### DOMContentLoaded');
  const el = document.querySelector('#app');
  // el.innerHTML = `<h1>1+2=${sum(1, 2)}</h1>
  // <img src="${soccer}" alt="webpack"/>
  // <img src="${addIcon}" alt="webpack"/>
  // `;
});

// 새 운동 루틴 추가 input box
const targetRegisterWorkoutRoutineInputDom = document.getElementById(
  'targetRegisterWorkoutRoutineInput',
);

// 운동 추가 input box(운동이름, 초, 세트수)
const workoutTitleInputDom = document.getElementById('workoutTitle');
const workoutSecondInputDom = document.getElementById('workoutSecond');
const workoutTimesInputDom = document.getElementById('workoutTimes');

document.onkeydown = (e) => {
  console.log('### document.onkeydown ');

  e = e || window.event;
  var isEscape = false;
  if ('key' in e) {
    isEscape = e.key === 'Escape' || e.key === 'Esc';
  } else {
    isEscape = e.keyCode === 27;
  }
  if (isEscape) {
    if (document.activeElement === targetRegisterWorkoutRoutineInputDom) {
      console.log('새운동루틴 input에 active있어서 input 제거');
      toggleRegisterWorkoutRoutineInput();
    }

    if (
      document.activeElement === workoutTitleInputDom ||
      document.activeElement === workoutSecondInputDom ||
      document.activeElement === workoutTimesInputDom
    ) {
      console.log('운동 input에 active있어서 제거');
      toggleRegisterWorkoutContainer();
    }
  }
};
