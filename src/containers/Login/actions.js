import { LOG_IN, LOG_IN_ERROR, LOG_OUT } from "./constants";

export function login(data) {
  return {
    type: LOG_IN,
    data
  };
}

export function loginError(error) {
  return {
    type: LOG_IN_ERROR,
    error
  };
}

export function logout() {
  return {
    type: LOG_OUT
  };
}
