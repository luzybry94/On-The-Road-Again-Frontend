import React, { Component } from "react";
import Select from "react-select";
import { connect } from 'react-redux'
import { getUsaStates } from '../../redux/actions/usaStatesActions'

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

class TripForm extends Component {
  state = {
    name: "",
    startDate: "",
    endDate: "",
    img: "",
    selectedStates: [],
  };

  componentDidMount() {}

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleStateSelection = (e) => {
    this.setState({
      selectedStates: e,
    });
  };

  render() {
    return (
      <div className="trip-form">
        <form>
          <fieldset>
            <legend>New Road Trip</legend>
            <label for="name">Trip Name</label>
            <input
              id="name"
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <label for="startDate">Leaving</label>
            <input
              id="startDate"
              type="date"
              name="startDate"
              value={this.state.startDate}
              onChange={this.handleChange}
            />
            <label for="endDate">Coming Back</label>
            <input
              id="endDate"
              type="date"
              name="endDate"
              value={this.state.endDate}
              onChange={this.handleChange}
            />
            <label for="img">Image URL</label>
            <input
              id="img"
              type="text"
              name="img"
              value={this.state.img}
              onChange={this.handleChange}
            />
            <label htmlFor="states">States</label>
            <Select
              id="states"
              value={this.state.selectedStates}
              isMulti
              isSearchable
              options={options}
              onChange={this.handleStateSelection}
            />
          </fieldset>
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps, { getUsaStates }(TripForm);
