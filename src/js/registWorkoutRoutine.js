import { getWorkoutRountineListDom, appendWorkoutRountine } from './common.js';
import { workoutRoutineList, setWorkoutRoutineList } from './dummyData.js';

console.log(
  '### registerWorkoutRoutine module > workoutRoutineList',
  workoutRoutineList,
);

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

// const div = document.createElement('div').appendChild(templateDomList);

// 새 운동 루틴 기능
// 새 운동 루틴 버튼
const targetRegisterWorkoutRoutine = document.getElementById(
  'targetRegisterWorkoutRoutine',
);

// 새 운동 루틴 추가 input box
const targetRegisterWorkoutRoutineInput = document.getElementById(
  'targetRegisterWorkoutRoutineInput',
);

// 새 운동 루틴 추가 컨테이너
const targetWorkoutRoutineListContainer = document.getElementById(
  'targetWorkoutRoutineListContainer',
);

// 운동 루틴 목록 List dummy data setting start
// let workoutRoutineList = [];
// const dummyData = window;
// dummyData.workoutRoutineList = [];

// //reg date 임의 등록
// var date = new Date();
// for (let i = 0; i < 20; i++) {
//   dummyData.workoutRoutineList.push({
//     index: `${i}`,
//     title: `운동루틴${i}`,
//     regDate: date.setSeconds(i),
//     updateDate: date.setSeconds(i),
//   });
// }

//최근것부터 보여주도록
workoutRoutineList.sort((a, b) => b.regDate++ - a.regDate++);

// 운동 루틴 리스트 dom 생성 / append
const templateDomList = getWorkoutRountineListDom(workoutRoutineList);
appendWorkoutRountine(templateDomList);

// const template = workoutRoutineList
//   .map((v) =>
//     workoutRoutineTemplate
//       .replace(/\{\{index\}\}/g, v.index)
//       .replace('{{title}}', v.title),
//   )
//   .join('');

// const templateDomList = new DOMParser().parseFromString(template, 'text/html')
//   .body.childNodes;

// # notice
// - copy 하지 않으면 appendChild로 추가할때 templateDomList 배열에서 하나씩 제거 됨
// const copy = [...templateDomList];
// copy.forEach((node) => {
//   console.log(node.firstElementChild.dataset);
//   targetWorkoutRoutineListContainer.appendChild(node);
// });

// 운동 루틴 목록 List dummy data setting end

// const copy = [...templateDomList];
// for (let i = 0; i < copy.length; i++) {
//   targetWorkoutRoutineListContainer.appendChild(copy[i]);
// }

document.addEventListener('click', (e) => {
  // console.log('123', e);
});

document.addEventListener('keypress', (e) => {
  console.log('### document.kepress: ', e.which);
  if (e.which == 27) {
    // Close my modal window
  }
});

document.onkeydown = (e) => {
  console.log('### document.onkeydown ', e.which);

  e = e || window.event;
  var isEscape = false;
  if ('key' in e) {
    isEscape = e.key === 'Escape' || e.key === 'Esc';
  } else {
    isEscape = e.keyCode === 27;
  }
  if (isEscape) {
    if (document.activeElement === e.target) {
      console.log('새운동루틴 input에 active있어서 input 제거');
      toggleRegisterWorkoutRoutineInput();
    }
  }
};

// 새 운동 루틴 버튼
document
  .getElementById('registerWorkoutRoutine')
  .addEventListener('click', (e) => {
    console.log('### 새 운동 루틴 버튼');
    // toggle 새 운동 루틴 추가 input box
    let display = 'block';
    toggleRegisterWorkoutRoutineInput('new');
    // if (targetRegisterWorkoutRoutine.style.display === 'block') {
    //   display = 'none';
    // }
    // targetRegisterWorkoutRoutine.style.display = display;

    //새 운동 루틴 버튼 추가시 자동으로 focus
    targetRegisterWorkoutRoutineInput.focus();

    //[]TODO 가로 길이 늘어남
  });

// 새 운동 루틴 input
document
  .getElementById('targetRegisterWorkoutRoutineInput')
  .addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      console.log('### 새 운동 루틴 추가 enter');
      //운동루틴 목록 최상단에 노출
      //TODO data-set list index 추가
      const inputTitle = e.target.value;

      switch (targetRegisterWorkoutRoutine.dataset.mode) {
        case 'new':
          const replaceWorkoutRoutineTemplate = workoutRoutineTemplate
            .replace(/\{\{index\}\}/g, `${workoutRoutineList.length + 1}`)
            .replace('{{title}}', inputTitle);

          const templateDom = new DOMParser().parseFromString(
            replaceWorkoutRoutineTemplate,
            'text/html',
          ).body.firstChild;

          targetWorkoutRoutineListContainer.prepend(templateDom);

          // workoutRoutineList에 push
          workoutRoutineList.push({
            index: `${workoutRoutineList.length + 1}`,
            title: inputTitle,
            regDate: new Date(),
            updateDate: '',
          });
          break;
        case 'edit':
          debugger;
          // update workoutRoutineList
          const updateWorkoutRoutineList = workoutRoutineList.map((v) => {
            if (v.index === targetRegisterWorkoutRoutine.dataset.editIndex) {
              var date = new Date();
              v.title = inputTitle;
              v.regDate = date++;
            }
            return v;
          });
          setWorkoutRoutineList(updateWorkoutRoutineList);

          // title update 방법 1,2

          // title update 방법 1: 업데이트한 dummydata로 운동 루틴 컨테이너 다 지고 다시 그리기
          // update 새 운동 루틴 추가 컨테이너 with workoutRoutineList;
          targetWorkoutRoutineListContainer.innerHTML = '';
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
          //     ].firstElementChild.textContent = inputTitle;
          //   }
          // }
          break;

        // default:
        //   break;
      }

      // debugger;

      // 초기화
      e.target.value = '';

      // [x]TODO 입력부 제거
      // toogle 새 운동 루틴 추가
      toggleRegisterWorkoutRoutineInput();
    }

    //[]TODO ESC 이벤트시 제거
    if (e.which == 27) {
      console.log('### ESC');
      // Close my modal window
    }
  });

// 새 운동 루틴 edit, delete
document
  .getElementById('targetWorkoutRoutineListContainer')
  .addEventListener('click', (e) => {
    console.log('### 운동 루틴 edit, delete');

    switch (e.target.id) {
      case 'edit':
        console.log('### 운동 루틴 edit');
        //[X]TODO 입력부 show
        if (targetRegisterWorkoutRoutine.style.display !== 'block') {
          toggleRegisterWorkoutRoutineInput('edit', e.target.dataset.index);
        }

        //[X]TODO 입력부 input에 클릭한 title 입력, 입력부로 focus 이동
        const clickedRoutine = workoutRoutineList.filter(
          (v) => v.index === e.target.dataset.index,
        )[0];
        targetRegisterWorkoutRoutineInput.value = clickedRoutine.title;
        targetRegisterWorkoutRoutineInput.focus();
        //[X]TODO 입력부에 포커스, enter로 수정모드 완료(운동 루틴 이름 변경)

        //[]TODO ESC누르면 최소(입력부 제거)

        break;
      case 'delete':
        console.log('### 운동 루틴 delete');
        const result = confirm('삭제하시겠습니까?');
        if (result) {
          // dummyData에서 삭제할 것 제외한 데이터 다시 render
          const willNotDeleteOne = workoutRoutineList.filter(
            (v) => v.index !== e.target.dataset.index,
          );
          targetWorkoutRoutineListContainer.innerHTML = '';

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
