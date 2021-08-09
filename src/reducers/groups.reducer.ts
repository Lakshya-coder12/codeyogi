import { Reducer } from "redux";
import {
  GROUPS_QUERY,
  GROUPS_QUERY_COMPLETED,
} from "../actions/actions.constants";
import { Group } from "../models/Groups";
import { addMany, EntityState, getIDs } from "./entity.reducer";

export interface GroupState extends EntityState<Group> {
  query: string;
  queryMap: { [query: string]: number[] };
}

const initialState = {
  byID: {},
  query: "",
  queryMap: {},
};

export const groupReducer: Reducer<GroupState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GROUPS_QUERY:
      return { ...state, query: action.payload };
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
      };
    default:
      return state;
  }
};
