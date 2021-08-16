import { takeLatest, all, takeEvery } from "@redux-saga/core/effects";
import {
  GROUPS_QUERY_CHANGED,
  GROUP_FETCH_ONE,
  USERS_FETCH,
  USERS_FETCH_ONE,
} from "../actions/actions.constants";
import { fetchGroups, fetchOne } from "./groups.sagas";
import { fetchUsers, fetchOne as fetchOneUser } from "./users.sagas";

export function* rootSaga() {
  yield all([
    takeLatest(GROUPS_QUERY_CHANGED, fetchGroups),
    takeEvery(GROUP_FETCH_ONE, fetchOne),
    takeEvery(USERS_FETCH_ONE, fetchOneUser),
    takeEvery(USERS_FETCH, fetchUsers),
  ]);
}
