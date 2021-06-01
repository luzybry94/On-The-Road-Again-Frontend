export const auth = (state = { loggedIn: false, currentUser: {} }, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        loggedIn: action.payload.loggedIn,
        currentUser: action.payload.currentUser,
      };
    case "LOGOUT":
      return {
        ...state,
        loggedIn: false,
        currentUser: {},
      };
    default:
      return state;
  }
};
