// import editIcon from '../img/editIcon.png';
// setting localstorage
// localStage
export function setLocalStorage(key, workoutRoutineListDummyData) {
  localStorage.setItem(key, JSON.stringify(workoutRoutineListDummyData));
}

/**
 * workout routine
 */
// get workout routine list
export function getWorkoutRoutineList() {
  return JSON.parse(localStorage.getItem('workoutRoutineListDummyData'));
}

//clear highlight
const targetWorkoutRoutineListContainerDom = document.getElementById(
  'targetWorkoutRoutineListContainer',
);
export function clearHighlight() {
  let i = 0;
  const HIGHLIGHT = 'highlight';
  for (i; i < targetWorkoutRoutineListContainerDom.childElementCount; i++) {
    let childDom = targetWorkoutRoutineListContainerDom.children[i];
    const childDomClass = childDom.getAttribute('class');
    const startPointHighlight = childDomClass.indexOf(HIGHLIGHT);
    if (startPointHighlight >= 0) {
      childDom.className = childDomClass.replace(' ' + HIGHLIGHT, '');
    }
  }
}

// 운동 추가 input box(운동이름, 초, 세트수)
const workoutTitleInputDom = document.getElementById('workoutTitle');
const workoutSecondInputDom = document.getElementById('workoutSecond');
const workoutTimesInputDom = document.getElementById('workoutTimes');

export function clearWorkoutInput() {
  workoutTitleInputDom.value = '';
  workoutSecondInputDom.value = '';
  workoutTimesInputDom.value = '';
}

// class State {
//   constructor(state) {
//     this.state = state;
//   }

//   setState(state) {
//     this.state = state;
//   }

//   getState() {
//     return this.state;
//   }
// }

// export function useState(init = '') {
//   const state = new State(init);
//   // let value = hook.getState.call(hook);
//   // let setState = hook.setState.bind(hook);
//   // const getState = hook.getState();

//   return [state];
// }

/**
 * workout
 */

//validation workout
export function validation(HTMLCollection) {
  let result = true;
  let resultObject = {};

  // const workoutInputHTMLCollection = document.getElementsByClassName(
  //   'workoutInput',
  // );
  const workoutInputList = [...HTMLCollection];

  let workoutInputDom;
  while ((workoutInputDom = workoutInputList.pop())) {
    //required
    if (workoutInputDom.value.trim().length === 0) {
      result = false;
      workoutInputDom.className += ' validation';
      resultObject = {
        type: 'required',
        message: '입력하세요.',
        id: workoutInputDom.id,
      };
    }
  }

  return { result, resultObject };
}
