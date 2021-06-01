import React, { Component } from "react";
import { login } from "../redux/actions/authActions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Login extends Component {
  state = {
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
    this.props.login(this.state, this.props.history);
  };

  render() {
    return (
      <div>
        <button onClick={() => this.props.history.push("/")}>Back</button>
        <form onSubmit={this.handleSubmit}>
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
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default withRouter(connect(null, { login })(Login));
