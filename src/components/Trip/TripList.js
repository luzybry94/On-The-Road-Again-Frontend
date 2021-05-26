import React, { Component } from "react";
import { connect } from "react-redux";
import { getTrips } from "../../redux/actions/tripsActions";
import Trip from "./Trip";

class TripList extends Component {
  componentDidMount() {
    this.props.getTrips();
  }

  render() {
    return (
      <div className="trip-container">
        {this.props.trips.map((trip) => (
          <Trip trip={trip} id={trip.id} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    trips: state.trips,
  };
};

export default connect(mapStateToProps, { getTrips })(TripList);
