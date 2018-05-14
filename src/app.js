import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { fromJS } from "immutable";

import Login from "./containers/Login";

import configureStore from "./store";

const initialState = {
  login: fromJS({})
};

const store = configureStore(initialState);
const MOUNT_NODE = document.getElementById("app");

ReactDOM.render(
  <Provider store={store}>
    <Login />
  </Provider>,
  MOUNT_NODE
);
