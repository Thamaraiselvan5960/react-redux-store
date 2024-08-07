import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import actionWatchReducer from "redux-action-watch/lib/reducer";

import { resettableReducer } from "reduxsauce";

import { mockFetchReducer } from "./mock_fetch";
import { loadingReducer } from "./loading/loading_redux";
import { authReducer } from "./authentication";

const resettable = resettableReducer("RESET");

export const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),

    mockData: mockFetchReducer,
    auth: authReducer,
    loadingIndicators: resettable(loadingReducer),

    watcher: actionWatchReducer
  });
