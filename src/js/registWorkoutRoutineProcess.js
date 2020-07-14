console.log('### rigistWorkoutRoutineProcess');

/**
 * 새 운동 루틴 운동 추가
 */
const workoutRoutineTemplate = `<div data-index="{{index}}" class="workoutRoutine">
<span id="workoutRoutineType" data-index="{{index}}" class="workoutRoutineTitle">{{title}}</span>
<div data-index="{{index}}" class="workoutRoutineButtonContainer">
  <span data-index="{{index}}" class="workoutRoutineEditBtn">
    <img data-index="{{index}}" id="workoutRoutineEdit" class="icon" src="./img/editIcon.png" />
  </span>
  <span data-index="{{index}}" class="workoutRoutineDeleteBtn">
    <img data-index="{{index}}" id="workoutRoutineDelete" class="icon" src="./img/deleteIcon.png" />
  </span>
</div>
</div>`;

// 새 운동 루틴 기능
// 새 운동 루틴 버튼
const targetRegisterWorkoutRoutineDom = document.getElementById(
  'targetRegisterWorkoutRoutine',
);

// 새 운동 루틴 추가 input box
const targetRegisterWorkoutRoutineInputDom = document.getElementById(
  'targetRegisterWorkoutRoutineInput',
);

//새 운동 루틴 컨테이너
const targetWorkoutRoutineListContainerDom = document.getElementById(
  'targetWorkoutRoutineListContainer',
);

// toogle rigister workout routin input
export function toggleRegisterWorkoutRoutineInput(mode = '', index = '') {
  let display = '';

  if (targetRegisterWorkoutRoutineDom.style.display === 'block') {
    display = 'none';
    mode = '';
    targetRegisterWorkoutRoutineInputDom.value = '';
  } else {
    display = 'block';
    mode = mode;

    if (mode === 'edit') {
      targetRegisterWorkoutRoutineDom.dataset.editIndex = index;
    }
  }
  targetRegisterWorkoutRoutineDom.dataset.mode = mode;
  targetRegisterWorkoutRoutineDom.style.display = display;
}

// get workout routine list dom
export function getWorkoutRountineListDom(workoutRoutineListDummyData = []) {
  console.log('### getWorkoutRountineListDom');
  const template = workoutRoutineListDummyData
    .map((v) =>
      workoutRoutineTemplate
        .replace(/\{\{index\}\}/g, v.index)
        .replace('{{title}}', v.title),
    )
    .join('');

  return new DOMParser().parseFromString(template, 'text/html').body.childNodes;
}

export function appendWorkoutRountine(templateDomList = []) {
  console.log('### appendWorkoutRountine');
  const copy = [...templateDomList];
  copy.forEach((node) => {
    targetWorkoutRoutineListContainerDom &&
      targetWorkoutRoutineListContainerDom.appendChild(node);
  });
}
