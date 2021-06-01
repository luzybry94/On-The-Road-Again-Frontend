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
    showAttractionForm: false,
  };

  componentDidMount() {
    this.props.getAttractions(this.props.tripId);
  }

  componentWillUnmount() {
    this.props.unsetAttractions();
  }

  handleClick = () => {
    this.setState({
      showAttractionForm: !this.state.showAttractionForm,
    });
  };

  render() {
    return (
      <div>
        {this.props.trip ? (
          <>
            <AttractionList attractions={this.props.attractions} />
            {this.state.showAttractionForm ? (
              <AttractionForm
                clickHandler={this.handleClick}
                tripId={this.props.tripId}
              />
            ) : (
              <button onClick={this.handleClick}>Add Attraction</button>
            )}
          </>
        ) : (
          <h1>Loading...</h1>
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
