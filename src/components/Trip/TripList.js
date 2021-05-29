import React from "react";
import Trip from "./Trip";

const TripList = ({ trips }) => {
  return (
    <div>
      {trips.map((trip) => (
        <Trip key={trip.id} {...trip} />
      ))}
    </div>
  );
};

export default TripList;
