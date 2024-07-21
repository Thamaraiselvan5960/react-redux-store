import { all, fork, takeEvery, takeLatest } from "redux-saga/effects";

import { API } from "../service/api";
import { mockDataSaga } from "./mock_fetch";
import { authRootSaga } from "./authentication";

const api = API.create();

export function* rootSaga() {
  yield all([
    fork(mockDataSaga, api),
    fork(authRootSaga, api),
  ]);
}
