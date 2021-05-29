import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import TripContainer from "./containers/TripContainer";
import { connect } from "react-redux";
import { autoLogin } from "./redux/actions/userActions";

class App extends React.Component {
  componentDidMount() {
    localStorage.token && this.props.autoLogin();
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/trips" component={TripContainer} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default connect(null, { autoLogin })(App);
