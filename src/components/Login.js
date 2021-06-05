import React, { Component } from "react";
import { login } from "../redux/actions/authActions";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

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
      <div className="homepage">
        <img
          className="header-logo"
          src="https://res.cloudinary.com/dlhbuxc82/image/upload/v1622787954/On_The_Road_Again_3_lyji1j.png"
          alt="logo"
        />
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            required
            placeholder="Username"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <br></br>
          <input
            type="password"
            required
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <br></br>
          <input type="submit" value="Login" />
          <div className="footer">
            Need an account?{" "}
            <Link style={{ color: "blue" }} to="/signup">
              Signup Here
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(connect(null, { login })(Login));
