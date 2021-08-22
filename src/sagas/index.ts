import { fork } from "@redux-saga/core/effects";
import createSagaMiddleware from "redux-saga";
import { watchGroupActions } from "./groups.sagas";
import { watchUserActions } from "./users.sagas";

export const sagaMiddleware = createSagaMiddleware();

export function* rootSaga() {
  yield fork(watchGroupActions);
  yield fork(watchUserActions);
}
