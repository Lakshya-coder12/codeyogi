import { createSelector } from "reselect";
import { authStateSelector } from "./app.selectors";
import { usersByIDSelector } from "./user.selectors";

const meIDSelector = createSelector(
  [authStateSelector],
  (authState) => authState.id
);

export const meSelector = createSelector(
  [meIDSelector, usersByIDSelector],
  (id, usersByID) => id && usersByID[id]
);
