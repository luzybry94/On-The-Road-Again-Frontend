import React, { Component } from "react";
import { Link } from "react-router-dom";
import TodoContainer from "../Todo/TodoContainer";

class Trip extends Component {
  state = {
    showTodos: false,
  };

  handleClick = () => {
    this.setState({
      showTodos: !this.state.showTodos,
    });
  };

  render() {
    const { name, dateStart, dateEnd, img, states, id, todos } = this.props;
    return (
      <div className="trip-card">
        <img style={{ display: "block" }} src={img} alt="trip-image" />
        <h3 style={{ display: "inline" }}>{name} </h3>
        <span>
          <Link to={`/trips/${id}`}>&#40;See Attractions&#41;</Link>
        </span>
        <h4>States: {states.map((state) => `${state.name} `)}</h4>
        <h6>
          {dateStart} - {dateEnd}
        </h6>
        {this.state.showTodos ? (
          <>
            <button onClick={this.handleClick}>Close</button>
            <TodoContainer todos={todos} closeTodos={this.handleClick} />
          </>
        ) : (
          <button onClick={this.handleClick}>ToDos</button>
        )}
      </div>
    );
  }
}

export default Trip;
