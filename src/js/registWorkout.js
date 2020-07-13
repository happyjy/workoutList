// import editIcon from '../img/editIcon.png';
import { workoutList, setWorkoutList } from './dummyData';
import {
  renderWorkoutList,
  toggleRegisterWorkoutContainer,
} from './registWorkoutProcess';
import { clearWorkoutInput } from './utils';

console.log('### registWorkout.js');

/**
 * 운동 추가
 */

// 운동 컨테이너
const targetWorkoutListNestedContentsContainer = document.getElementById(
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

// 운동 저장
const saveBtnRegistWorkOutBtnDom = document.getElementById(
  'saveBtnRegistWorkOutBtn',
);
// 운동 취소
const cancelBtnRegistWorkOutBtnDom = document.getElementById(
  'cancelBtnRegistWorkOutBtn',
);

// 운동 추가 input box(운동이름, 초, 세트수)
const workoutTitleInputDom = document.getElementById('workoutTitle');
const workoutSecondInputDom = document.getElementById('workoutSecond');
const workoutTimesInputDom = document.getElementById('workoutTimes');

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

// 운동 저장 by click
saveBtnRegistWorkOutBtnDom.addEventListener('click', (e) => {
  console.log('### saveBtnRegistWorkOutBtnDom');
});

// 운동 저장 by enter
const enterEventCallbackFunction = (e) => {
  if (e.key === 'Enter') {
    console.log('### 운동 추가, 수정 enter');
    switch (registWorkoutContainerDom.dataset.mode) {
      case 'new':
        //운동 추가
        // figure out routineIndex;
        const workoutRoutineIndex =
          targetWorkoutListContainerDom.dataset.routineIndex;

        const filterWorkoutList = workoutList.filter(
          (v) => v.workoutRoutineIndex === workoutRoutineIndex,
        );

        // workoutList에서 index, workoutIndex, workoutRoutineIndex하고 push
        let maxIndex = workoutList.reduce((acc, cur) => {
          return acc.index > cur.index ? acc : cur;
        }).index;

        let maxWorkoutIndex = filterWorkoutList.reduce((acc, cur) => {
          return acc.workoutIndex > cur.workoutIndex ? acc : cur;
        }).workoutIndex;

        // update workout dummy Data
        // reRender workout list
        let date = new Date();
        console.log(workoutList);
        workoutList.push({
          index: parseInt(maxIndex) + 1 + '',
          workoutIndex: parseInt(maxWorkoutIndex) + 1 + '',
          workoutRoutineIndex: workoutRoutineIndex,
          title: workoutTitleInputDom.value,
          second: workoutSecondInputDom.value,
          times: workoutTimesInputDom.value,
          regDate: date++,
          updateDate: date++,
        });
        setWorkoutList(workoutList);
        renderWorkoutList(workoutRoutineIndex); //routineIndex

        clearWorkoutInput();
        workoutTitleInputDom.focus();
        break;
      case 'edit':
        //운동 수정
        //start
        break;

      default:
        break;
    }
  }
};
workoutTitleInputDom.addEventListener('keypress', enterEventCallbackFunction);
workoutSecondInputDom.addEventListener('keypress', enterEventCallbackFunction);
workoutTimesInputDom.addEventListener('keypress', enterEventCallbackFunction);

// 운동 취소
cancelBtnRegistWorkOutBtnDom.addEventListener('click', (e) => {
  console.log('### cancelBtnRegistWorkOutBtnDom');
});

// 운동 수정
targetWorkoutListNestedContentsContainer.addEventListener('click', (e) => {
  console.log('### targetWorkoutListNestedContentsContainer > click');

  switch (e.target.id) {
    case 'workoutEdit':
      // open 운동 입력부
      const workoutIndex =
        targetWorkoutListNestedContentsContainer.dataset.workoutIndex;
      toggleRegisterWorkoutContainer('edit', workoutIndex);

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
