import { getTrips } from "./tripsActions";

export const login = (loginInfo, history) => {
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginInfo),
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.token = data.jwt;
        dispatch({
          type: "SET_USER",
          payload: data.user,
        });
        dispatch(getTrips(data.user.id));
        history.push("/trips");
      });
  };
};

export const autoLogin = () => {
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/autologin", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "SET_USER",
          payload: data.user,
        });
        dispatch(getTrips(data.user.id));
      });
  };
};
