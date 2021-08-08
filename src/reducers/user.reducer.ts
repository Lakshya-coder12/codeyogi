import { Reducer } from "redux";
import { ME_FETCH, ME_LOGIN } from "../actions/auth.actions";
import { User } from "../models/User";

export interface UserState {
  byID: {
    [id: number]: User;
  };
}

const initialState = {
  byID: {},
};

export const userReducer: Reducer<UserState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ME_LOGIN:
    case ME_FETCH:
      const user = action.payload as User;
      return { ...state, byID: { ...state.byID, [user.id]: user } };
    default:
      return state;
  }
};
