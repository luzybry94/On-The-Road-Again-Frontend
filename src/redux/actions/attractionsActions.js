export const getAttractions = (tripId, callback) => {
  return (dispatch) => {
    fetch(`http://localhost:3001/api/v1/trips/${tripId}/attractions`, {
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((res) => res.json())
      .then((attractions) => {
        dispatch({ type: "SET_ATTRACTIONS", payload: attractions });
        callback();
      });
  };
};

export const unsetAttractions = () => {
  return {
    type: "UNSET_ATTRACTIONS",
  };
};

export const createAttraction = (newAttractionData, tripId, callback) => {
  return (dispatch) => {
    fetch(`http://localhost:3001/api/v1/trips/${tripId}/attractions`, {
      method: "POST",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
      body: JSON.stringify(newAttractionData),
    })
      .then((res) => res.json())
      .then((attraction) => {
        dispatch({ type: "ADD_ATTRACTION", payload: attraction });
        callback();
      });
  };
};

export const updateAttraction = (
  updatedAttractionData,
  attractionId,
  tripId,
  callback
) => {
  return (dispatch) => {
    fetch(
      `http://localhost:3001/api/v1/trips/${tripId}/attractions/${attractionId}`,
      {
        method: "PATCH",
        headers: {
          Accepts: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.token}`,
        },
        body: JSON.stringify(updatedAttractionData),
      }
    )
      .then((res) => res.json())
      .then((attraction) => {
        dispatch({ type: "UPDATE_ATTRACTION", payload: attraction });
        callback();
      });
  };
};

export const deleteAttraction = (id, tripId) => {
  return (dispatch) => {
    fetch(`http://localhost:3001/api/v1/trips/${tripId}/attractions/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((res) => res.json())
      .then((id) => {
        dispatch({ type: "DELETE_ATTRACTION", payload: id });
      });
  };
};
