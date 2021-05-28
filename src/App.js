import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import TripList from "./components/Trip/TripList";
import TripForm from "./components/Trip/TripForm";
// import TripShow from "./components/Trip/TripShow";
import { connect } from "react-redux";
import { autoLogin } from "./redux/actions/userActions";
import Login from "./components/Login";

class App extends React.Component {
  componentDidMount() {
    localStorage.token && this.props.autoLogin();
  }

  render() {
    return (
      <div className="App">
        {this.props.user.id ? (
          <>
            <NavBar />
            <Switch>
              <Route
                exact
                path="/trips"
                render={() => (
                  <TripList trips={this.props.trips} user={this.props.user} />
                )}
              />
              <Route exact path="/trips/new" component={TripForm} />
              {/* <Route path="/trip/:id" component={TripShow} /> */}
            </Switch>
          </>
        ) : (
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Home} />
          </Switch>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.currentUser,
    trips: state.trips,
  };
};

export default connect(mapStateToProps, { autoLogin })(App);
