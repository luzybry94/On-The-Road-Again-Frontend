export const getTrips = () => {
  return (dispatch) => {
    fetch("http://localhost:3001/api/v1/trips", {
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((res) => res.json())
      .then((trips) => dispatch({ type: "SET_TRIPS", payload: trips }));
  };
};

export const createTrip = (newTripData, history) => {
  return (dispatch) => {
    fetch("http://localhost:3001/api/v1/trips", {
      method: "POST",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
      body: JSON.stringify(newTripData),
    })
      .then((res) => res.json())
      .then((trip) => {
        dispatch({ type: "ADD_TRIP", payload: trip });
        history.push("/trips");
      });
  };
};

export const updateTrip = (updatedTripData, tripId, callback) => {
  return (dispatch) => {
    fetch(`http://localhost:3001/api/v1/trips/${tripId}`, {
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
        callback();
      });
  };
};

export const deleteTrip = (tripId) => {
  return (dispatch) => {
    fetch(`http://localhost:3001/api/v1/trips/${tripId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((res) => res.json())
      .then((id) => {
        dispatch({ type: "DELETE_TRIP", payload: id });
      });
  };
};
