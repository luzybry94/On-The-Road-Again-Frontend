import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../../redux/actions/todosActions";

class TodoForm extends Component {
  state = {
    content: "",
    completed: false,
  };

  handleChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state, this.props.tripId);
    this.setState({
      content: "",
      completed: false,
    });
  };

  render() {
    return (
      <div className="todo-form">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            required
            placeholder="ex) remember to bring Kevin"
            value={this.state.content}
            onChange={this.handleChange}
          />
          <input type="submit" id="addBtn" value="Add" />
        </form>
      </div>
    );
  }
}

export default connect(null, { addTodo })(TodoForm);
