import { User } from "../models/User";
import {
  USERS_FETCH,
  USERS_FETCH_COMPLETED,
  USERS_FETCH_ONE,
  USERS_FETCH_ONE_COMPLETED,
  USERS_FETCH_ONE_ERROR,
} from "./actions.constants";

export const fetchUsers = () => ({
  type: USERS_FETCH,
});

export const fetchUsersCompleted = (users: User[]) => ({
  type: USERS_FETCH_COMPLETED,
  payload: users,
});

export const fetchOneUser = (id: number) => ({
  type: USERS_FETCH_ONE,
  payload: id,
});

export const fetchOneUserCompleted = (user: User) => ({
  type: USERS_FETCH_ONE_COMPLETED,
  payload: user,
});

export const fetchOneUserError = (id: number, msg: string) => ({
  type: USERS_FETCH_ONE_ERROR,
  payload: { id, msg },
});
