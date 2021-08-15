import { createSelector } from "reselect";
import { groupStateSelector } from "./app.selectors";

export const groupQuerySelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.query
);

export const groupQueryMapSelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.queryMap
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
  [groupByIDSelector, selectedIdSelector],
  (byID, id) => id && byID[id]
);

export const groupSelector = createSelector(
  [groupQuerySelector, groupQueryMapSelector, groupByIDSelector],
  (query, queryMap, byID) => {
    const groupsIDs = queryMap[query] || [];
    const groups = groupsIDs.map((id) => byID[id]);
    return groups;
  }
);
