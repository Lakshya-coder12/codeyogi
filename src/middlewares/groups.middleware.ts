import axios, { Canceler } from "axios";
import { groupActions } from "../actions/groups.action";
import { GroupRequest, fetchGroups as fetchGroupsAPI } from "../api/groups";

let canceler: Canceler | undefined;

export const fetchGroups = (request: GroupRequest) => {
  const query = request.query;

  groupActions.query(query);

  canceler && canceler();

  const { cancel, token } = axios.CancelToken.source();

  canceler = cancel;
  fetchGroupsAPI(request, token).then((groups) => {
    groupActions.queryCompleted(query, groups);
    canceler = undefined;
  });
};
