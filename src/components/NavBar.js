import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../redux/actions/authActions";

class Navbar extends React.Component {
  render() {
    return (
      <div className="nav-bar">
        {this.props.loggedIn ? (
          <>
            <NavLink className="nav-link" to="/trips">
              My Trips
            </NavLink>
            <NavLink className="nav-link" to="/trips/new">
              Plan a New Trip
            </NavLink>
            <NavLink
              className="nav-link"
              to="#"
              onClick={() => this.props.logout()}
            >
              Logout
            </NavLink>
          </>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.auth.loggedIn,
  };
};

export default connect(mapStateToProps, { logout })(Navbar);
