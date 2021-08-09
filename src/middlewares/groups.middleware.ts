import { groupActions } from "../actions/groups.action";
import { GroupRequest, fetchGroups as fetchGroupsAPI } from "../api/groups";
import { groupLoadingQuerySelector } from "../selectors/groups.selectors";
import { store } from "../store";

export const fetchGroups = (request: GroupRequest) => {
  const queryLoading = groupLoadingQuerySelector(store.getState());
  const query = request.query;
  const groupIDs = queryLoading[query];
  groupActions.query(query);

  if (groupIDs) {
    return;
  }
  fetchGroupsAPI(request).then((groups) => {
    groupActions.queryCompleted(query, groups);
  });
};
