import React from "react";
import { Link } from "react-router-dom";

const Trip = ({ name, dateStart, dateEnd, img, states, id }) => {
  return (
    <div className="trip-card">
      <img style={{ display: "block" }} src={img} alt="trip-image" />
      <h3 style={{ display: "inline" }}>{name} </h3>
      <span>
        <Link to={`/trips/${id}`}>&#40;See Attractions&#41;</Link>
      </span>
      <h4>States: {states.map((state) => `${state.name} `)}</h4>
      <h6>
        {dateStart} - {dateEnd}
      </h6>
    </div>
  );
};

export default Trip;
