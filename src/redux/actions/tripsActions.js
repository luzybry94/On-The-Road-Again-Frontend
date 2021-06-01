export const getTrips = () => {
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/trips", {
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => dispatch({ type: "SET_TRIPS", payload: data }));
  };
};

export const createTrip = (newTripData, history) => {
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/trips", {
      method: "POST",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
      body: JSON.stringify(newTripData),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "ADD_TRIP", payload: data });
        console.log(data);
        history.push("/trips");
      });
  };
};
