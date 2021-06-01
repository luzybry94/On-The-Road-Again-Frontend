export const attractions = (state = [], action) => {
  switch (action.type) {
    case "SET_ATTRACTIONS":
      return action.payload;
    case "ADD_ATTRACTION":
      return [...state, action.payload];
    case "UNSET_ATTRACTIONS":
      return [];

    default:
      return state;
  }
};
