import { useCounterStore } from "../store";

export default function Counter() {
  const { count, increment } = useCounterStore();

  return (
    <div className="counter">
      <p>{count}</p>
      <button onClick={increment}> + 1 </button>
    </div>
  );
}
