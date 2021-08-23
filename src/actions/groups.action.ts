import { Group } from "../models/Groups";
import {
  GROUPS_QUERY_CHANGED,
  GROUPS_QUERY_COMPLETED,
  GROUP_FETCH_ONE,
  GROUP_FETCH_ONE_COMPLETED,
  GROUP_FETCH_ONE_ERROR,
} from "./actions.constants";

export const queryChangedAction = (query: string) => ({
  type: GROUPS_QUERY_CHANGED,
  payload: query,
});
export const queryCompletedAction = (
  query: string,
  groupsByID: { [id: number]: Group }
) => ({
  type: GROUPS_QUERY_COMPLETED,
  payload: { query, groupsByID },
});

export const fetchOneGroup = (id: number) => ({
  type: GROUP_FETCH_ONE,
  payload: id,
});

export const fetchOneGroupCompleted = (group: Group) => ({
  type: GROUP_FETCH_ONE_COMPLETED,
  payload: group,
});

export const fetchOneGroupError = (id: number, msg: string) => ({
  type: GROUP_FETCH_ONE_ERROR,
  payload: { id, msg },
});
