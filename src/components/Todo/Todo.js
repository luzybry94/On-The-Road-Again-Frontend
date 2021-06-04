import React, { Component } from "react";
import { FaTrash } from "react-icons/fa";
import { connect } from "react-redux";
import { updateTodo, deleteTodo } from "../../redux/actions/todosActions";
import "./style.css";

class Todo extends Component {
  handleClick = (e) => {
    const { deleteTodo, id, tripId } = this.props;
    e.stopPropagation();
    deleteTodo(id, tripId);
  };

  render() {
    const { content, completed, updateTodo, id, tripId } = this.props;
    return (
      <>
        <li
          className={completed ? "checked" : null}
          onClick={() => updateTodo({ completed: !completed }, id, tripId)}
        >
          {content}
          <span onClick={this.handleClick} className="close">
            <FaTrash />
          </span>
        </li>
      </>
    );
  }
}

export default connect(null, { updateTodo, deleteTodo })(Todo);
