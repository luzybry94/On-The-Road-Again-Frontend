export const addTodo = (newTodo, tripId) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/trips/${tripId}/todos`, {
      method: "POST",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
      body: JSON.stringify(newTodo),
    })
      .then((res) => res.json())
      .then((trip) => {
        dispatch({ type: "ADD_TODO", payload: trip });
      });
  };
};

export const updateTodo = (update, todoId, tripId) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/trips/${tripId}/todos/${todoId}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
      method: "PATCH",
      body: JSON.stringify(update),
    })
      .then((res) => res.json())
      .then((trip) => dispatch({ type: "UPDATE_TODO", payload: trip }));
  };
};

export const deleteTodo = (todoId, tripId) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/trips/${tripId}/todos/${todoId}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((trip) => dispatch({ type: "DELETE_TODO", payload: trip }));
  };
};
