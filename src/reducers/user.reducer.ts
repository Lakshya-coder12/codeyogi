import { Reducer } from "redux";
import {
  GROUPS_QUERY_COMPLETED,
  GROUP_FETCH_ONE_COMPLETED,
  ME_FETCH,
  ME_LOGIN,
  USERS_FETCH,
  USERS_FETCH_COMPLETED,
  USERS_FETCH_ONE,
  USERS_FETCH_ONE_COMPLETED,
  USERS_FETCH_ONE_ERROR,
} from "../actions/actions.constants";
import { Group } from "../models/Groups";
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
    case GROUPS_QUERY_COMPLETED: {
      const groups = action.payload.groups as Group[];
      const users = groups.reduce((users: User[], group) => {
        return [
          ...users,
          group.creator,
          ...group.participants,
          ...group.invitedMembers,
        ];
      }, []);
      return addMany(state, users) as UserState;
    }
    case GROUP_FETCH_ONE_COMPLETED: {
      const group = action.payload as Group;
      const users = [
        group.creator,
        ...group.participants,
        ...group.invitedMembers,
      ];
      return addMany(state, users) as UserState;
    }
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
    default:
      return state;
  }
};
