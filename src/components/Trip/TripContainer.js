import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import TripForm from "./TripForm";
import TripList from "./TripList";
import TripShow from "./TripShow";
import { connect } from "react-redux";
import { getTrips } from "../../redux/actions/tripsActions";

class TripContainer extends Component {
  componentDidMount() {
    this.props.getTrips();
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/trips/new" component={TripForm} />
          <Route
            path="/trips/:id"
            render={({ match }) => {
              let id = parseInt(match.params.id);
              let trip = this.props.trips.find((trip) => trip.id === id);
              return <TripShow trip={trip} tripId={id} />;
            }}
          />
          <Route
            path="/trips"
            render={() => <TripList trips={this.props.trips} />}
          />
          <Route
            path="/"
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
  };
};

export default connect(mapStateToProps, { getTrips })(TripContainer);
