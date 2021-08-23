import {
  all,
  call,
  put,
  delay,
  takeLatest,
  takeEvery,
} from "@redux-saga/core/effects";
import { normalize } from "normalizr";
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
import { userListReceived } from "../actions/users.actions";
import { fetchGroups as fetchGroupsAPI, fetchOneGroup } from "../api/groups";
import { groupSchema } from "../models/schemas";

export function* fetchOne(action: AnyAction): Generator<any> {
  try {
    const response: any = yield call(fetchOneGroup, action.payload);
    console.log(response.data.data);
    yield put(fetchOneGroupCompleted(response.data.data));
  } catch (e) {
    const error = e.response.data?.message || "Some error occurred";
    yield put(fetchOneGroupError(action.payload, error));
  }
}

export function* fetchGroups(action: AnyAction): Generator<any> {
  yield delay(300);
  const groupsResponse: any = yield call(fetchGroupsAPI, {
    query: action.payload,
    status: "all-groups",
  });
  const data = normalize(groupsResponse.data.data, [groupSchema]);
  yield put(queryCompletedAction(action.payload, data.entities.groups as any));
  yield put(userListReceived(data.entities.users as any));
}

export function* watchGroupActions() {
  yield all([
    takeLatest(GROUPS_QUERY_CHANGED, fetchGroups),
    takeEvery(GROUP_FETCH_ONE, fetchOne),
  ]);
}
