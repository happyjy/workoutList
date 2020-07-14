// import editIcon from '../img/editIcon.png';
import {
  workoutRoutineList,
  workoutList,
  setWorkoutList,
  setWorkoutPlayData,
} from './dummyData';
import { showWorkoutPlay } from './init';
import {
  renderWorkoutList,
  toggleRegisterWorkoutContainer,
  saveWorkoutProcess,
} from './registWorkoutProcess';
import { clearWorkoutInput } from './utils';

console.log('### registWorkout.js');

/**
 * 운동 추가
 */

// 운동 컨테이너
const targetWorkoutListNestedContentsContainerDom = document.getElementById(
  'targetWorkoutListNestedContentsContainer',
);
// 운동 추가 버튼
const newWorkoutBtnDom = document.getElementById('newWorkoutBtn');
// 운동 삭제 버튼
const workoutdeleteBtnDom = document.getElementById('workoutdeleteBtn');

// 운동 리스트 컨테이너
const targetWorkoutListContainerDom = document.getElementById(
  'targetWorkoutListContainer',
);

// 운동 추가 컨테이너
const registWorkoutContainerDom = document.getElementById(
  'registWorkOutContainer',
);

// 운동 추가 input box(운동이름, 초, 세트수)
const workoutTitleInputDom = document.getElementById('workoutTitle');
const workoutSecondInputDom = document.getElementById('workoutSecond');
const workoutTimesInputDom = document.getElementById('workoutTimes');

// 운동 저장 버튼
const saveBtnRegistWorkOutBtnDom = document.getElementById(
  'saveBtnRegistWorkOutBtn',
);
// 운동 취소 버튼
const cancelBtnRegistWorkOutBtnDom = document.getElementById(
  'cancelBtnRegistWorkOutBtn',
);
// 운동 시작 버튼
const startWorkOutBtnDom = document.getElementById('startWorkOutBtn');

//[x] 툴바 > 전체시간(m분, n초)
//[x] 툴바 > 삭제 버튼 기능
//[x] 운동루틴 선택되지 않은경우 [운동 추가], [삭제] 버튼 비활성화, [전체시간] 사라짐.
//[x] 운동루틴 클릭시 운동 목록 생성
//[x]  툴바 > 운동 추가 버튼(toggle)
newWorkoutBtnDom.addEventListener('click', (e) => {
  console.log('### newWorkoutBtnDom');
  if (targetWorkoutListContainerDom.childElementCount === 0) return;
  toggleRegisterWorkoutContainer('new');
});

//[x] 툴바 > 삭제 버튼
workoutdeleteBtnDom.addEventListener('click', (e) => {
  console.log('### workoutdeleteBtnDom > click');
  if (targetWorkoutListContainerDom.childElementCount === 0) return;

  let workoutRoutineIndex;
  let i = 0;
  let checkedWorkoutObj = {};
  for (i; i < targetWorkoutListContainerDom.childElementCount; i++) {
    const workoutDom = targetWorkoutListContainerDom.children[i];
    const inputDom = workoutDom.getElementsByTagName('input')[0];
    if (!!inputDom.checked) {
      checkedWorkoutObj[workoutDom.dataset.index] = workoutDom;
    }
  }

  // figure out routineIndex;
  const checkedWorkoutDomList = Object.values(checkedWorkoutObj);
  const checkedWorkoutFirtstDom =
    checkedWorkoutDomList.length > 0 ? checkedWorkoutDomList[0] : [];
  workoutRoutineIndex = checkedWorkoutFirtstDom.dataset.routineIndex;

  // workout list except checked workout list
  // const checkedWorkoutIndex = Object.keys(checkedWorkoutObj);
  const leftWorkoutList = workoutList.filter((v) => {
    return !checkedWorkoutObj[v.index];
  });
  if (workoutList.length === 0 || leftWorkoutList.length === 0) {
    debugger;
  }
  // const reRenderWorkoutList = workoutList
  //   .filter((v) => v.workoutRoutineIndex === workoutRoutineIndex)
  //   .filter((v) => !checkedWorkoutObj[v.workoutIndex]);

  // update workout dummy Data
  console.log('==> leftWorkoutList', leftWorkoutList);
  setWorkoutList(leftWorkoutList);

  // reRender workout list
  renderWorkoutList(workoutRoutineIndex);
});

