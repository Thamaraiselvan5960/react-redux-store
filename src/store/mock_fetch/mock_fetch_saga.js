import { put, call } from "redux-saga/effects";
import { MockFetchActions } from "./mock_fetch_redux";
import { requestSaga } from "../helpers/request_saga";

export function* fetchMockData(api) {
  const response = yield call(requestSaga, {
    loadingSection: "mockData",
    errorSection: "mockData",
    apiMethod: api.fetchMockData,
    successAction: MockFetchActions.fetchMockDataSuccess
  });
}
