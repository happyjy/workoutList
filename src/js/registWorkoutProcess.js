/**
 *  workout
 */

// render workout list
const workoutTemplate = `
<div data-index="{{index}}" data-workout-index="{{workoutIndex}}" data-routine-index="{{workoutRoutineIndex}}" class="workout">
  <span class="workoutContainerRight">
    <span data-index="{{index}}" data-workout-index="{{workoutIndex}}" data-routine-index="{{workoutRoutineIndex}}"> 
      <input data-index="{{index}}" data-workout-index="{{workoutIndex}}" data-routine-index="{{workoutRoutineIndex}}" type="checkbox"/>
    </span>
    <span data-index="{{index}}" data-workout-index="{{workoutIndex}}" data-routine-index="{{workoutRoutineIndex}}" class="workoutTitle">
      {{title}} {{second}}초 {{times}}세트
    </span>
  </span>
  <span data-index="{{index}}" data-workout-index="{{workoutIndex}}" data-routine-index="{{workoutRoutineIndex}}" class="workoutContainerRight workoutIcon">
    <img data-index="{{index}}" data-workout-index="{{workoutIndex}}" data-routine-index="{{workoutRoutineIndex}}" id="workoutEdit" class="icon workoutEdit" src="./img/editIcon.png" />
  </span>
</div>
`;

// append dom to target workout list container
// 새 운동 루틴 추가 컨테이너(edit, delete 컨테이너)
const targetWorkoutListContainerDom = document.getElementById(
  'targetWorkoutListContainer',
);

// 운동 추가 컨테이너
const registWorkoutContainerDom = document.getElementById(
  'registWorkOutContainer',
);

// dom of totalTime
const targetTotalTimeDom = document.getElementById('targetTotalTime');

// dom of 운동 추가 컨테이너
const registWorkutContainerDom = document.getElementById(
  'registWorkOutContainer',
);

// 운동 추가 input box(운동이름, 초, 세트수)
const workoutTitleInputDom = document.getElementById('workoutTitle');
const workoutSecondInputDom = document.getElementById('workoutSecond');
const workoutTimesInputDom = document.getElementById('workoutTimes');

// get workout list
export function getWorkoutList(workoutRoutineIndex = '') {
  let result = JSON.parse(localStorage.getItem('workoutListDummyData'));
  if (!!workoutRoutineIndex) {
    result = result.filter(
      (v) => v.workoutRoutineIndex === workoutRoutineIndex,
    );
  }
  return result;
}

// get workout list dom
export function getWorkoutListDom(workoutRoutineIndex = '') {
  const workoutList = getWorkoutList();

  const template = workoutList
    .filter((v) => v.workoutRoutineIndex === workoutRoutineIndex)
    .map((v) =>
      workoutTemplate
        .replace(/\{\{index\}\}/g, v.index)
        .replace(/\{\{workoutIndex\}\}/g, v.workoutIndex)
        .replace(/\{\{workoutRoutineIndex\}\}/g, v.workoutRoutineIndex)
        .replace('{{second}}', v.second)
        .replace('{{times}}', v.times)
        .replace('{{title}}', v.title),
    )
    .join('');

  return new DOMParser().parseFromString(template, 'text/html').body.childNodes;
}

export function appendWorkout(workoutDomList = []) {
  console.log('### appendWorkout');
  const copy = [...workoutDomList];
  copy.forEach((node) => {
    targetWorkoutListContainerDom.appendChild(node);
  });
}

// show workout total time
const showWorkoutTotalTime = () => {};

const formatSecondToMin = (second = 0) => {
  const minute = Math.round(second / 60);
  const leftSecond = second % 60;
  return { minute, leftSecond };
};

// calc workout total time
const getWorkoutTotalTime = (workoutList) => {
  const workoutlist = getWorkoutList(workoutList);
  const sumSecond = workoutlist
    .map((v) => v.second)
    .reduce((acc, cur) => {
      return parseInt(acc) + parseInt(cur);
    }, 0);
  return formatSecondToMin(sumSecond);
};

// clear workout list
export function clearHighLight() {}
export function clearWorkoutList() {
  targetWorkoutListContainerDom.innerHTML = '';
}
export function clearWorkoutContainer() {
  workoutTitleInputDom.value = '';
  workoutSecondInputDom.value = '';
  workoutTimesInputDom.value = '';
  registWorkutContainerDom.style.display = 'none';
}
export function clearWorkoutTotalTime() {
  targetTotalTimeDom.innerHTML = '';
}
export function clearWorkoutDom() {
  clearHighLight();
  clearWorkoutList();
  clearWorkoutContainer();
  clearWorkoutTotalTime();
}

// render workout
export function renderWorkoutList(workoutRoutineIndex = '') {
  //clear workout list
  clearWorkoutList();
  appendWorkout(getWorkoutListDom(workoutRoutineIndex));
  // [] 운동 등록화면 [툴바]에 전체 시간 표시
  const getWorkoutTotalTimeResult = getWorkoutTotalTime(workoutRoutineIndex);
  targetTotalTimeDom.innerHTML = `전체 시간: ${getWorkoutTotalTimeResult.minute} 분 ${getWorkoutTotalTimeResult.leftSecond}초`;
}

export function toggleRegisterWorkoutContainer(mode = '', index = '') {
  let display = '';

  if (registWorkoutContainerDom.style.display === 'block' && mode !== 'edit') {
    display = 'none';
    workoutTitleInputDom.value = '';
    workoutSecondInputDom.value = '';
    workoutTimesInputDom.value = '';
  } else {
    display = 'block';
    mode = mode;
    if (mode === 'edit') {
      registWorkoutContainerDom.dataset.editIndex = index;
    }
  }
  registWorkoutContainerDom.dataset.mode = mode;
  registWorkoutContainerDom.style.display = display;
}
