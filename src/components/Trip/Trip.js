import React, { Component } from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import TodoContainer from "../Todo/TodoContainer";
import Moment from "react-moment";
import {deleteTrip} from '../../redux/actions/tripsActions'

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
    const { name, startDate, endDate, img, states, id, todos } = this.props;
    return (
      <div className="trip-card">
        <img style={{ display: "block" }} src={img} alt="trip-image" />
        <h3 style={{ display: "inline" }}>{name} </h3>
        <span>
          <Link to={`/trips/${id}`}>&#40;See Attractions&#41;</Link>
        </span>
        <h4>States: {states.map((state) => `${state.name} `)}</h4>
        <h6>
          {<Moment date={startDate} format="LL" />} -
          {<Moment date={endDate} format="LL" />}
        </h6>
        <button onClick={() => this.props.deleteTrip(id)} style={{ float: "right" }}>Delete</button>
        <Link
          to={`/trips/${id}/edit`}
          style={{ float: "right", marginRight: "10px" }}
        >
          Edit
        </Link>

        {this.state.showTodos ? (
          <>
            <button onClick={this.handleClick}>Close</button>
            <TodoContainer
              tripId={id}
              todos={todos}
              closeTodos={this.handleClick}
            />
          </>
        ) : (
          <button onClick={this.handleClick}>ToDos</button>
        )}
      </div>
    );
  }
}

export default connect(null, {deleteTrip})(Trip);
