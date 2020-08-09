
1. 사용된 파일 목록 
  ```
    src/app.js
    src/js/initTemplate.js
    src/js/init.js
    src/js/utils.js
    src/js/dummyData.js

    src/js/registWorkoutRoutineProcess.js
    src/js/registWorkoutProcess.js
    src/js/workoutPlayEvent.js
    src/js/workoutRoutinEvent.js
    src/js/workoutEvent.js
    src/js/template

    src/workoutRegist.css
    src/workoutPlay.css
  ```

2. init.js
  - div#app division에 이벤틀 리스터를 대표로 걸어 target id로 event를 구분해서 받고 있습니다.

3. 이벤트처리
  - init에서 받은 이벤트를 아래 파일에서 처리하고 있습니다.
  ```
    * 운동 등록 화면[운동 루틴 목록] : workoutRoutinEvent.js -> registWorkoutRoutineProcess.js
    * 운동 등록 화면[운동 목록] : workoutEvent.js -> registWorkoutProcess.js
    * 운동 실행 화면 : workoutPlayEvent.js
  ```
  - ***Process.js 파일은 workoutRoutinEvent.js, workoutEvent.js 파일에서 추가적으로 처리되는 로직이 있습니다.

4. template.js
  - renering 할때 필요한 template이 있습니다.



# review

1. 돔 기반으로 설계했지만 기능 구현을 충실히 한 부분이 좋았습니다. 

2. **특별히 장점이 없는 이벤트 델리게이션**을 사용한 부분이 아쉽습니다.
이로 인해 **이벤트 주체와 핸들러의 응집도가 떨어졌으며 이해하기 어려웠**습니다.
3. **데이터와 뷰의 개념적인 구분이 없는** **DOM에 의존적인 구조도** 아쉽습니다.
  ㄴ Vanilla js로 어떻게 하면 v, vm을 나눌 수 있었을까?(dom의 의존성을 낮출 수 있었을까?)

4. 효율적인 구조나 **추상화**를 통해 **중복을 제거**하거나 코드를 단순화하지 못했습니다.
  ㄴ

5. 불필요하게 **긴 네이밍**을 사용한 부분도 아쉽습니다.
  선언위치를 통해 충분히 유추할 수 있는 반복적인 프리픽스나 서픽스를 사용

6. **조건문을 복잡하게** 사용하여 아쉬웠습니다.
  ㄴ #1. workoutPlayEvent.js > headerIntervalReturn, toolbarIntervalReturn 때문이지 않았을까? 
  


# [!]

* new DOMParser().parseFromString()
* function initWorkoutRoutine > 시간 정렬할때 date 객체 뒤에 증감 연한을하면 시간 객체가 정수로 표현이 되어 비교 연산이 가능해져 sort 하수로 적용할 수 있다.
* 