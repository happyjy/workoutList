// 운동 루틴 목록 List dummy data setting start
// let workoutRoutineListDummyData = [];
const dummyData = {};
// const dummyData = window;
dummyData.workoutRoutineListDummyData = [];
dummyData.workoutListDummyData = [];

var date = new Date();
for (let i = 0; i < 20; i++) {
  dummyData.workoutRoutineListDummyData.push({
    index: `${i}`,
    title: `운동루틴 ${i}`,
    regDate: date.setSeconds(i),
    updateDate: date.setSeconds(i),
  });
}

var date = new Date();
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 5; j++) {
    dummyData.workoutListDummyData.push({
      index: `${j}`,
      title: `운동 종류 ${j}`,
      workoutIndex: i,
      regDate: date.setSeconds(j),
      updateDate: date.setSeconds(j),
    });
  }
}

// export default dummyData;
let workoutRoutineList = dummyData.workoutRoutineListDummyData;
let workoutList = dummyData.workoutListDummyData;
export { workoutRoutineList, workoutList };

const setWorkoutRoutineList = (data) => {
  // dummyData.workoutRoutineListDummyData = data;
  workoutRoutineList = data;
};
const setWorkoutList = (data) => {
  // dummyData.workoutListDummyData = data;
  workoutList = data;
};
export { setWorkoutRoutineList, setWorkoutList };
