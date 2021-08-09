import { groupActions } from "../actions/groups.action";
import { GroupRequest, fetchGroups as fetchGroupsAPI } from "../api/groups";
import { groupQueryMapSelector } from "../selectors/groups.selectors";
import { store } from "../store";

export const fetchGroups = (request: GroupRequest) => {
  const queryMap = groupQueryMapSelector(store.getState());
  const query = request.query;
  const groupIDs = queryMap[query];
  groupActions.query(query, !groupIDs);

  if (groupIDs) {
    return;
  }
  fetchGroupsAPI(request).then((groups) => {
    groupActions.queryCompleted(query, groups);
  });
};
