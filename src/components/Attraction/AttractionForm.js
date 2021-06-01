import React, { Component } from "react";
import { connect } from "react-redux";
import { createAttraction } from "../../redux/actions/attractionsActions";

class AttractionForm extends Component {
  state = {
    name: "",
    pricing: "",
    date: "",
    img: "",
    location: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createAttraction(
      {
        ...this.state,
      },
      this.props.tripId
    );
  };

  render() {
    return (
      <div className="attraction-form">
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <button onClick={this.props.clickHandler}>Close</button>
            <label htmlFor="name">Attraction Name</label>
            <input
              id="name"
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <label htmlFor="date">When</label>
            <input
              id="date"
              type="date"
              name="date"
              value={this.state.date}
              onChange={this.handleChange}
            />
            <label htmlFor="pricing">Pricing</label>
            <select
              name="pricing"
              id="pricing"
              value={this.state.pricing}
              onChange={this.handleChange}
            >
              <option value="" defaultValue disabled hidden>
                Select
              </option>
              <option value="Free">Free</option>
              <option value="Cheap">Cheap</option>
              <option value="Moderate">Moderate</option>
              <option value="Expensive">Expensive</option>
            </select>
            <label htmlFor="img">Image URL</label>
            <input
              id="img"
              type="text"
              name="img"
              value={this.state.img}
              onChange={this.handleChange}
            />
            <label htmlFor="location">Where</label>
            <input
              id="location"
              name="location"
              type="text"
              value={this.state.location}
              onChange={this.handleChange}
            />
            <br></br>
            <br></br>
            <input type="submit" value="Lets Go!" />
          </fieldset>
        </form>
      </div>
    );
  }
}

export default connect(null, { createAttraction })(AttractionForm);
