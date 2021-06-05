import React, { Component } from "react";
import Select from "react-select";
import { connect } from "react-redux";
import { getUsaStates } from "../../redux/actions/usaStatesActions";
import { updateTrip, deleteTrip } from "../../redux/actions/tripsActions";

class TripEditForm extends Component {
  state = {
    name: this.props.trip.name,
    startDate: this.props.trip.startDate,
    endDate: this.props.trip.endDate,
    img: this.props.trip.img,
    stateIds: this.props.trip.states.map((state) => ({
      value: state.id,
      label: state.name,
    })),
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
    this.props.updateTrip(
      { ...this.state, stateIds: selectedStates },
      this.props.trip.id,
      this.props.toggleEditMode
    );
  };

  render() {
    const { name, startDate, endDate, img, stateIds } = this.state;
    const { toggleEditMode, deleteTrip } = this.props;
    const { id } = this.props.trip;
    return (
      <div className="trip-edit-card">
        <img src={img} alt="trip" />
        <form className="trip-form" onSubmit={this.handleSubmit}>
          <button
            type="button"
            style={{ float: "right" }}
            onClick={toggleEditMode}
          >
            Close
          </button>
          <label htmlFor="name">Trip Name</label>
          <input
            id="name"
            required
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
          <label htmlFor="startDate">Leaving</label>
          <input
            id="startDate"
            required
            type="date"
            name="startDate"
            value={startDate}
            onChange={this.handleChange}
          />
          <label htmlFor="endDate">Coming Back</label>
          <input
            id="endDate"
            required
            type="date"
            name="endDate"
            value={endDate}
            onChange={this.handleChange}
          />
          <label htmlFor="img">Image URL</label>
          <input
            id="img"
            required
            type="text"
            name="img"
            value={img}
            onChange={this.handleChange}
          />
          <label htmlFor="states">States</label>
          <Select
            id="states"
            value={stateIds}
            isMulti
            options={this.renderOptions()}
            onChange={this.handleStateSelection}
          />
          <br></br>
          <br></br>
          <input type="submit" value="Save" />
          <button
            className="delete-btn"
            type="button"
            onClick={() => deleteTrip(id)}
          >
            Delete
          </button>
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

export default connect(mapStateToProps, {
  getUsaStates,
  updateTrip,
  deleteTrip,
})(TripEditForm);
