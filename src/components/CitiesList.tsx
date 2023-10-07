import { List } from "@mantine/core";
import {
  CityDispatchContext,
  PathDispatchContext,
  SearchDispatchContext,
} from "../context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

type props = {
  cities: string[];
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
};

const CitiesList = ({ cities, setOpened }: props) => {
  const dispatchPath = useContext(PathDispatchContext);
  const dispatchSearchParam = useContext(SearchDispatchContext);
  const navigate = useNavigate();
  const dispatch = useContext(CityDispatchContext);

  const handleClick = (city: string) => {
    setOpened(false);
    if (dispatchPath) dispatchPath({ type: "clearAll" });
    if (dispatchSearchParam) dispatchSearchParam({ type: "clearSearchParam" });
    navigate("/");
    if (dispatch) dispatch({ type: "setCity", payload: city });
  };
  return (
    <List listStyleType="none">
      {cities.map((ct, i) => {
        return (
          <List.Item key={i} onClick={() => handleClick(ct)}>
            {ct}
          </List.Item>
        );
      })}
    </List>
  );
};

export default CitiesList;
