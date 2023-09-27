import { List } from "@mantine/core";
import { CityDispatchContext } from "../context";
import { useContext } from "react";

type props = {
  cities: string[];
};

const CitiesList = ({ cities }: props) => {
  const dispatch = useContext(CityDispatchContext);

  const handleClick = (city: string) => {
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
