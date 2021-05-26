import React from "react";
import { NavLink } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div className="nav-bar">
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
        <NavLink className="nav-link" to="/trips">
          Trips
        </NavLink>
        <NavLink className="nav-link" to="/login">
          Login
        </NavLink>
      </div>
    );
  }
}

export default Navbar;
