import {sum} from './js/math.js';
import './app.css';
import soccerImg from './img/soccer.png'

window.addEventListener('DOMContentLoaded', ()=>{
  const el = document.querySelector('#app');
  el.innerHTML = `<h1>1+2=${sum(1,2)}</h1> 
  <img src="${soccerImg}" alt="webpack"/>`
})