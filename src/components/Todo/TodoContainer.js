import React from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

const TodoContainer = ({ todos }) => {
  return (
    <div>
      <TodoList todos={todos} />
      <TodoForm />
    </div>
  );
};

export default TodoContainer;
