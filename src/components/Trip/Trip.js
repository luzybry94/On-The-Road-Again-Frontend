import React, { Component } from "react";

class Trip extends Component {
  render() {
    const { name, dateStart, dateEnd, img, states } = this.props.trip;
    return (
      <div className="trip-card">
        <img src={img} alt="trip-image" />
        <h3>{name}</h3>
        <h4>States: {states.map((state) => `${state.name} `)}</h4>
        <h6>
          {dateStart} - {dateEnd}
        </h6>
      </div>
    );
  }
}

export default Trip;
