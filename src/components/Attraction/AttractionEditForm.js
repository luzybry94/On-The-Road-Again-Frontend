import React, { Component } from "react";
import { connect } from "react-redux";
import {
  updateAttraction,
  deleteAttraction,
} from "../../redux/actions/attractionsActions";

class AttractionEditForm extends Component {
  state = {
    name: this.props.attraction.name,
    img: this.props.attraction.img,
    location: this.props.attraction.location,
    pricing: this.props.attraction.pricing,
    date: this.props.attraction.date,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.updateAttraction(
      this.state,
      this.props.attraction.id,
      this.props.attraction.tripId,
      this.props.toggleEditMode
    );
  };

  render() {
    console.log(this.props);
    const { img, name, location, date, pricing } = this.state;
    const { id, tripId } = this.props.attraction;
    const { deleteAttraction } = this.props;
    return (
      <div className="attraction-edit-card">
        <img src={img} alt="attraction" />

        <form className="attraction-form" onSubmit={this.handleSubmit}>
          <button
            type="button"
            style={{ float: "right" }}
            onClick={this.props.toggleEditMode}
          >
            Close
          </button>
          <br />
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
          <label htmlFor="location">Where</label>
          <input
            id="location"
            name="location"
            type="text"
            value={location}
            onChange={this.handleChange}
          />
          <label htmlFor="pricing">Pricing</label>
          <select
            id="pricing"
            name="pricing"
            value={pricing}
            onChange={this.handleChange}
          >
            <option value="Pricing" defaultValue disabled hidden>
              Select
            </option>
            <option value="Free">Free</option>
            <option value="Cheap">Cheap</option>
            <option value="Moderate">Moderate</option>
            <option value="Expensive">Expensive</option>
          </select>
          <label htmlFor="date">When</label>
          <input
            id="date"
            type="date"
            name="date"
            value={date}
            onChange={this.handleChange}
          />
          <label htmlFor="image">Image URL</label>
          <input
            id="image"
            type="text"
            name="img"
            value={img}
            onChange={this.handleChange}
          />
          <input type="submit" value="Save" />
          <button
            className="delete-btn"
            type="button"
            onClick={() => deleteAttraction(id, tripId)}
          >
            Delete
          </button>
        </form>
      </div>
    );
  }
}

export default connect(null, { updateAttraction, deleteAttraction })(
  AttractionEditForm
);
