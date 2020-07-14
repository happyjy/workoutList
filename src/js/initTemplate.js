// import { getWorkoutRoutineList, clearHighlight } from './utils';
// import { getWorkoutRountineListDom, appendWorkoutRountine } from './registWorkoutRoutineProcess.js';
import { wokroutRegisteTemplate } from './template';
console.log('### initTemplate');

const el = document.querySelector('#app');

el.innerHTML = wokroutRegisteTemplate;
