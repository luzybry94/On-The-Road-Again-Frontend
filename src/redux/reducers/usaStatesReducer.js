export const usaStates = (state = [], action) => {
  switch (action.type) {
    case "GET_STATES":
      return action.payload;
    default:
      return state;
  }
};
