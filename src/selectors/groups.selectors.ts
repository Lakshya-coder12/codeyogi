import { createSelector } from "reselect";
import { groupStateSelector } from "./app.selectors";
import { usersByIDSelector } from "./user.selectors";

export const groupQuerySelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.query
);

export const groupQueryMapSelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.queryMap
);

export const queryIDsSelector = createSelector(
  [groupQuerySelector, groupQueryMapSelector],
  (query, queryMap) => queryMap[query] || []
);

export const groupByIDSelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.byID
);

export const groupsLoadingSelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.loadingList
);

const selectedIdSelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.selectedID
);

export const selectedErrorSelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.errorOne
);

export const selectLoadingSelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.loadingOne
);

export const selectedGroupSelector = createSelector(
  [groupByIDSelector, selectedIdSelector, usersByIDSelector],
  (byID, id, usersByID) => {
    if (!id) {
      return undefined;
    }
    const group = byID[id];
    const creator = usersByID[group.creator as any];
    const participants = group.participants.map((p: any) => usersByID[p]);
    const invitedMembers = group.invitedMembers.map((m: any) => usersByID[m]);
    return { ...group, creator, participants, invitedMembers };
  }
);

export const groupSelector = createSelector(
  [queryIDsSelector, groupByIDSelector],
  (groupsIDs, byID) => {
    const groups = groupsIDs.map((id) => byID[id]);
    return groups;
  }
);
