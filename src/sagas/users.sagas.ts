import { call, put } from "@redux-saga/core/effects";
import { AnyAction } from "redux";
import {
  fetchOneUserCompleted,
  fetchOneUserError,
  fetchUsersCompleted,
} from "../actions/users.actions";
import { fetchOneUser, fetchUsers as fetchUsersAPI } from "../api/users";

export function* fetchOne(action: AnyAction): Generator<any> {
  try {
    const response: any = yield call(fetchOneUser, action.payload);
    yield put(fetchOneUserCompleted(response.data.data));
  } catch (e) {
    const error = e.response.data?.message || "Some error occured";
    yield put(fetchOneUserError(action.payload, error));
  }
}

export function* fetchUsers(action: AnyAction): Generator<any> {
  const userResponse: any = yield call(fetchUsersAPI);
  console.log(userResponse.data.data);
  yield put(fetchUsersCompleted(userResponse.data.data));
}
