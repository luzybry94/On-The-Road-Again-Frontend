import React, { Component } from "react";
import { Link } from "react-router-dom";
import TodoContainer from "../Todo/TodoContainer";
import TripEditForm from "./TripEditForm";
import Moment from "react-moment";

class Trip extends Component {
  state = {
    showTodos: false,
    editMode: false,
  };

  toggleTodos = (e) => {
    e.preventDefault();
    this.setState({
      showTodos: !this.state.showTodos,
    });
  };

  toggleEditMode = (e) => {
    this.setState({
      editMode: !this.state.editMode,
    });
  };

  render() {
    if (this.state.editMode)
      return (
        <TripEditForm trip={this.props} toggleEditMode={this.toggleEditMode} />
      );
    const { name, startDate, endDate, img, states, id, todos } = this.props;
    return (
      <div className="trip-card">
        <img
          style={{ display: "block", marginBottom: "25px" }}
          src={img}
          alt="trip"
        />
        <h3 style={{ display: "inline" }}>{name}</h3>
        <span style={{ marginLeft: "10px" }}>
          <Link to={`/trips/${id}`}>&#40;See Attractions&#41;</Link>
        </span>
        <button onClick={this.toggleEditMode} style={{ float: "right" }}>
          Edit Trip
        </button>
        <p>
          {<Moment date={startDate} format="LL" />} -
          {<Moment date={endDate} format="LL" />}
        </p>

        <p>
          {states.map((state) => (
            <li key={state.id}>{state.name}</li>
          ))}
        </p>

        {this.state.showTodos ? (
          <>
            <button type="button" onClick={this.toggleTodos}>
              Close
            </button>
            <TodoContainer tripId={id} todos={todos} />
          </>
        ) : (
          <button type="button" onClick={this.toggleTodos}>
            ToDos
          </button>
        )}
      </div>
    );
  }
}

export default Trip;
