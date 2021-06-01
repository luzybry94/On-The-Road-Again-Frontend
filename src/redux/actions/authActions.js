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
          payload: { loggedIn: data.logged_in, currentUser: data.user },
        });
        history.push("/trips");
      });
  };
};

export const signup = (userInfo, history) => {
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/signup", {
      method: "POST",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.token = data.jwt;
        dispatch({
          type: "SET_USER",
          payload: { loggedIn: data.logged_in, currentUser: data.user },
        });
        history.push("/trips/new");
      });
  };
};

export const autoLogin = (callback) => {
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
          payload: { loggedIn: data.logged_in, currentUser: data.user },
        });
        callback();
      });
  };
};

export const logout = () => {
  return (dispatch) => {
    localStorage.clear("token");
    dispatch({ type: "LOGOUT" });
  };
};
