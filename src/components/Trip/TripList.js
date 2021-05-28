import React, { Component } from "react";
import Trip from "./Trip";
import { Redirect } from "react-router-dom";

class TripList extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="trip-container">
        {this.props.user.id ? (
          this.props.trips.length > 0 ? (
            this.props.trips.map((trip) => <Trip key={trip.id} trip={trip} />)
          ) : (
            <h3>Loading...</h3>
          )
        ) : (
          <Redirect to="/" />
        )}
      </div>
    );
  }
}

export default TripList;
