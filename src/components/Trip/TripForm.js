import React, { Component } from "react";
import Select from "react-select";
import { connect } from "react-redux";
import { getUsaStates } from "../../redux/actions/usaStatesActions";
import { createTrip } from "../../redux/actions/tripsActions";
class TripForm extends Component {
  state = {
    name: "",
    startDate: "",
    endDate: "",
    img: "",
    stateIds: [],
  };

  componentDidMount() {
    this.props.getUsaStates();
  }

  renderOptions = () => {
    return this.props.usaStates.map((state) => ({
      value: state.id,
      label: state.name,
    }));
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleStateSelection = (e) => {
    this.setState({
      stateIds: e,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let selectedStates = this.state.stateIds.map((obj) => obj.value);
    this.props.createTrip(
      { ...this.state, stateIds: selectedStates },
      this.props.history
    );
  };

  render() {
    return (
      <div className="trip-form new-trip">
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <label htmlFor="name">Trip Name</label>
            <input
              id="name"
              required
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <label htmlFor="startDate">Leaving</label>
            <input
              id="startDate"
              required
              type="date"
              name="startDate"
              value={this.state.startDate}
              onChange={this.handleChange}
            />
            <label htmlFor="endDate">Coming Back</label>
            <input
              id="endDate"
              required
              type="date"
              name="endDate"
              value={this.state.endDate}
              onChange={this.handleChange}
            />
            <label htmlFor="img">Image URL</label>
            <input
              id="img"
              required
              type="text"
              name="img"
              value={this.state.img}
              onChange={this.handleChange}
            />
            <label htmlFor="states">States</label>
            <Select
              id="states"
              value={this.state.stateIds}
              isMulti
              options={this.renderOptions()}
              onChange={this.handleStateSelection}
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

const mapStateToProps = (state) => {
  return {
    usaStates: state.usaStates,
  };
};

export default connect(mapStateToProps, { getUsaStates, createTrip })(TripForm);
