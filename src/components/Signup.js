import React, { Component } from "react";
import { signup } from "../redux/actions/authActions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Signup extends Component {
  state = {
    name: "",
    email: "",
    username: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signup(this.state, this.props.history);
  };

  render() {
    return (
      <div>
        <button onClick={() => this.props.history.push("/")}>Back</button>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <br></br>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <br></br>
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <br></br>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <br></br>
          <input type="submit" value="Signup" />
        </form>
      </div>
    );
  }
}

export default withRouter(connect(null, { signup })(Signup));
