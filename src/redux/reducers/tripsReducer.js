export const trips = (state = [], action) => {
  switch (action.type) {
    case "GET_TRIPS":
      return action.payload;
    case "ADD_TRIP":
      return [...state, action.payload];

    default:
      return state;
  }
};
