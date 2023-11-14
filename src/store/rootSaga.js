import { all, fork, takeEvery, takeLatest } from "redux-saga/effects";

import { mockDataSaga } from "./mock_fetch";
import { API } from "../service/api";

const api = API.create();

export function* rootSaga() {
  yield all([fork(mockDataSaga, api)]);
}
