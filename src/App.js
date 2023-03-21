import Counter from "./components/Counter";
import "./App.css";
import TodoList from "./components/TodoList";
import { useUserStore } from "./store/useUserStore";
import { useEffect } from "react";

function App() {
  const { fetch, user } = useUserStore();
  console.log("user", user);

  useEffect(() => {
    fetch(1);
  }, [fetch]);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <strong>User Info</strong>
          <br />
          {user.name}
          {user.phone}
        </p>
        <hr width="100%" />
        <Counter />
        <hr width="100%" />
        <TodoList />
      </header>
    </div>
  );
}

export default App;
