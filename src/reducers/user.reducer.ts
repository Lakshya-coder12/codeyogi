import { Reducer } from "redux";
import { ME_FETCH, ME_LOGIN } from "../actions/auth.actions";
import { User } from "../models/User";
import { addOne, EntityState } from "./entity.reducer";

export interface UserState extends EntityState<User> {}

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
      return addOne(state, action.payload) as UserState;
    default:
      return state;
  }
};
