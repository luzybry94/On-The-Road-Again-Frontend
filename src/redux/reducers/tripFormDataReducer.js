export const tripFormData = (state = [], action) => {
  switch (action.type) {
    case "SET_TRIP_DATA":
      return action.payload;
    default:
      return state;
  }
};
