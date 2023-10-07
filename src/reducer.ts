import { PathType } from "./Types";

export const initialPath: PathType = {
  inst: undefined,
  coll: undefined,
  obj: undefined,
};

export type PathActionType =
  | { type: "setInst"; inst: { id: number; name: string } }
  | { type: "setColl"; coll: { id: number; name: string } }
  | { type: "setObj"; obj: { id: number; name: string } }
  | { type: "clearInst" }
  | { type: "clearColl" }
  | { type: "clearObj" }
  | { type: "clearAll" };

export const pathReducer = (state: PathType, action: PathActionType) => {
  switch (action.type) {
    case "setInst":
      return { ...state, inst: { id: action.inst.id, name: action.inst.name } };
    case "setColl":
      return { ...state, coll: { id: action.coll.id, name: action.coll.name } };
    case "setObj":
      return { ...state, obj: { id: action.obj.id, name: action.obj.name } };
    case "clearInst":
      return { ...state, inst: undefined };
    case "clearColl":
      return { ...state, coll: undefined };
    case "clearObj":
      return { ...state, obj: undefined };
    case "clearAll":
      return {
        ...state,
        inst: undefined,
        coll: undefined,
        obj: undefined,
      };
    default:
      return state;
  }
};

////////////////

export type SearchStateType = string | undefined;

export const initialSearchParam: SearchStateType = undefined;

export type SearchActionType =
  | {
      type: "setSearchParam";
      payload: string;
    }
  | {
      type: "clearSearchParam";
    };

export const searchReducer = (
  state: SearchStateType,
  action: SearchActionType
) => {
  switch (action.type) {
    case "setSearchParam":
      return action.payload;
    case "clearSearchParam":
      return undefined;
    default:
      return state;
  }
};

/////////////

export const initialCity = localStorage.getItem("currentCity") || "Berlin";
export type CityActionType = {
  type: "setCity";
  payload: string;
};
export const cityReducer = (state: string, action: CityActionType) => {
  localStorage.setItem("currentCity", action.payload);
  return action.payload;
};
