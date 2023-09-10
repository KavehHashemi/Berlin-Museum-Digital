import { ReactNode, createContext, useReducer } from "react";
import { ActionType, PathType, initialPath, reducer } from "./reducer";

export const PathContext = createContext<PathType>({
  institution: null,
  collection: null,
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
