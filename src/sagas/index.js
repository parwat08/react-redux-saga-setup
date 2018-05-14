import { loginSaga } from "./saga";

let sagas = {
  loginSaga
};

export const initSagas = sagaMiddleware => {
  Object.values(sagas).forEach(sagaMiddleware.run.bind(sagaMiddleware));
};
