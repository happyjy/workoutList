# 실행방법

```
npm i 
npm 
```

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

- div#app division에 이벤틀 리스터를 대표로 걸어 target id로 event를 구분해서 받고 있다.

3. 이벤트처리

- init에서 받은 이벤트를 아래 파일에서 처리하고 있다.

  ```
    * 운동 등록 화면[운동 루틴 목록] : workoutRoutinEvent.js -> registWorkoutRoutineProcess.js
    * 운동 등록 화면[운동 목록] : workoutEvent.js -> registWorkoutProcess.js
    * 운동 실행 화면 : workoutPlayEvent.js
  ```

- ***Process.js 파일은 workoutRoutinEvent.js, workoutEvent.js 파일에서 추가적으로 처리되는 로직이 있다.

4. template.js

- renering 할때 필요한 template이 있다.
