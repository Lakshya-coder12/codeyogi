import { Reducer } from "redux";
import {
  GROUPS_QUERY_CHANGED,
  GROUPS_QUERY_COMPLETED,
  GROUP_FETCH_ONE_COMPLETED,
} from "../actions/actions.constants";
import { Group } from "../models/Groups";
import { addMany, addOne, EntityState, getIDs } from "./entity.reducer";

export interface GroupState extends EntityState<Group> {
  query: string;
  loading: boolean;
  queryMap: { [query: string]: number[] };
}

const initialState = {
  byID: {},
  query: "",
  queryMap: {},
  loading: false,
};

export const groupReducer: Reducer<GroupState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GROUPS_QUERY_CHANGED:
      const query = action.payload;
      return {
        ...state,
        query: query,
        loading: true,
      };
    case GROUPS_QUERY_COMPLETED:
      const groups = action.payload.groups as Group[];
      const groupIds = getIDs(groups);
      const newState = addMany(state, groups) as GroupState;
      return {
        ...newState,
        queryMap: {
          ...newState.queryMap,
          [action.payload.query]: groupIds,
        },
        loading: false,
      };
    case GROUP_FETCH_ONE_COMPLETED:
      return addOne(state, action.payload) as GroupState;
    default:
      return state;
  }
};
