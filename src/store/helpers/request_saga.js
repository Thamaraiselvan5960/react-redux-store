import _ from "lodash";
import { call, put, select } from "redux-saga/effects";
import { LoadingActions } from "../loading/loading_redux";

export function* requestSaga({
  loadingSection = "",
  errorSection = "",
  apiMethod,
  apiParams = [],
  successAction = () => null,
  resultsPath
}) {
  yield put(LoadingActions.startLoading(loadingSection));
  const response = yield call(apiMethod, ...apiParams);
  yield put(LoadingActions.stopLoading(loadingSection));

  if (response.ok) {
    const action = successAction(
      resultsPath ? _.get(response.data, resultsPath) : response.data
    );
    if (action) yield put(action);
  }
  return response;
}
