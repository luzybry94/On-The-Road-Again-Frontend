import React from "react";
import Attraction from "./Attraction";

const AttractionList = ({ attractions }) => {
  return (
    <div className="attraction-container">
      {attractions.map((attraction) => (
        <Attraction key={attraction.id} {...attraction} />
      ))}
    </div>
  );
};

export default AttractionList;
