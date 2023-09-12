import { ReactNode, createContext, useReducer } from "react";
import { ActionType, initialPath, reducer } from "./reducer";
import { PathType } from "./Types";

export const PathContext = createContext<PathType>({
  inst: undefined,
  coll: undefined,
  obj: undefined,
});

export const PathDispatchContext =
  createContext<React.Dispatch<ActionType> | null>(null);

type props = {
  children: ReactNode;
};

export const PathProvider = ({ children }: props) => {
  const [path, dispatch] = useReducer(reducer, initialPath);
  return (
    <PathContext.Provider value={path}>
      <PathDispatchContext.Provider value={dispatch}>
        {children}
      </PathDispatchContext.Provider>
    </PathContext.Provider>
  );
};
