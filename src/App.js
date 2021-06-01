import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
import TripContainer from "./containers/TripContainer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { connect } from "react-redux";
import { autoLogin } from "./redux/actions/authActions";

class App extends React.Component {
  state = {
    loading: true,
  };

  toggleLoading = () => {
    this.setState({ loading: !this.state.loading });
  };

  componentDidMount() {
    if (localStorage.token) {
      this.props.autoLogin(this.toggleLoading);
    } else {
      this.toggleLoading();
    }
  }

  render() {
    if (this.state.loading) return <h1>Loading...</h1>;
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              if (this.props.loggedIn) {
                return <TripContainer />;
              } else {
                return <Home />;
              }
            }}
          />
          <Route
            path="/trips"
            render={(props) => {
              if (this.props.loggedIn) {
                return <TripContainer {...props} />;
              } else {
                return <Redirect to="/" />;
              }
            }}
          />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.auth.loggedIn,
  };
};

export default connect(mapStateToProps, { autoLogin })(App);
