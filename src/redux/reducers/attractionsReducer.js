export const attractions = (state = [], action) => {
  switch (action.type) {
    case "SET_ATTRACTIONS":
      return action.payload;
    case "ADD_ATTRACTION":
      return [...state, action.payload];
    case "UPDATE_ATTRACTION":
      return state.map((attraction) =>
        attraction.id === action.payload.id ? action.payload : attraction
      );
    case "DELETE_ATTRACTION":
      return state.filter((attraction) => attraction.id !== action.payload);
    case "UNSET_ATTRACTIONS":
      return [];

    default:
      return state;
  }
};
