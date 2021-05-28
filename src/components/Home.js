import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="homepage">
      <h1>Welcome to On The Road Again!</h1>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Home;
