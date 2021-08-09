import { Reducer } from "redux";
import {
  GROUPS_QUERY,
  GROUPS_QUERY_COMPLETED,
} from "../actions/actions.constants";
import { Group } from "../models/Groups";
import { addMany, EntityState, getIDs } from "./entity.reducer";

export interface GroupState extends EntityState<Group> {
  query: string;
  loadingQuery: { [query: string]: boolean };
  queryMap: { [query: string]: number[] };
}

const initialState = {
  byID: {},
  query: "",
  queryMap: {},
  loadingQuery: {},
};

export const groupReducer: Reducer<GroupState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GROUPS_QUERY:
      const query = action.payload;
      return {
        ...state,
        query: query,
        loadingQuery: { ...state.loadingQuery, [query]: true },
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
        loadingQuery: {
          ...newState.loadingQuery,
          [action.payload.query]: false,
        },
      };
    default:
      return state;
  }
};
