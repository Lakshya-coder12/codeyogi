import { Reducer } from "redux";
import { ME_FETCH, ME_LOGIN } from "../actions/actions.constants";
import { User } from "../models/User";
import { addOne, EntityState, initialEntityState } from "./entity.reducer";

export interface UserState extends EntityState<User> {}

const initialState = {
  ...initialEntityState,
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
