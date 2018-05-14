import { combineReducers } from "redux";

import loginReducer from "../src/containers/Login/reducer";

const rootReducer = combineReducers({
  login: loginReducer
});

export default rootReducer;
