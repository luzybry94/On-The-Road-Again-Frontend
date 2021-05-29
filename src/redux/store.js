import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { trips } from "./reducers/tripsReducer";
import { usaStates } from "./reducers/usaStatesReducer";
import thunk from "redux-thunk";
import { auth } from "./reducers/authReducer";

const rootReducer = combineReducers({
  trips,
  usaStates,
  auth,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
