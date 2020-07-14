import {
	workoutRoutineList,
	setWorkoutRoutineList,
	workoutList,
	setWorkoutList,
	setWorkoutPlayData
} from './dummyData';

import { renderWorkoutList, clearWorkoutDom } from './registWorkoutProcess';

import {
	getWorkoutRountineListDom,
	appendWorkoutRountine,
	toggleRegisterWorkoutRoutineInput
} from './registWorkoutRoutineProcess.js';

import { getWorkoutRoutineList, clearHighlight, useState } from './utils';
// import {
// 	targetWorkoutListContainerDom,
// 	targetWorkoutListNestedContentsContainerDom,
// 	targetRegisterWorkoutRoutineDom,
// 	targetRegisterWorkoutRoutineInputDom,
// 	targetWorkoutRoutineListContainerDom
// } from './domList';

import { workoutRoutineTemplate } from './template';

console.log('### workoutRoutineEvent.js');
export function registerWorkoutRoutine(e) {
	console.log('### 새 운동 루틴 버튼');
	// 새 운동 루틴 inputbox
	const targetRegisterWorkoutRoutineInputDom = document.getElementById('targetRegisterWorkoutRoutineInput');

	// toggle 새 운동 루틴 추가 input box
	let display = 'block';
	toggleRegisterWorkoutRoutineInput('new');

	//새 운동 루틴 버튼 추가시 자동으로 focus
	targetRegisterWorkoutRoutineInputDom.focus();

	//[]TODO 가로 길이 늘어남
}

export function registerWorkoutRoutineInputDom(e) {
	if (e.key === 'Enter') {
		console.log('### 새 운동 루틴 추가 enter');
		//운동루틴 목록 최상단에 노출
		const inputTitle = e.target.value;
		// 새 운동 루틴 버튼
		const targetRegisterWorkoutRoutineDom = document.getElementById('targetRegisterWorkoutRoutine');
		// 새 운동 루틴 추가 컨테이너(edit, delete 컨테이너)
		const targetWorkoutRoutineListContainerDom = document.getElementById('targetWorkoutRoutineListContainer');
		const date = new Date();
		switch (targetRegisterWorkoutRoutineDom.dataset.mode) {
			case 'new':
				const replaceWorkoutRoutineTemplate = workoutRoutineTemplate
					.replace(/\{\{index\}\}/g, `${workoutRoutineList.length + 1}`)
					.replace('{{title}}', inputTitle);

				const templateDom = new DOMParser().parseFromString(replaceWorkoutRoutineTemplate, 'text/html').body
					.firstChild;

				targetWorkoutRoutineListContainerDom.prepend(templateDom);

				// workoutRoutineList에 push
				workoutRoutineList.push({
					index: `${workoutRoutineList.length + 1}`,
					title: inputTitle,
					regDate: +date,
					updateDate: +date
				});
				setWorkoutRoutineList(workoutRoutineList);
				break;
			case 'edit':
				// update workoutRoutineList
				const updateWorkoutRoutineList = workoutRoutineList.map((v) => {
					if (v.index === targetRegisterWorkoutRoutineDom.dataset.editIndex) {
						v.title = inputTitle;
						v.updateDate = +date;
					}
					return v;
				});
				setWorkoutRoutineList(updateWorkoutRoutineList);

				// title update 방법: 업데이트한 dummydata로 운동 루틴 컨테이너 다 지우고 다시 그리기
				// update 새 운동 루틴 추가 컨테이너 with workoutRoutineList;
				targetWorkoutRoutineListContainerDom.innerHTML = '';
				const orderWorkoutRoutineList = workoutRoutineList.sort((a, b) => {
					return b.updateDate - a.updateDate;
				});
				const templateDomList = getWorkoutRountineListDom(orderWorkoutRoutineList);
				appendWorkoutRountine(templateDomList);

				break;
		}

		// [x]TODO 입력부 제거
		e.target.value = '';
		// toogle 새 운동 루틴 추가
		toggleRegisterWorkoutRoutineInput();
	}
}

export function workoutRoutineType(e) {
	console.log('### 새 운동 루틴 1.선택');
	const workoutRoutineIndex = e.target.dataset.index;
	const targetWorkoutListNestedContentsContainerDom = document.getElementById(
		'targetWorkoutListNestedContentsContainer'
	);
	const targetWorkoutListContainerDom = document.getElementById('targetWorkoutListContainer');

	// render workout list
	renderWorkoutList(workoutRoutineIndex);

	// setting workout index 운동 등록 컨테이너
	targetWorkoutListNestedContentsContainerDom.dataset.workoutRoutineIndex = workoutRoutineIndex;

	//[x]highlight
	clearHighlight();
	e.target.parentElement.className += ' highlight';

	// 운동 리스트 컨테이너에 routine index data-set에 설정
	targetWorkoutListContainerDom.dataset.routineIndex = e.target.dataset.index;
}

export function workoutRoutineEdit(e) {
	console.log('### 새 운동 루틴 2.edit');
	// 새 운동 루틴 버튼
	const targetRegisterWorkoutRoutineDom = document.getElementById('targetRegisterWorkoutRoutine');
	// 새 운동 루틴 inputbox
	const targetRegisterWorkoutRoutineInputDom = document.getElementById('targetRegisterWorkoutRoutineInput');

	if (targetRegisterWorkoutRoutineDom.style.display !== 'block') {
		toggleRegisterWorkoutRoutineInput('edit', e.target.dataset.index);
	}

	//[X]TODO 입력부 input에 클릭한 title 입력, 입력부로 focus 이동
	const clickedRoutine = workoutRoutineList.filter((v) => v.index === e.target.dataset.index)[0];
	targetRegisterWorkoutRoutineInputDom.value = clickedRoutine.title;
	targetRegisterWorkoutRoutineInputDom.focus();
}

export function workoutRoutineDelete(e) {
	console.log('### 새 운동 루틴 3.delete');
	// 새 운동 루틴 추가 컨테이너(edit, delete 컨테이너)
	const targetWorkoutRoutineListContainerDom = document.getElementById('targetWorkoutRoutineListContainer');
	const result = confirm('삭제하시겠습니까?');

	debugger;
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
}
