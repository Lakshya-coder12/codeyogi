import { createSelector } from "reselect";
import { userStateSelector } from "./app.selectors";

export const usersLoadingSelector = createSelector(
  [userStateSelector],
  (userState) => userState.loadingList
);

export const userByIDSelector = createSelector(
  [userStateSelector],
  (userState) => userState.byID
);

const selectedIdSelector = createSelector(
  [userStateSelector],
  (userState) => userState.selectedID
);

export const selectedErrorSelector = createSelector(
  [userStateSelector],
  (userState) => userState.errorOne
);

export const selectLoadingSelector = createSelector(
  [userStateSelector],
  (userState) => userState.loadingOne
);

export const selectedUserSelector = createSelector(
  [userByIDSelector, selectedIdSelector],
  (byID, id) => id && byID[id]
);

export const userSelector = createSelector([userByIDSelector], (byID) => {
  const users = Object.keys(byID).map((id) => byID[+id]);
  return users;
});
