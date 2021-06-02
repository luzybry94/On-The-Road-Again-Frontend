import React from "react";
import Moment from "react-moment";

const Attraction = ({ name, pricing, date, img, location }) => {
  return (
    <div className="attraction-card">
      <img src={img} alt="attraction" />
      <h1>{name}</h1>
      <h3>Where: {location}</h3>
      <h4>Pricing: {pricing}</h4>
      <h6>
        When: <Moment date={date} format="LL" />
      </h6>
    </div>
  );
};

export default Attraction;
