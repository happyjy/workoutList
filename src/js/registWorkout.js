import editIcon from '../img/editIcon.png';
import { workoutList, setWorkoutList } from './dummyData';
import { renderWorkoutList } from './utils';
console.log('### registWorkout.js');

/**
 * 운동 추가
 */

// 운동 추가 버튼
const newWorkoutBtnDom = document.getElementById('newWorkoutBtn');
// 운동 삭제 버튼
const workoutdeleteBtnDom = document.getElementById('workoutdeleteBtn');

// 운동 리스트 컨테이너
const targetWorkoutListContainerDom = document.getElementById(
  'targetWorkoutListContainer',
);
// 운동 추가 컨테이너
const registWorkOutContainerDom = document.getElementById(
  'registWorkOutContainer',
);

// 운동 추가 input box(운동이름, 초, 세트수)
const workoutTitleInputDom = document.getElementById('workoutTitle');
const workoutSecondInputDom = document.getElementById('workoutSecond');
const workoutTimesInputDom = document.getElementById('workoutTimes');

//[x] 툴바 > 전체시간(m분, n초)

//[] 툴바 > 삭제 버튼 기능

//[x] 운동루틴 선택되지 않은경우 [운동 추가], [삭제] 버튼 비활성화, [전체시간] 사라짐.

//[x] 운동루틴 클릭시 운동 목록 생성

//[x] toogle 운동 입력부
newWorkoutBtnDom.addEventListener('click', (e) => {
  // registWorkOutContainerDom;
  toggleRegisterWorkoutContainer('new');
});

const toggleRegisterWorkoutContainer = (mode = '', index = '') => {
  let display = '';

  if (registWorkOutContainerDom.style.display === 'block') {
    display = 'none';
    mode = '';
    workoutTitleInputDom.value = '';
    workoutSecondInputDom.value = '';
    workoutTimesInputDom.value = '';
  } else {
    display = 'block';
    mode = mode;

    if (mode === 'edit') {
      registWorkOutContainerDom.dataset.editIndex = index;
    }
  }
  registWorkOutContainerDom.dataset.mode = mode;
  registWorkOutContainerDom.style.display = display;
};

//[x] 툴바 > 삭제 버튼 기능

workoutdeleteBtnDom.addEventListener('click', (e) => {
  console.log('### workoutdeleteBtnDom > click', e.target);
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
  workoutRoutineIndex = checkedWorkoutFirtstDom.dataset.routineindex;

  // workout list except checked workout list
  // const checkedWorkoutIndex = Object.keys(checkedWorkoutObj);
  const leftWorkoutList = workoutList.filter((v) => {
    return !checkedWorkoutObj[v.index];
  });
  // const reRenderWorkoutList = workoutList
  //   .filter((v) => v.workoutRoutineIndex === workoutRoutineIndex)
  //   .filter((v) => !checkedWorkoutObj[v.workoutIndex]);

  // update workout dummy Data
  setWorkoutList(leftWorkoutList);

  // reRender workout list
  renderWorkoutList(workoutRoutineIndex);

  // checkedWorkoutList;
  debugger;
});
