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
        history.push("/trips");
      });
  };
};

export const updateTrip = (updatedTripData, tripId, history) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/trips/${tripId}`, {
      method: "PATCH",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
      body: JSON.stringify(updatedTripData),
    })
      .then((res) => res.json())
      .then((trip) => {
        dispatch({ type: "UPDATE_TRIP", payload: trip });
        history.push("/trips");
      });
  };
};

export const getTripData = (tripId, callback) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/trips/${tripId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((res) => res.json())
      .then((trip) => {
        dispatch({ type: "SET_TRIP_DATA", payload: trip });
        callback(trip);
      });
  };
};

export const deleteTrip = (tripId) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/trips/${tripId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => dispatch({ type: "SET_TRIPS", payload: data }));
  };
};
