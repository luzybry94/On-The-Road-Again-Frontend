import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Select from "react-select";
import { connect } from "react-redux";
import { getUsaStates } from "../../redux/actions/usaStatesActions";
import { updateTrip, getTripData } from "../../redux/actions/tripsActions";

class TripEditForm extends Component {
  state = {
    form: {
      startDate: "",
      endDate: "",
      img: "",
      stateIds: [],
    },
    loading: true,
  };

  componentDidMount() {
    this.props.getUsaStates();
    this.props.getTripData(this.props.tripId, this.fillForm);
  }

  fillForm = (tripData) => {
    this.setState({
      form: {
        name: tripData.name,
        startDate: tripData.startDate,
        endDate: tripData.endDate,
        img: tripData.img,
        stateIds: tripData.states.map((state) => ({
          value: state.id,
          label: state.name,
        })),
      },
      loading: false,
    });
  };

  renderOptions = () => {
    return this.props.usaStates.map((state) => ({
      value: state.id,
      label: state.name,
    }));
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleStateSelection = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        stateIds: e,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let selectedStates = this.state.form.stateIds.map((obj) => obj.value);
    this.props.updateTrip(
      { ...this.state.form, stateIds: selectedStates },
      this.props.tripId,
      this.props.history
    );
  };

  render() {
    if (this.state.loading) return <h1>Loading..</h1>;
    const { name, startDate, endDate, img, stateIds } = this.state.form;
    return (
      <div className="trip-form">
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Edit Road Trip</legend>
            <label htmlFor="name">Trip Name</label>
            <input
              id="name"
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
            <label htmlFor="startDate">Leaving</label>
            <input
              id="startDate"
              type="date"
              name="startDate"
              value={startDate}
              onChange={this.handleChange}
            />
            <label htmlFor="endDate">Coming Back</label>
            <input
              id="endDate"
              type="date"
              name="endDate"
              value={endDate}
              onChange={this.handleChange}
            />
            <label htmlFor="img">Image URL</label>
            <input
              id="img"
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
            <input type="submit" value="Update" />
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

export default withRouter(
  connect(mapStateToProps, { getUsaStates, getTripData, updateTrip })(
    TripEditForm
  )
);
