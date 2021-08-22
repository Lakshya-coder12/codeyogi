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
      const groups = action.payload.groups as Group[];
      const groupIds = getIDs(groups);
      const newState = addMany(state, groups) as GroupState;
      const participantIdsById = groups.reduce((participantIdsById, group) => {
        const participantIds = group.participants.map((p) => p.id);
        return { ...participantIdsById, [group.id]: participantIds };
      }, {});
      const invitedMembersIdsById = groups.reduce(
        (invitedMembersIdsById, group) => {
          const invitedMembersIds = group.invitedMembers.map((m) => m.id);
          return { ...invitedMembersIdsById, [group.id]: invitedMembersIds };
        },
        {}
      );
      const creatorById = groups.reduce((creatorById, group) => {
        return { ...creatorById, [group.id]: group.creator.id };
      }, {});
      return {
        ...newState,
        queryMap: {
          ...newState.queryMap,
          [action.payload.query]: groupIds,
        },
        loadingList: false,
        creators: { ...state.creators, ...creatorById },
        participants: { ...state.participants, ...participantIdsById },
        invitedMembers: { ...state.invitedMembers, ...invitedMembersIdsById },
      };
    case GROUP_FETCH_ONE_COMPLETED: {
      const group = action.payload as Group;
      const participantIds = group.participants.map((p) => p.id);
      const invitedMembersIds = group.invitedMembers.map((m) => m.id);
      const newState = addOne(state, action.payload, false) as GroupState;
      return {
        ...newState,
        participants: { ...newState.participants, [group.id]: participantIds },
        invitedMembers: {
          ...newState.invitedMembers,
          [group.id]: invitedMembersIds,
        },
        creators: { ...newState.creators, [group.id]: group.creator.id },
      };
    }
    case GROUP_FETCH_ONE_ERROR:
      const { id, msg } = action.payload;
      return setErrorForOne(state, id, msg) as GroupState;
    default:
      return state;
  }
};
