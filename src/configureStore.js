import { createStore, applyMiddleware, compose } from "redux";
import { fromJS } from "immutable";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./combineReducers";
console.log("​combineReducer", rootReducer);

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState = {}) {
  const middlewares = [sagaMiddleware];
  const enhancers = [applyMiddleware(...middlewares)];

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers =
    process.env.NODE_ENV !== "production" &&
    typeof window === "object" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // TODO Try to remove when `react-router-redux` is out of beta, LOCATION_CHANGE should not be fired more than once after hot reloading
          // Prevent recomputing reducers for `replaceReducer`
          shouldHotReload: false
        })
      : compose;

  const store = createStore(
    rootReducer,
    fromJS(initialState),
    composeEnhancers(...enhancers)
  );

  return store;
}
