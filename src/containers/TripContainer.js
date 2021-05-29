import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";
import TripForm from "../components/Trip/TripForm";
import TripList from "../components/Trip/TripList";
import Home from "../components/Home";
import { connect } from "react-redux";

class TripContainer extends Component {
  render() {
    return (
      <div className="trip-container">
        {this.props.user.id ? (
          <>
            <Route path="/trips/new" component={TripForm} />
            <Route
              path="/trips"
              render={() => <TripList trips={this.props.trips} />}
            />
          </>
        ) : (
          <Redirect to="/home" />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    trips: state.trips,
    user: state.currentUser,
  };
};

export default connect(mapStateToProps)(TripContainer);
