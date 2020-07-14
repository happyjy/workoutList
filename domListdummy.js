console.log('### eventFunction');
const app = document.querySelector('#app');

/**
 * workoutRoutine
 */
// 새 운동 루틴 추가 input box
const targetRegisterWorkoutRoutineInputDom = document.getElementById('targetRegisterWorkoutRoutineInput');
//src/js/registWorkoutRoutine.js
// 새 운동 루틴 title
const workoutRoutineTypeDom = document.getElementById('workoutRoutineType');
// 새 운동 루틴 추가 컨테이너(edit, delete 컨테이너)
const targetWorkoutRoutineListContainerDom = document.getElementById('targetWorkoutRoutineListContainer');

//src/js/registWorkoutRoutineProcess.js
// 새 운동 루틴 버튼
const targetRegisterWorkoutRoutineDom = document.getElementById('targetRegisterWorkoutRoutine');

/**
 * workout
 */
const workoutTitleInputDom = document.getElementById('workoutTitle');
const workoutSecondInputDom = document.getElementById('workoutSecond');
const workoutTimesInputDom = document.getElementById('workoutTimes');

// 운동 컨테이너
// const targetWorkoutListNestedContentsContainerDom = document.getElementById('targetWorkoutListNestedContentsContainer');
// 운동 추가 버튼
const newWorkoutBtnDom = document.getElementById('newWorkoutBtn');
// 운동 삭제 버튼
const workoutdeleteBtnDom = document.getElementById('workoutdeleteBtn');

// // 운동 리스트 컨테이너
// const targetWorkoutListContainerDom = document.getElementById('targetWorkoutListContainer');

// 운동 저장 버튼
const saveBtnRegistWorkOutBtnDom = document.getElementById('saveBtnRegistWorkOutBtn');
// 운동 취소 버튼
const cancelBtnRegistWorkOutBtnDom = document.getElementById('cancelBtnRegistWorkOutBtn');
// 운동 시작 버튼
const startWorkOutBtnDom = document.getElementById('startWorkOutBtn');
// 운동 입력부 컨테이너
const registWorkoutContainerDom = document.getElementById('registWorkOutContainer');
// dom of totalTime
const targetTotalTimeDom = document.getElementById('targetTotalTime');
// dom of 운동 입력부 컨테이너
const registWorkutContainerDom = document.getElementById('registWorkOutContainer');

/**
 * workoutPlay
 */
const workoutPlayHeaderDom = document.getElementById('targetWorkoutPlayHeader');
const workoutPlayToolbarDom = document.getElementById('workoutPlayToolbar');
const targetWorkoutPlayListContainerDom = document.getElementById('targetWorkoutPlayListContainer');
const workoutPlayFooterDoneDom = document.getElementById('workoutPlayFooterDone');

//운동 루틴, 운동 data
const currentMinuteDom = document.getElementById('currentMinute');
const currentSecondDom = document.getElementById('currentSecond');

// 현재 운동 이름, 세트 진행 시간, 세트 시간, 현재 세트
const currentWorkoutTitleDom = document.getElementById('currentWorkoutTitle');
const currentWorkoutTimeDom = document.getElementById('currentWorkoutTime');
const currentWorkoutSecondDom = document.getElementById('currentWorkoutSecond');
const currentTimesDom = document.getElementById('currentTimes');

export {};

// 새 운동 루틴 버튼
const registerWorkoutRoutine = document.getElementById('registerWorkoutRoutine');
const workoutInputHTMLCollection = document.getElementsByClassName('workoutInput');
