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

export const groupSelector = createSelector(
  [groupQuerySelector, groupQueryMapSelector, groupByIDSelector],
  (query, queryMap, byID) => {
    const groupsIDs = queryMap[query] || [];
    const groups = groupsIDs.map((id) => byID[id]);
    return groups;
  }
);
