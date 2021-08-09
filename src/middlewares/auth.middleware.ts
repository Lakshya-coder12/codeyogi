import { authActions } from "../actions/auth.actions";
import { me as meAPI } from "../api/auth";

export const me = () => {
  meAPI().then((u) => authActions.fetch(u));
};
