import { normalize } from "normalizr";
import { Reducer } from "redux";
import {
  GROUPS_QUERY_CHANGED,
  GROUPS_QUERY_COMPLETED,
  GROUP_FETCH_ONE,
  GROUP_FETCH_ONE_COMPLETED,
  GROUP_FETCH_ONE_ERROR,
} from "../actions/actions.constants";
import { Group } from "../models/Groups";
import { groupSchema } from "../models/schemas";
import {
  EntityState,
  initialEntityState,
  select,
  setErrorForOne,
} from "./entity.reducer";

export interface GroupState extends EntityState<Group> {
  query: string;
  queryMap: { [query: string]: number[] };
  creators: { [groupID: number]: number };
  invitedMembers: { [groupID: number]: number[] };
  participants: { [groupID: number]: number[] };
}

const initialState = {
  ...initialEntityState,
  query: "",
  queryMap: {},
  creators: {},
  invitedMembers: {},
  participants: {},
};

export const groupReducer: Reducer<GroupState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GROUP_FETCH_ONE:
      return select(state, action.payload) as GroupState;
    case GROUPS_QUERY_CHANGED:
      const query = action.payload;
      return {
        ...state,
        query: query,
        loadingList: true,
      };
    case GROUPS_QUERY_COMPLETED:
      const groupsByID = action.payload.groupsByID;
      const groupIds = Object.keys(groupsByID);
      return {
        ...state,
        byID: { ...state.byID, ...groupsByID },
        queryMap: {
          ...state.queryMap,
          [action.payload.query]: groupIds,
        },
        loadingList: false,
      };
    case GROUP_FETCH_ONE_COMPLETED: {
      const data = normalize(action.payload, [groupSchema]);
      return {
        ...state,
        byID: { ...state.byID, ...data.entities.groups },
        loadingOne: false,
      };
    }
    case GROUP_FETCH_ONE_ERROR:
      const { id, msg } = action.payload;
      return setErrorForOne(state, id, msg) as GroupState;
    default:
      return state;
  }
};
