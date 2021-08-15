import { Reducer } from "redux";
import {
  GROUPS_QUERY_CHANGED,
  GROUPS_QUERY_COMPLETED,
  GROUP_FETCH_ONE,
  GROUP_FETCH_ONE_COMPLETED,
  GROUP_FETCH_ONE_ERROR,
} from "../actions/actions.constants";
import { Group } from "../models/Groups";
import {
  addMany,
  addOne,
  EntityState,
  getIDs,
  initialEntityState,
  select,
  setErrorForOne,
} from "./entity.reducer";

export interface GroupState extends EntityState<Group> {
  query: string;
  queryMap: { [query: string]: number[] };
}

const initialState = {
  ...initialEntityState,
  query: "",
  queryMap: {},
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
      const groups = action.payload.groups as Group[];
      const groupIds = getIDs(groups);
      const newState = addMany(state, groups) as GroupState;
      return {
        ...newState,
        queryMap: {
          ...newState.queryMap,
          [action.payload.query]: groupIds,
        },
        loadingList: false,
      };
    case GROUP_FETCH_ONE_COMPLETED:
      return addOne(state, action.payload, false) as GroupState;
    case GROUP_FETCH_ONE_ERROR:
      const { id, msg } = action.payload;
      return setErrorForOne(state, id, msg) as GroupState;
    default:
      return state;
  }
};
