import { configureStore } from "@reduxjs/toolkit";
import { routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "redux-saga";
import createActionWatchMiddleware from "redux-action-watch/lib/middleware";

import { createRootReducer } from "./rootReducer";
import { rootSaga } from "./rootSaga";
import { history } from "./utils/history";

const sagaMiddleware = createSagaMiddleware();
const actionWatchMiddleware = createActionWatchMiddleware("watcher");

const middleware = [
  actionWatchMiddleware,
  sagaMiddleware,
  routerMiddleware(history)
];

function configureMyStore() {
  const store = configureStore({
    reducer: createRootReducer(history),
    middleware
  });
  sagaMiddleware.run(rootSaga);

  return store;
}

const store = configureMyStore();

export { store };
