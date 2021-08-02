import { TypedUseSelectorHook, useSelector } from "react-redux";
import { AnyAction, createStore, Reducer } from "redux";
import { GroupResponseElement } from "./models/Groups";
import { User } from "./models/User";

const ME_FETCH = "me/fetch";
const ME_LOGIN = "me/login";

export interface AppState {
  me?: User;
  groups: GroupResponseElement[];
  isSidebarOpen: boolean;
}

const initialState: AppState = {
  me: undefined,
  groups: [],
  isSidebarOpen: true,
};

const reducer: Reducer<AppState, AnyAction> = (
  state = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case ME_FETCH:
    case ME_LOGIN:
      return { ...state, me: action.payload };
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
