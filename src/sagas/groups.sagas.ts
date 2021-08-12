import { call, put, takeLatest, delay } from "@redux-saga/core/effects";
import { AnyAction } from "redux";
import { GROUPS_QUERY_CHANGED } from "../actions/actions.constants";
import { queryCompletedAction } from "../actions/groups.action";
import { fetchGroups as fetchGroupsAPI } from "../api/groups";

export function* fetchGroups(action: AnyAction): Generator<any> {
  yield delay(300);

  const groupsResponse: any = yield call(fetchGroupsAPI, {
    query: action.payload,
    status: "all-groups",
  });
  yield put(queryCompletedAction(action.payload, groupsResponse.data.data));
}

export function* watchGroupQueryChanged() {
  yield takeLatest(GROUPS_QUERY_CHANGED, fetchGroups);
}
