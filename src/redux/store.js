import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { trips } from "./reducers/tripsReducer";
import { usaStates } from "./reducers/usaStatesReducer";
import { auth } from "./reducers/authReducer";
import { attractions } from "./reducers/attractionsReducer";

const rootReducer = combineReducers({
  trips,
  usaStates,
  auth,
  attractions,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
