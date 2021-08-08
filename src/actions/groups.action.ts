import { Group } from "../models/Groups";

export const GROUPS_QUERY = "groups/query";
export const GROUPS_QUERY_COMPLETED = "groups/query_completed";

export const groupsQueryAction = (query: string) => ({
  type: GROUPS_QUERY,
  payload: query,
});
export const groupsQueryCompletedAction = (query: string, groups: Group[]) => ({
  type: GROUPS_QUERY_COMPLETED,
  payload: { query, groups },
});
