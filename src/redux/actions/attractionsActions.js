export const getAttractions = (tripId) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/trips/${tripId}/attractions`, {
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "SET_ATTRACTIONS", payload: data });
      });
  };
};

export const unsetAttractions = () => {
  return {
    type: "UNSET_ATTRACTIONS",
  };
};

export const createAttraction = (newAttractionData, tripId) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/trips/${tripId}/attractions`, {
      method: "POST",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
      body: JSON.stringify(newAttractionData),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "ADD_TRIP", payload: data });
        window.location.reload();
      });
  };
};
