import { Reducer } from "redux";
import { GROUPS_QUERY, GROUPS_QUERY_COMPLETED } from "../actions/groups.action";
import { GroupResponseElement } from "../models/Groups";

export interface GroupState {
  byID: {
    [id: number]: GroupResponseElement;
  };
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
      const groups = action.payload.groups as GroupResponseElement[];
      const groupIds = groups.map((g) => g.id);
      const groupMap = groups.reduce((prev, group) => {
        return { ...prev, [group.id]: group };
      }, {});
      return {
        ...state,
        queryMap: {
          ...state.queryMap,
          [action.payload.query]: groupIds,
        },
        byID: { ...state.byID, ...groupMap },
      };
    default:
      return state;
  }
};
