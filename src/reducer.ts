export type PathType = {
  institution: string | null;
  collection: string | null;
};

export const initialPath: PathType = {
  institution: null,
  collection: null,
};

export type ActionType =
  | { type: "setInst"; inst: string }
  | { type: "setColl"; coll: string }
  | { type: "clearInst" }
  | { type: "clearColl" }
  | { type: "clearAll" };

export const reducer = (state: PathType, action: ActionType) => {
  switch (action.type) {
    case "setInst":
      return { ...state, institution: action.inst };
    case "setColl":
      return { ...state, collection: action.coll };
    case "clearInst":
      return { ...state, institution: null };
    case "clearColl":
      return { ...state, collection: null };
    case "clearAll":
      return { ...state, institution: null, collection: null };
    default:
      return state;
  }
};
