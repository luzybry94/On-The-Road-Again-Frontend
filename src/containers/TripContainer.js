import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import TripForm from "../components/Trip/TripForm";
import TripList from "../components/Trip/TripList";
import { connect } from "react-redux";
import { getTrips } from "../redux/actions/tripsActions";

class TripContainer extends Component {
  componentDidMount() {
    this.props.getTrips(this.props.user.id);
  }

  render() {
    return (
      <div className="trip-container">
        <Switch>
          <Route path="/trips/new" component={TripForm} />
          <Route
            path="/trips"
            render={() => <TripList trips={this.props.trips} />}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    trips: state.trips,
    user: state.auth.currentUser,
  };
};

export default connect(mapStateToProps, { getTrips })(TripContainer);
