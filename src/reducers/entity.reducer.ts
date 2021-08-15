import { Entity } from "../models/Entity";

export interface EntityState<T extends Entity = Entity> {
  byID: {
    [id: number]: T;
  };
  selectedID?: number;
  loadingOne: boolean;
  loadingList: boolean;
  errorOne?: string;
}

export const initialEntityState = {
  byID: {},
  loadingOne: false,
  loadingList: false,
};

export const getIDs = (entities: Entity[]) => {
  return entities.map((e) => e.id);
};

export const select = (state: EntityState, id: number) => ({
  ...state,
  selectedID: id,
  loadingOne: true,
  errorOne: undefined,
});

export const setErrorForOne = (state: EntityState, id: number, msg: string) => {
  if (state.selectedID !== id) {
    return state;
  }
  return { ...state, errorOne: msg, loadingOne: false };
};

export const addOne = (
  state: EntityState,
  entity: Entity,
  loading?: boolean
) => {
  const newLoading = loading === undefined ? state.loadingOne : loading;
  return {
    ...state,
    byID: { ...state.byID, [entity.id]: entity },
    loadingOne: newLoading,
  };
};

export const addMany = (state: EntityState, entities: Entity[]) => {
  if (entities.length === 0) {
    return state;
  }
  const entityMap = entities.reduce((prev, entity) => {
    return { ...prev, [entity.id]: entity };
  }, {});

  return {
    ...state,
    byID: { ...state.byID, ...entityMap },
  };
};
