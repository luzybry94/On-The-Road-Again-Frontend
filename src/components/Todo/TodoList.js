import React from "react";
import Todo from "./Todo";
import "./todo.css";

const TodoList = ({ todos }) => {
  return (
    <div className="todo-list">
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
