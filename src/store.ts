import { TypedUseSelectorHook, useSelector } from "react-redux";
import { AnyAction, createStore, Reducer } from "redux";
import { GroupResponseElement } from "./models/Groups";
import { User } from "./models/User";

const ME_FETCH = "me/fetch";
const ME_LOGIN = "me/login";
export const GROUPS_QUERY = "groups/query";
export const GROUPS_QUERY_COMPLETED = "groups/query_completed";

export interface AppState {
  me?: User;
  isSidebarOpen: boolean;
  groupQuery: string;
  groupQueryMap: { [query: string]: number[] };
  groups: { [id: number]: GroupResponseElement };
}

const initialState: AppState = {
  me: undefined,
  isSidebarOpen: true,
  groupQuery: "",
  groupQueryMap: {},
  groups: {},
};

const reducer: Reducer<AppState, AnyAction> = (
  state = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case ME_FETCH:
    case ME_LOGIN:
      return { ...state, me: action.payload };
    case GROUPS_QUERY:
      return { ...state, groupQuery: action.payload };
    case GROUPS_QUERY_COMPLETED:
      const groups = action.payload.groups as GroupResponseElement[];
      const groupIds = groups.map((g) => g.id);
      const groupMap = groups.reduce((prev, group) => {
        return { ...prev, [group.id]: group };
      }, {});
      return {
        ...state,
        groupQueryMap: {
          ...state.groupQueryMap,
          [action.payload.query]: groupIds,
        },
        groups: { ...state.groups, ...groupMap },
      };
    default:
      return state;
  }
};

export const store = createStore(
  reducer,
  window._REDUX__DEVTOOLS_EXTENSION_ && window._REDUX__DEVTOOLS_EXTENSION_()
);

export const meFetchAction = (u: User) => ({ type: ME_FETCH, payload: u });
export const meLoginAction = (u: User) => ({ type: ME_LOGIN, payload: u });

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
