import { takeLatest, call, put, fork, all } from "redux-saga/effects";
import axios from "axios";

import { LOG_IN, LOG_IN_SUCCESS, LOG_IN_ERROR } from "./constants";

function* watcherLoginSaga() {
  yield takeLatest(LOG_IN, workerLoginSaga);
}

function* workerLoginSaga(payload) {
  let { type, data } = payload;
  try {
    const url = "http://localhost:9000/api/v1/login";

    const response = yield call(() => {
      return axios.post(url, data);
    });

    console.log("===", response);
    const data = response.data;

    // dispatch a success action to the store with the new dog
    yield put({ type: LOG_IN_SUCCESS, data });
  } catch (error) {
    console.log("​}catch -> error", error);
    // dispatch a failure action to the store with the error
    yield put({ type: LOG_IN_ERROR, error });
  }
}

export default function* rootSaga() {
  yield all([fork(watcherLoginSaga)]);
}
