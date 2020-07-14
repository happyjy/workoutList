import { workoutRoutineList, setWorkoutRoutineList } from './dummyData';
import { getWorkoutRoutineList, clearHighlight } from './utils';
import { renderWorkoutList, clearWorkoutDom } from './registWorkoutProcess';
import {
  getWorkoutRountineListDom,
  appendWorkoutRountine,
  toggleRegisterWorkoutRoutineInput,
} from './registWorkoutRoutineProcess.js';
import { toggleRegisterWorkoutContainer } from './registWorkoutProcess';

console.log('### registWorkoutRoutine');

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

// 운동 컨테이너
const targetWorkoutListNestedContentsContainerDom = document.getElementById(
  'targetWorkoutListNestedContentsContainer',
);

// 새 운동 루틴 기능
// 새 운동 루틴 버튼
const targetRegisterWorkoutRoutineDom = document.getElementById(
  'targetRegisterWorkoutRoutine',
);

// 새 운동 루틴 추가 input box
const targetRegisterWorkoutRoutineInputDom = document.getElementById(
  'targetRegisterWorkoutRoutineInput',
);

// 새 운동 루틴 title
// const workoutRoutineTypeDom = document.getElementById('workoutRoutineType');

// 새 운동 루틴 추가 컨테이너(edit, delete 컨테이너)
const targetWorkoutRoutineListContainerDom = document.getElementById(
  'targetWorkoutRoutineListContainer',
);

// 새 운동 루틴 버튼
const registerWorkoutRoutine = document.getElementById(
  'registerWorkoutRoutine',
);

// 운동 리스트 컨테이너
const targetWorkoutListContainerDom = document.getElementById(
  'targetWorkoutListContainer',
);

// #init 운동 루틴 리스트(dom 생성 / append)
// seesion workoutRoutineList 이용
const seessionDataWorkoutRoutineList = getWorkoutRoutineList();
// 최근것부터 보여주도록
seessionDataWorkoutRoutineList.sort((a, b) => b.regDate++ - a.regDate++);
const templateDomList = getWorkoutRountineListDom(
  seessionDataWorkoutRoutineList,
);
appendWorkoutRountine(templateDomList);

document.addEventListener('click', (e) => {
  console.log('### document.addEventListener => click');

  if (e.target === document.getElementsByTagName('body')[0]) {
    //TODO [X] - 운동 루틴 선택하지 않은 클릭시 [전체 시간 표시] 사라짐.
    //TODO [] - 운동 루틴 선택하지 않은 클릭시 [운동 추가], [삭제]버튼 비활성화 해야함
    console.log('### ! workoutRoutineType');
    clearWorkoutDom();
    clearHighlight();
  }
});

// document.addEventListener('keypress', (e) => {
//   console.log('### document.kepress: ', e.which);
//   if (e.which == 27) {
//     // Close my modal window
//   }
// });

//[]refactoring

// 새 운동 루틴 버튼
registerWorkoutRoutine.addEventListener('click', (e) => {
  console.log('### 새 운동 루틴 버튼');
  // toggle 새 운동 루틴 추가 input box
  let display = 'block';
  toggleRegisterWorkoutRoutineInput('new');

  //새 운동 루틴 버튼 추가시 자동으로 focus
  targetRegisterWorkoutRoutineInputDom.focus();

  //[]TODO 가로 길이 늘어남
});

// 새 운동 루틴 input
targetRegisterWorkoutRoutineInputDom.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    console.log('### 새 운동 루틴 추가 enter');
    //운동루틴 목록 최상단에 노출
    //TODO data-set list index 추가
    const inputTitle = e.target.value;

    switch (targetRegisterWorkoutRoutineDom.dataset.mode) {
      case 'new':
        const replaceWorkoutRoutineTemplate = workoutRoutineTemplate
          .replace(/\{\{index\}\}/g, `${workoutRoutineList.length + 1}`)
          .replace('{{title}}', inputTitle);

        const templateDom = new DOMParser().parseFromString(
          replaceWorkoutRoutineTemplate,
          'text/html',
        ).body.firstChild;

        targetWorkoutRoutineListContainerDom.prepend(templateDom);

        // workoutRoutineList에 push
        workoutRoutineList.push({
          index: `${workoutRoutineList.length + 1}`,
          title: inputTitle,
          regDate: new Date(),
          updateDate: new Date(),
        });
        setWorkoutRoutineList(workoutRoutineList);
        break;
      case 'edit':
        // update workoutRoutineList
        const updateWorkoutRoutineList = workoutRoutineList.map((v) => {
          if (v.index === targetRegisterWorkoutRoutineDom.dataset.editIndex) {
            v.title = inputTitle;
            v.updateDate = new Date();
          }
          return v;
        });
        setWorkoutRoutineList(updateWorkoutRoutineList);

        // title update 방법 1,2

        // title update 방법 1: 업데이트한 dummydata로 운동 루틴 컨테이너 다 지고 다시 그리기
        // update 새 운동 루틴 추가 컨테이너 with workoutRoutineList;
        targetWorkoutRoutineListContainerDom.innerHTML = '';
        const templateDomList = getWorkoutRountineListDom(workoutRoutineList);
        appendWorkoutRountine(templateDomList);

        // title update 방법 2: 수정한 dom 접근 text 직접 update
        // let i = 0;
        // for (i; i < targetWorkoutRoutineListContainer.children.length; i++) {
        //   if (
        //     targetWorkoutRoutineListContainer.children[i].dataset.index ===
        //     targetRegisterWorkoutRoutine.dataset.editIndex
        //   ) {
        //     targetWorkoutRoutineListContainer.children[
        //       i
        //     ].firstkElementChild.textContent = inputTitle;
        //   }
        // }
        break;
    }

    // [x]TODO 입력부 제거
    e.target.value = '';
    // toogle 새 운동 루틴 추가
    toggleRegisterWorkoutRoutineInput();
  }

  //[]TODO ESC 이벤트시 제거
  if (e.which == 27) {
    console.log('### ESC');
    // Close my modal window
  }
});

