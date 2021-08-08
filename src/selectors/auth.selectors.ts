import { createSelector } from "reselect";
import { authStateSelector, userStateSelector } from "./app.selectors";

export const meSelector = createSelector(
  [authStateSelector, userStateSelector],
  (auth, users) => {
    return auth.id !== undefined ? users.byID[auth.id] : undefined;
  }
);
