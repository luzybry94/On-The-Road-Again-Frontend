import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getAttractions,
  unsetAttractions,
} from "../../redux/actions/attractionsActions";
import AttractionList from "../Attraction/AttractionList";

class TripShow extends Component {
  componentDidMount() {
    this.props.getAttractions(this.props.tripId);
  }

  componentWillUnmount() {
    this.props.unsetAttractions();
  }

  render() {
    const { attractions, tripId } = this.props;
    return (
      <div>
        {attractions.length > 0 ? (
          <AttractionList attractions={attractions} tripId={tripId} />
        ) : (
          <h1 style={{ textAlign: "center" }}>Loading...</h1>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    attractions: state.attractions,
  };
};

export default connect(mapStateToProps, { getAttractions, unsetAttractions })(
  TripShow
);
