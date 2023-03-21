import { useCallback } from "react";
import { useCounterStore } from "../store/useCounterStore";

export default function Counter() {
  const { count, increment, reset, setNeumber } = useCounterStore();

  const clear = useCallback(() => {
    useCounterStore.persist.clearStorage();
  }, []);

  return (
    <div className="counter">
      <p>{count}</p>
      <button onClick={increment}> + 1 </button>
      <button onClick={reset}> Reset </button>
      <button onClick={() => setNeumber(3)}> Setting Number = 3</button>
      <button onClick={clear}>Clear</button>
    </div>
  );
}
