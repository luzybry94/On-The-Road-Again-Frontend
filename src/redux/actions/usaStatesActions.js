export const getUsaStates = () => {
  return (dispatch) => {
    fetch("http://localhost:3001/api/v1/states")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "GET_STATES", payload: data }));
  };
};
