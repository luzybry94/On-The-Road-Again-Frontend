export const addTodo = (newTodo, history) => {
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/todos", {
      method: "POST",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
      body: JSON.stringify(newTodo),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "ADD_TRIP", payload: data });
        console.log(data);
        history.push("/trips");
      });
  };
};

export const updateTodo = (update, todoId, tripID) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/trips/${tripID}/todos/${todoId}`, {
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
