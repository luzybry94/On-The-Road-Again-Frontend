import React, { Component } from "react";
import { FaTrash } from "react-icons/fa";
import { connect } from "react-redux";
import { updateTodo } from "../../redux/actions/todosActions";
import "./style.css";

class Todo extends Component {
  render() {
    const { content, completed, updateTodo, id, tripId } = this.props;
    return (
      <>
        <li
          className={completed ? "checked" : null}
          onClick={() => updateTodo({ completed: !completed }, id, tripId)}
        >
          {content}
          <span className="close">
            <FaTrash />
          </span>
        </li>
      </>
    );
  }
}

export default connect(null, { updateTodo })(Todo);
