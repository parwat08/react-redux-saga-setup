import { take, actionChannel, put } from "redux-saga/effects";

import { LOG_IN, LOG_IN_SUCCESS, LOG_IN_ERROR } from "./actions";

export function* watcherLogin() {
  yield takeLatest(LOG_IN, workerSaga);
}

function fetchDog(method, url) {
  return axios({
    method,
    url
  });
}

function* workerSaga() {
  try {
    const method = "get";
    const url = "https://dog.ceo/api/breeds/image/random";

    const response = yield call(() => {
      fetchDog(method, url);
    });
    const dog = response.data.message;

    // dispatch a success action to the store with the new dog
    yield put({ type: LOG_IN_SUCCESS, dog });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: LOG_IN_FAILURE, error });
  }
}
