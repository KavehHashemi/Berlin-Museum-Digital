import { ReactNode, createContext, useReducer } from "react";
import {
  CityActionType,
  PathActionType,
  SearchActionType,
  SearchStateType,
  cityReducer,
  initialCity,
  initialPath,
  initialSearchParam,
  pathReducer,
  searchReducer,
} from "./reducer";
import { PathType } from "./Types";

///////PATH CONTEXT
export const PathContext = createContext<PathType>({
  inst: undefined,
  coll: undefined,
  obj: undefined,
});
export const PathDispatchContext =
  createContext<React.Dispatch<PathActionType> | null>(null);
type props = {
  children: ReactNode;
};
export const PathProvider = ({ children }: props) => {
  const [path, dispatch] = useReducer(pathReducer, initialPath);
  return (
    <PathContext.Provider value={path}>
      <PathDispatchContext.Provider value={dispatch}>
        {children}
      </PathDispatchContext.Provider>
    </PathContext.Provider>
  );
};
///////SEARCH CONTEXT
export const SearchContext = createContext<SearchStateType>(undefined);
export const SearchDispatchContext =
  createContext<React.Dispatch<SearchActionType> | null>(null);

export const SearchProvider = ({ children }: props) => {
  const [searchParam, dispatch] = useReducer(searchReducer, initialSearchParam);
  return (
    <SearchContext.Provider value={searchParam}>
      <SearchDispatchContext.Provider value={dispatch}>
        {children}
      </SearchDispatchContext.Provider>
    </SearchContext.Provider>
  );
};
///////CITY CONTEXT
export const CityContext = createContext<string>("berlin");
export const CityDispatchContext =
  createContext<React.Dispatch<CityActionType> | null>(null);
export const CityProvider = ({ children }: props) => {
  const [city, dispatch] = useReducer(cityReducer, initialCity);
  return (
    <CityContext.Provider value={city}>
      <CityDispatchContext.Provider value={dispatch}>
        {children}
      </CityDispatchContext.Provider>
    </CityContext.Provider>
  );
};