// 새 운동 루틴 1.선택, 2.edit, 3.delete 버튼
targetWorkoutRoutineListContainerDom.addEventListener('click', (e) => {
  switch (e.target.id) {
    case 'workoutRoutineType':
      console.log('### 새 운동 루틴 1.선택');
      const workoutRoutineIndex = e.target.dataset.index;
      //[x] render workout list
      renderWorkoutList(workoutRoutineIndex);

      // setting workout index 운동 등록 컨테이너
      targetWorkoutListNestedContentsContainerDom.dataset.workoutRoutineIndex = workoutRoutineIndex;

      //[]refactoring
      //[x]highlight
      clearHighlight();
      e.target.parentElement.className += ' highlight';

      // 운동 리스트 컨테이너에 routine index data-set에 설정
      targetWorkoutListContainerDom.dataset.routineIndex =
        e.target.dataset.index;

      // const [state] = useState('222');
      // debugger;

      break;
    case 'workoutRoutineEdit':
      console.log('### 새 운동 루틴 2.edit');
      //[X]TODO 입력부 show
      if (targetRegisterWorkoutRoutineDom.style.display !== 'block') {
        toggleRegisterWorkoutRoutineInput('edit', e.target.dataset.index);
      }

      //[X]TODO 입력부 input에 클릭한 title 입력, 입력부로 focus 이동
      const clickedRoutine = workoutRoutineList.filter(
        (v) => v.index === e.target.dataset.index,
      )[0];
      targetRegisterWorkoutRoutineInputDom.value = clickedRoutine.title;
      targetRegisterWorkoutRoutineInputDom.focus();
      //[X]TODO 입력부에 포커스, enter로 수정모드 완료(새 운동 루틴 이름 변경)

      //[]TODO ESC누르면 최소(입력부 제거)

      break;
    case 'workoutRoutineDelete':
      console.log('### 새 운동 루틴 3.delete');
      const result = confirm('삭제하시겠습니까?');
      if (result) {
        // dummyData에서 삭제할 것 제외한 데이터 다시 render
        const willNotDeleteOne = workoutRoutineList
          .filter((v) => v.index !== e.target.dataset.index)
          .sort((a, b) => b.updateDate - a.updateDate);
        targetWorkoutRoutineListContainerDom.innerHTML = '';

        const templateDomList = getWorkoutRountineListDom(willNotDeleteOne);
        appendWorkoutRountine(templateDomList);
        setWorkoutRoutineList(willNotDeleteOne);
      }
      break;

    default:
      break;
  }
});

// common function
// 새 운동 루틴 추가 input box

// const toggleRegisterWorkoutRoutineInput = (mode = '', index = '') => {
//   let display = '';

//   if (targetRegisterWorkoutRoutine.style.display === 'block') {
//     display = 'none';
//     mode = '';
//     targetRegisterWorkoutRoutineInput.value = '';
//   } else {
//     display = 'block';
//     mode = mode;

//     if (mode === 'edit') {
//       targetRegisterWorkoutRoutine.dataset.editIndex = index;
//     }
//   }
//   targetRegisterWorkoutRoutine.dataset.mode = mode;
//   targetRegisterWorkoutRoutine.style.display = display;
// };

// const getWorkoutRountineListDom = (workoutRoutineList = []) => {
//   const template = workoutRoutineList
//     .map((v) =>
//       workoutRoutineTemplate
//         .replace(/\{\{index\}\}/g, v.index)
//         .replace('{{title}}', v.title),
//     )
//     .join('');

//   return new DOMParser().parseFromString(template, 'text/html').body.childNodes;
// };
// const appendWorkoutRountine = () => {};
