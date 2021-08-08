import { User } from "../models/User";

export const ME_FETCH = "me/fetch";
export const ME_LOGIN = "me/login";

export const meFetchAction = (u: User) => ({ type: ME_FETCH, payload: u });
export const meLoginAction = (u: User) => ({ type: ME_LOGIN, payload: u });
