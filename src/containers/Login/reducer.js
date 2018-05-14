import { fromJS } from "immutable";

import {
  LOG_IN,
  LOG_IN_SUCCESS,
  LOG_IN_ERROR,
  LOG_OUT,
  LOG_OUT_SUCCESS,
  LOG_OUT_ERROR
} from "./constants";

const initialState = fromJS({
  loading: false,
  error: false,
  currentUser: null
});

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOG_IN:
      console.log(state);
      return state.set("loading", true).set("error", false);
    case LOG_IN_SUCCESS:
      return state.set("currentUser", action.data).set("loading", false);
    case LOG_IN_ERROR:
      return state.set("error", action.error).set("loading", false);
    case LOG_OUT:
      return state.set("loading", true).set("error", false);
    case LOG_OUT_SUCCESS:
    // remove data from localStorage
    case LOG_OUT_ERROR:
      return state.set("error", action.error).set("loading", false);
    default:
      return state;
  }
}
