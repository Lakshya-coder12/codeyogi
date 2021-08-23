import { Reducer } from "redux";
import {
  ME_FETCH,
  ME_LOGIN,
  USERS_FETCH,
  USERS_FETCH_COMPLETED,
  USERS_FETCH_ONE,
  USERS_FETCH_ONE_COMPLETED,
  USERS_FETCH_ONE_ERROR,
  USER_LIST_RECEIVED,
} from "../actions/actions.constants";
import { User } from "../models/User";
import {
  addMany,
  addOne,
  EntityState,
  initialEntityState,
  select,
  setErrorForOne,
} from "./entity.reducer";

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
    case USERS_FETCH_ONE:
      return select(state, action.payload) as UserState;
    case USERS_FETCH_ONE_COMPLETED:
      return addOne(state, action.payload, false) as UserState;
    case USERS_FETCH_ONE_ERROR:
      const { id, msg } = action.payload;
      return setErrorForOne(state, id, msg) as UserState;
    case USERS_FETCH:
      return { ...state, loadingList: true };
    case USERS_FETCH_COMPLETED:
      const users = action.payload as User[];
      const newState = addMany(state, users) as UserState;
      return {
        ...newState,
        loadingList: false,
      };
    case USER_LIST_RECEIVED: {
      return { ...state, byID: { ...state.byID, ...action.payload } };
    }
    default:
      return state;
  }
};
