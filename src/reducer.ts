import { PathType } from "./Types";

export const initialPath: PathType = {
  inst: undefined,
  coll: undefined,
  obj: undefined,
};

export type ActionType =
  | { type: "setInst"; inst: { id: number; name: string } }
  | { type: "setColl"; coll: { id: number; name: string } }
  | { type: "setObj"; obj: { id: number; name: string } }
  | { type: "clearInst" }
  | { type: "clearColl" }
  | { type: "clearObj" }
  | { type: "clearAll" };

export const reducer = (state: PathType, action: ActionType) => {
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
