import { setLocalStorage } from './utils';
// 운동 루틴 목록 List dummy data setting start
// let workoutRoutineListDummyData = [];
// const dummyData = {};
// const dummyData = window;
// constdummyData.workoutRoutineListDummyData = [];
// dummyData.workoutListDummyData = [];
const workoutRoutineListDummyData =
  JSON.parse(localStorage.getItem('workoutRoutineListDummyData')) || [];
const workoutListDummyData =
  JSON.parse(localStorage.getItem('workoutListDummyData')) || [];

// init setting LocalStorage
if (!localStorage.getItem('workoutRoutineListDummyData')) {
  for (let i = 0; i < 20; i++) {
    let date = new Date();
    const regDate = date.setSeconds(i);
    workoutRoutineListDummyData.push({
      index: `${i}`,
      title: `운동루틴 ${i}`,
      regDate: regDate,
      updateDate: regDate,
    });
  }

  setLocalStorage('workoutRoutineListDummyData', workoutRoutineListDummyData);
}

if (!localStorage.getItem('workoutListDummyData')) {
  let workoutListDummyDataIndex = 0;
  for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 5; j++) {
      let date = new Date();
      const regDate = date.setSeconds(i);
      workoutListDummyData.push({
        index: `${workoutListDummyDataIndex++}`,
        workoutIndex: `${j}`,
        workoutRoutineIndex: `${i}`,
        title: `운동 종류 ${i} - ${j}`,
        second: Math.round(Math.random() * 100),
        times: Math.round(Math.random() * 10),
        regDate: regDate,
        updateDate: regDate,
      });
    }
  }

  setLocalStorage('workoutListDummyData', workoutListDummyData);
}

// let workoutRoutineList = dummyData.workoutRoutineListDummyData;
// let workoutList = dummyData.workoutListDummyData;
let workoutRoutineList = workoutRoutineListDummyData;
let workoutList = workoutListDummyData;

// data workout routine, workout
export { workoutRoutineList, workoutList };

const setWorkoutRoutineList = (data) => {
  // dummyData.workoutRoutineListDummyData = data;
  workoutRoutineList = data;
  setLocalStorage('workoutRoutineListDummyData', data);
  console.log('====> dummy data > workoutRoutineList: ', workoutRoutineList);
};
const setWorkoutList = (data) => {
  // dummyData.workoutListDummyData = data;
  workoutList = data;
  setLocalStorage('workoutListDummyData', data);
  console.log('====> dummy data > workoutList: ', workoutList);
};

// update data workout routine, workout
export { setWorkoutRoutineList, setWorkoutList };
