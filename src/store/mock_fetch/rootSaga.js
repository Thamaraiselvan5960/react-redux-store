import { all, takeEvery, takeLatest } from "redux-saga/effects";
import { fetchMockData } from "./mock_fetch_saga";
import { MockFetchTypes } from "./mock_fetch_redux";

export function* mockDataSaga(api) {
  yield all([takeLatest(MockFetchTypes.FETCH_MOCK_DATA, fetchMockData, api)]);
}
