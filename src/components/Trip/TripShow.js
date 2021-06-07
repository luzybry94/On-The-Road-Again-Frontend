import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getAttractions,
  unsetAttractions,
} from "../../redux/actions/attractionsActions";
import AttractionList from "../Attraction/AttractionList";
import AttractionForm from "../Attraction/AttractionForm";

class TripShow extends Component {
  state = {
    loading: true,
    showAttractionForm: false,
  };
  componentDidMount() {
    this.props.getAttractions(this.props.tripId, this.toggleLoading);
  }

  toggleLoading = () => {
    this.setState({
      loading: !this.state.loading,
    });
  };

  toggleShowAttrForm = () => {
    this.setState({
      showAttractionForm: !this.state.showAttractionForm,
    });
  };

  componentWillUnmount() {
    this.props.unsetAttractions();
  }

  render() {
    if (this.state.loading)
      return <h1 style={{ textAlign: "center" }}>Loading...</h1>;
    const { attractions, tripId } = this.props;
    return (
      <div>
        {attractions.length > 0 ? (
          <AttractionList attractions={attractions} tripId={tripId} />
        ) : (
          <>
            <h1 style={{ textAlign: "center" }}>No Attractions Planned</h1>
            {this.state.showAttractionForm ? (
              <AttractionForm
                toggleShowAttrForm={this.toggleShowAttrForm}
                tripId={this.props.tripId}
              />
            ) : (
              <button
                className="add-attraction-card"
                onClick={this.toggleShowAttrForm}
              >
                Add Attraction
              </button>
            )}
          </>
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
