import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import Login from "./containers/Login";

import configureStore from "./configureStore";

const initialState = {
  login: {}
};

const store = configureStore(initialState);
const MOUNT_NODE = document.getElementById("app");

ReactDOM.render(
  <Provider store={store}>
    <Login />
  </Provider>,
  MOUNT_NODE
);
