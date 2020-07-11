console.log('### common');

const workoutRoutineTemplate = `<div data-index="{{index}}" class="workoutRoutine">
<span data-index="{{index}}" class="workoutRoutineTtitle">{{title}}</span>
<div data-index="{{index}}" class="workoutRoutineButtonContainer">
  <span data-index="{{index}}" class="workoutRoutineEditBtn">
    <img data-index="{{index}}" id="edit" class="icon" src="./img/editIcon.png" />
  </span>
  <span data-index="{{index}}" class="workoutRoutineDeleteBtn">
    <img data-index="{{index}}" id="delete" class="icon" src="./img/deleteIcon.png" />
  </span>
</div>
</div>`;

const targetWorkoutRoutineListContainer = document.getElementById(
  'targetWorkoutRoutineListContainer',
);

const toggleRegisterWorkoutRoutineInput = (mode = '', index = '') => {
  let display = '';

  if (targetRegisterWorkoutRoutine.style.display === 'block') {
    display = 'none';
    mode = '';
    targetRegisterWorkoutRoutineInput.value = '';
  } else {
    display = 'block';
    mode = mode;

    if (mode === 'edit') {
      targetRegisterWorkoutRoutine.dataset.editIndex = index;
    }
  }
  targetRegisterWorkoutRoutine.dataset.mode = mode;
  targetRegisterWorkoutRoutine.style.display = display;
};

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
    targetWorkoutRoutineListContainer.appendChild(node);
  });
}
