export const trips = (state = [], action) => {
  switch (action.type) {
    case "SET_TRIPS":
      return action.payload;
    case "ADD_TRIP":
      return [...state, action.payload];
    case "ADD_TODO":
      return state.map((trip) =>
        trip.id === action.payload.id ? action.payload : trip
      );
    case "UPDATE_TODO":
      return state.map((trip) =>
        trip.id === action.payload.id ? action.payload : trip
      );
    case "DELETE_TODO":
      return state.map((trip) =>
        trip.id === action.payload.id ? action.payload : trip
      );

    default:
      return state;
  }
};
