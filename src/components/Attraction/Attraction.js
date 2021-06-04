import React, { Component } from "react";
import Moment from "react-moment";
import AttractionEditForm from "./AttractionEditForm";

class Attraction extends Component {
  state = {
    editMode: false,
  };

  toggleEditMode = () => {
    this.setState({
      editMode: !this.state.editMode,
    });
  };

  renderPricing = (pricing) => {
    switch (pricing) {
      case "Free":
        return "Free";
      case "Cheap":
        return "$";
      case "Moderate":
        return "$$";
      case "Expensive":
        return "$$$";
      default:
        return "Unknown";
    }
  };

  render() {
    if (this.state.editMode)
      return (
        <AttractionEditForm
          attraction={this.props}
          toggleEditMode={this.toggleEditMode}
        />
      );
    const { name, img, location, pricing, date } = this.props;
    return (
      <div className="attraction-card">
        <img src={img} alt="attraction" />
        <h1>{name}</h1>

        <h3>{location}</h3>
        <h4>Pricing: {this.renderPricing(pricing)}</h4>
        <h5>
          <Moment date={date} format="LL" />
        </h5>
        <button onClick={this.toggleEditMode}>Edit</button>
      </div>
    );
  }
}

export default Attraction;
