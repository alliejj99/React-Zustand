#### React Zustand Basic-App
  React로 작성한 Zustand 프레임 워크 활용 예제 입니다.

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