// 운동 저장 by enter
const enterEventCallbackFunction = (e) => {
  if (e.key === 'Enter') {
    console.log('### 운동 추가, 수정 enter');
    saveWorkoutProcess();
  }
};

workoutTitleInputDom.addEventListener('keypress', enterEventCallbackFunction);
workoutSecondInputDom.addEventListener('keypress', enterEventCallbackFunction);
workoutTimesInputDom.addEventListener('keypress', enterEventCallbackFunction);

// focusout event(validation)
const focusoutCallbackFunction = (e) => {
  const validation = 'validation';
  const classListStr = [...e.target.classList];
  if (classListStr.find((v) => v === validation)) {
    const classList = classListStr.filter((v) => v !== validation).join(' ');
    e.target.classList = classList;
  }
};
workoutTitleInputDom.addEventListener('focusout', focusoutCallbackFunction);
workoutSecondInputDom.addEventListener('focusout', focusoutCallbackFunction);
workoutTimesInputDom.addEventListener('focusout', focusoutCallbackFunction);
workoutTitleInputDom.addEventListener('keydown', focusoutCallbackFunction);
workoutSecondInputDom.addEventListener('keydown', focusoutCallbackFunction);
workoutTimesInputDom.addEventListener('keydown', focusoutCallbackFunction);

// 운동 저장 by click
saveBtnRegistWorkOutBtnDom.addEventListener('click', (e) => {
  console.log('### saveBtnRegistWorkOutBtnDom');
  saveWorkoutProcess();
});

// 운동 취소
cancelBtnRegistWorkOutBtnDom.addEventListener('click', (e) => {
  console.log('### cancelBtnRegistWorkOutBtnDom');
  toggleRegisterWorkoutContainer();
  clearWorkoutInput();
});

// 운동 수정
targetWorkoutListNestedContentsContainerDom.addEventListener('click', (e) => {
  console.log('### targetWorkoutListNestedContentsContainer > click');

  switch (e.target.id) {
    case 'workoutEdit':
      //set workout index into registWorkoutContainerDom
      registWorkoutContainerDom.dataset.index = e.target.dataset.index;

      // open 운동 입력부
      const workoutRoutineIndex =
        targetWorkoutListNestedContentsContainerDom.dataset.workoutRoutineIndex;
      toggleRegisterWorkoutContainer('edit', workoutRoutineIndex);

      const filterWorkoutList = workoutList.filter(
        (v) => v.index === e.target.dataset.index,
      )[0];

      // init 입력부
      workoutTitleInputDom.value = filterWorkoutList.title;
      workoutSecondInputDom.value = filterWorkoutList.second;
      workoutTimesInputDom.value = filterWorkoutList.times;
      break;

    default:
      break;
  }
});

// 운동 시작
startWorkOutBtnDom.addEventListener('click', (e) => {
  console.log('### startWorkOutBtnDom');
  //1. filter 선택한 운동루틴, 운동 목록
  const workoutRoutineIndex =
    targetWorkoutListNestedContentsContainerDom.dataset.workoutRoutineIndex;
  const workoutPlayRoutine = workoutRoutineList.filter(
    (v) => v.index == workoutRoutineIndex,
  )[0];
  const workoutPlayList = workoutList.filter(
    (v) => v.workoutRoutineIndex == workoutRoutineIndex,
  );

  //2. swap page 운동실행화면 with pass data from 1
  var app = document.getElementById('app');
  app.innerHTML = '';
  app.innerHTML = showWorkoutPlay({ workoutPlayRoutine, workoutPlayList });
  setWorkoutPlayData({ workoutPlayRoutine, workoutPlayList });

  console.log('===> workoutPlay');
  import('./workoutPlay.js') // .js can be skipped
    .then((module) => {
      console.log('===> workoutPlay');
      module.setWorkoutPlayHeader();
      module.setWorkoutPlayToolbar();
      module.setWorkoutPlayList();
      debugger;
      // do something with the module
    });
});

// export {workoutPlayRoutine, workoutPlayList};
