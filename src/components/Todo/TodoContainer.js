import React from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

const TodoContainer = ({ todos, tripId }) => {
  return (
    <div>
      <TodoList todos={todos} />
      <TodoForm tripId={tripId} />
    </div>
  );
};

export default TodoContainer;
