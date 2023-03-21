import React, { useCallback, useState } from "react";
import { useTodoStore } from "../store/useTodoStore";

const TodoList = () => {
  const [todoValue, setTodoValue] = useState("");
  const { todos, addTodo, deleteTodo, completeTodo } = useTodoStore();

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      addTodo(todoValue);
      setTodoValue("");
    },
    [addTodo, todoValue]
  );

  return (
    <>
      <h3>Todo App</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="new-todo"
          name="newTodo"
          value={todoValue}
          onChange={(e) => setTodoValue(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              className={`${
                todo.isCompleted ? "todo_list" : "todo_list defult"
              }`}
            >
              {todo.text}
            </span>
            {!todo.isCompleted ? (
              <button onClick={() => completeTodo(todo.id)}>⭕</button>
            ) : null}
            <button onClick={() => deleteTodo(todo.id)}>❌</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
