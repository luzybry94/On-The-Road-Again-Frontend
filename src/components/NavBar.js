import React from "react";
import { NavLink } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div className="nav-bar">
        <NavLink className="nav-link" to="/trips">
          My Trips
        </NavLink>
        <NavLink className="nav-link" to="/trips/new">
          Plan a New Trip
        </NavLink>
        <NavLink className="nav-link" to="/logout">
          Logout
        </NavLink>
      </div>
    );
  }
}

export default Navbar;
