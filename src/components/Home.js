import React from "react";
import Login from "./Login";
import Signup from "./Signup";

const Home = () => {
  return (
    <div className="homepage">
      <h1>Welcome to On The Road Again!</h1>
      <Login />
      <span>OR</span>
      {/* <Signup /> */}
    </div>
  );
};

export default Home;
