#### React Zustand Basic-App
  React로 작성한 Zustand 프레임 워크 활용 예제 입니다.  
  [demo]https://react-zustand.vercel.app/
---
- **Store 생성하기**  
  1. 먼저 store를 생성해서 그 안에 원하는 값과 그 값을 업데이트 해주는 함수를 넣어줍니다,
  2. store는 Hooks로 되어 있습니다.
  3. 이 store에는 객체, 함수 등 무엇이든 넣을 수 있습니다.
  4. store를 생성할 때는 create 메서드를 사용하여 선언합니다.
  5. set 함수는 상태를 변경합니다.  
  ```jsx
  // store.js
  import { create } from "zustand";

  export const useCounterStore = create((set) => ({
    count: 1,
    inc: () => set((state) => ({ count: state.count + 1 })),
  }));
  ``` 
--- 
- **기능**
  - Count: 증가하기 / 리셋하기 / 셋팅값 부르기
  - Todo: 일정추가하기 / 완료 체크하기 / 삭제하기
  - devTools 사용하기
  - localStorage, sessionStorage에 데이터 저장하기 / 데이터 지우기
  - 외부 API 불러와 출력하기 

---
- **Error Note**
  발생한 오류:  
  ```javascript
  uncaught TypeError: Cannot use 'in' operator to search for 'getStorage' in undefined
  ```
  원인: persist 사용할 때 key를 명시 하지 않아 생긴 오류
  해결: key 설정해주기
  ```javascript
  import { create } from "zustand";
  import { persist } from "zustand/middleware";

  export const useCounterStore = create(
    persist(
      (set) => ({
        count: 1,
        increment: () => set((state) => ({ count: state.count + 1 })),
        reset: () => set({ count: 1 }),
        setNeumber: (number) => set({ count: number }),
      }),
      { name: "counter" } // -> key 명시하기
    )
  );
  ```
