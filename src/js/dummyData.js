import { setLocalStorage } from './utils';
// 운동 루틴 목록 List dummy data setting start
// let workoutRoutineListDummyData = [];
const dummyData = {};
// const dummyData = window;
dummyData.workoutRoutineListDummyData = [];
dummyData.workoutListDummyData = [];

const date = new Date();
for (let i = 0; i < 20; i++) {
  dummyData.workoutRoutineListDummyData.push({
    index: `${i}`,
    title: `운동루틴 ${i}`,
    regDate: date.setSeconds(i),
    updateDate: date.setSeconds(i),
  });
}

let workoutListDummyDataIndex = 0;
for (let i = 0; i < 20; i++) {
  for (let j = 0; j < 5; j++) {
    dummyData.workoutListDummyData.push({
      index: `${workoutListDummyDataIndex++}`,
      workoutIndex: `${j}`,
      workoutRoutineIndex: `${i}`,
      title: `운동 종류 ${i} - ${j}`,
      second: Math.round(Math.random() * 100),
      times: Math.round(Math.random() * 10),
      regDate: date.setSeconds(j),
      updateDate: date.setSeconds(j),
    });
  }
}

// init setting LocalStorage
if (!localStorage.getItem('workoutRoutineListDummyData')) {
  setLocalStorage(
    'workoutRoutineListDummyData',
    dummyData.workoutRoutineListDummyData,
  );
}

if (!localStorage.getItem('workoutListDummyData')) {
  setLocalStorage('workoutListDummyData', dummyData.workoutListDummyData);
}

let workoutRoutineList = dummyData.workoutRoutineListDummyData;
let workoutList = dummyData.workoutListDummyData;

// data workout routine, workout
export { workoutRoutineList, workoutList };

const setWorkoutRoutineList = (data) => {
  // dummyData.workoutRoutineListDummyData = data;
  debugger;
  workoutRoutineList = data;
  setLocalStorage('workoutRoutineListDummyData', data);
};
const setWorkoutList = (data) => {
  // dummyData.workoutListDummyData = data;
  workoutList = data;
  setLocalStorage('workoutListDummyData', data);
};

// update data workout routine, workout
export { setWorkoutRoutineList, setWorkoutList };
