import React from "react";
import Trip from "./Trip";

const TripList = ({ trips }) => {
  return (
    <div>
      {trips.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        trips.map((trip) => <Trip key={trip.id} {...trip} />)
      )}
    </div>
  );
};

export default TripList;
