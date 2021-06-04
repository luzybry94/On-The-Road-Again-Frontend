import React, { Component } from "react";
import Attraction from "./Attraction";
import AttractionForm from "./AttractionForm";

class AttractionList extends Component {
  state = {
    showAttractionForm: false,
  };

  toggleShowAttrForm = () => {
    this.setState({
      showAttractionForm: !this.state.showAttractionForm,
    });
  };

  render() {
    return (
      <div className="attraction-container">
        {this.props.attractions.map((attraction) => (
          <Attraction key={attraction.id} {...attraction} />
        ))}
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
      </div>
    );
  }
}

export default AttractionList;
