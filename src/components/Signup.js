import React, { Component } from "react";
import { signup } from "../redux/actions/authActions";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

class Signup extends Component {
  state = {
    name: "",
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
            placeholder="Name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <br></br>
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
          <input type="submit" value="Signup" className="login-btn" />
          <div className="footer">
            Already a member?{" "}
            <Link style={{ color: "blue" }} to="/">
              Login
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(connect(null, { signup })(Signup));
