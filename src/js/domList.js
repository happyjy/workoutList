console.log('dom List');

// 운동 리스트 컨테이너
const targetWorkoutListContainerDom = document.getElementById('targetWorkoutListContainer');

// 운동 컨테이너
const targetWorkoutListNestedContentsContainerDom = document.getElementById('targetWorkoutListNestedContentsContainer');

// 새 운동 루틴 버튼
const targetRegisterWorkoutRoutineDom = document.getElementById('targetRegisterWorkoutRoutine');

// 새 운동 루틴 inputbox
const targetRegisterWorkoutRoutineInputDom = document.getElementById('targetRegisterWorkoutRoutineInput');

// 새 운동 루틴 추가 컨테이너(edit, delete 컨테이너)
const targetWorkoutRoutineListContainerDom = document.getElementById('targetWorkoutRoutineListContainer');

// 운동 입력부 컨테이너
const registWorkoutContainerDom = document.getElementById('registWorkOutContainer');

// workout 입력부
const workoutTitleInputDom = document.getElementById('workoutTitle');
const workoutSecondInputDom = document.getElementById('workoutSecond');
const workoutTimesInputDom = document.getElementById('workoutTimes');

export {
	targetWorkoutListContainerDom,
	targetWorkoutListNestedContentsContainerDom,
	targetRegisterWorkoutRoutineDom,
	targetRegisterWorkoutRoutineInputDom,
	targetWorkoutRoutineListContainerDom,
	registWorkoutContainerDom,
	workoutTitleInputDom,
	workoutSecondInputDom,
	workoutTimesInputDom
};
