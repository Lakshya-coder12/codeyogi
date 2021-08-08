import { Entity } from "../models/Entity";

export interface EntityState<T extends Entity = Entity> {
  byID: {
    [id: number]: T;
  };
}

export const getIDs = (entities: Entity[]) => {
  return entities.map((e) => e.id);
};

export const addOne = (state: EntityState, entity: Entity) => {
  return { ...state, byID: { ...state.byID, [entity.id]: entity } };
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
