console.log('### init.js');

const el = document.querySelector('#app');
el.innerHTML = `<div class="workoutRegistContainer">
  <!-- 상단헤더 -->
  <div class="workoutRegistHeader"> 매일 운동 루틴 </div>

  <div class="workoutContainer">
    <!-- 운동루틴목록 컨테이너 -->
    <div class="workoutRoutineContentsContainer">
      <!-- 운동루틴목록 툴바 -->
      <div class="toolbarContainer">
        <div id="registerWorkoutRoutine" class="newWorkOutRoutineBtn">새 운동 루틴 +</div>
      </div>

      <!-- 운동루틴목록 -->
      <div class="workoutRoutineListContentsContainer">
        <div id="targetRegisterWorkoutRoutine" class="registWorkOutRoutineContainer">
          <input id="targetRegisterWorkoutRoutineInput" type="text" />
        </div>
        <!-- # update 되어야 할 부분 -->
        <div id="targetWorkoutRoutineListContainer" class="workoutRoutineListContainer">
        </div>
      </div>

    </div>

    <!-- 운동목록 컨테이너 -->
    <div class="workoutContentsContainer">
      <!-- 운동목록 툴바 -->
      <div class="toolbarContainer">
        <div class="toolbar">
          <div class="toolbarLeft">
            <div id="newWorkoutBtn" class="newWorkoutBtn"> + 운동 추가</div>
            <div id="workoutdeleteBtn" class="workoutdeleteBtn"> 삭제 </div>
          </div>
          <div class="toolbarRight">
            <span id="targetTotalTime" class="totalTime"></span>
          </div>
        </div>
      </div>

      <!-- 운동목록 리스트 컨테이너 -->
      <div class="workoutListContentsContainer">
        <div id="targetWorkoutListNestedContentsContainer" class="workoutListNestedContentsContainer">
          <div class="workoutListContainer">
            <!-- # update 되어야 할 부분 -->
            <!-- workout 목록 리스트-->
            <div id="targetWorkoutListContainer" class="workoutListNestedContainer">
            </div>
            <!-- 운동추가 -->
            <div id="registWorkOutContainer" class="registWorkOutContainer">
              <form action="/" method="">
                <div class="registWorkOutHeader">
                  <div class="registWorkOutHeaderLeft">
                    <span>이름</span>
                    <input id='workoutTitle' class="workoutInput w110" type="text" required />
                  </div>

                  <div class="registWorkOutHeaderRight">
                    <input id="workoutSecond" class="workoutInput" type="number" />
                    <span>초</span>
                    <input id="workoutTimes" class="workoutInput" type="number" />
                    <span>세트</span>
                  </div>
                </div>
              </form>
              <div class="registWorkOutFooter">
                <div id='saveBtnRegistWorkOutBtn' class="saveBtnRegistWorkOutBtn">저장</div>
                <div id='cancelBtnRegistWorkOutBtn' class="cancelBtnRegistWorkOutBtn">취소</div>
              </div>
            </div>
          </div>
        </div>
        <div id="startWorkOutBtn" class="startWorkOutBtn">운동 시작</div>
      </div>

    </div>
  </div>
</div>
</div>`;

export function showWorkoutPlay({
  workoutPlayRoutine = {},
  workoutPlayList = [],
}) {
  workoutPlayList = workoutPlayList.sort((a, b) => parseInt(b) - parseInt(a));
  //운동실행화면[상단헤더] 요구사항
  //1. 현재 진행 중인 운동 상태 정보가 다음과 같이 표시 된다.
  //  * (운동 루틴이름) : (현재운동이름) (진행시간) / (한 세트 시간) (n세트 진행중)
  //  * 운동이 진행될 수록 '진행시간이 실시간으로 늘어난다.
  //  * 운동 한 세트가 완료되면 '세트 진행 중'의 카운트가 실시간으로 즌ㅇ가

  //2. 운동 루틴이 완료되면 완료 정보가 다음과같이 표시
  //  * (현재 운동 루틴 이름) 완료
  // 운동 루틴이름
  const routineTitle = workoutPlayRoutine.title;
  // 현재운동이름
  let currentWorkoutTitle = workoutPlayList[0].title;
  // 진행시간
  let currentWorkoutTime = 0;
  // 한 세트 시간
  let currentWorkoutSecond = workoutPlayList[0].second;
  // n세트 진행중
  let currentTimes = 1;
  let second = 0;

  let headerTitle = `${routineTitle} : ${currentWorkoutTitle}  ${currentWorkoutTime} /${currentWorkoutSecond} ${currentTimes}세트 진행 중`;

  return `

  <div class="workoutRegistContainer">
    <!-- 운동실행화면 상단헤더 -->
    <div id="targetWorkoutPlayHeader" class="workoutPlayHeader"></div>
    
    <!-- 운동실행화면 툴바 -->
    <div id="workoutPlayToolbar" class="workoutPlayToolbar"></div>

    <!-- 운동실행화면 컨테이너 -->
    <div class="workoutPlayContainer">
      <div class="workoutPlayContentsContainer">

        <!-- 운동실행화면 운동목록 리스트 컨테이너 -->
        <div class="workoutPlayListContentsContainer">
          <div id="targetWorkoutListNestedContentsContainer" class="workoutPlayListNestedContentsContainer">
            <!-- 운동실행화면 workout 목록 리스트-->
            <div id="targetWorkoutListContainer" class="workoutPlayListNestedContainer" data-routine-index="17">
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 운동실행화면 Footer -->
    <div class="workoutPlayFooter">
      <div class="workoutPlayFooterPause">일시정지</div>
      <div class="workoutPlayFooterRestart">재시작</div>
      <div class="workoutPlayFooterStop">운동멈추기</div>
      <div class="workoutPlayFooterDone">완료</div>
    </div>
  </div>
  `;
}
