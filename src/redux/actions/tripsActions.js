export const getTrips = () => {
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/trips")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "GET_TRIPS", payload: data }));
  };
};

export const createTrip = (newTripData) => {
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/trips", {
      method: "POST",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ trip: newTripData }),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "ADD_TRIP", payload: data });
      });
  };
};
