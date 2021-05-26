import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import { Switch, Route } from "react-router-dom";
// import Home from "./components/Home";
import TripList from "./components/Trip/TripList";
import TripForm from "./components/Trip/TripForm";
// import TripShow from "./components/Trip/TripShow";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/trips" component={TripList} />
          <Route exact path="/trips/new" component={TripForm} />
          {/* <Route path="/trip/:id" component={TripShow} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
