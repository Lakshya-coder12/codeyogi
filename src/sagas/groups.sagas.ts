import {
  call,
  put,
  takeLatest,
  delay,
  all,
  takeEvery,
} from "@redux-saga/core/effects";
import { AnyAction } from "redux";
import {
  GROUPS_QUERY_CHANGED,
  GROUP_FETCH_ONE,
} from "../actions/actions.constants";
import {
  fetchOneGroupCompleted,
  fetchOneGroupError,
  queryCompletedAction,
} from "../actions/groups.action";
import { fetchGroups as fetchGroupsAPI, fetchOneGroup } from "../api/groups";

function* fetchGroups(action: AnyAction): Generator<any> {
  yield delay(300);

  const groupsResponse: any = yield call(fetchGroupsAPI, {
    query: action.payload,
    status: "all-groups",
  });
  yield put(queryCompletedAction(action.payload, groupsResponse.data.data));
}

function* fetchOne(action: AnyAction): Generator<any> {
  try {
    const response: any = yield call(fetchOneGroup, action.payload);
    yield put(fetchOneGroupCompleted(response.data.data));
  } catch (e) {
    const error = e.response.data?.message || "Some error occured";
    yield put(fetchOneGroupError(action.payload, error));
  }
}

export function* watchGroupQueryChanged() {
  yield all([
    takeLatest(GROUPS_QUERY_CHANGED, fetchGroups),
    takeEvery(GROUP_FETCH_ONE, fetchOne),
  ]);
}
