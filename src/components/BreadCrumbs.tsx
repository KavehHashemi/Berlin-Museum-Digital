import { Button, Flex } from "@mantine/core";
import { IconChevronRight, IconSearch, IconX } from "@tabler/icons-react";
import { useContext } from "react";
import {
  CityContext,
  PathContext,
  PathDispatchContext,
  SearchContext,
  SearchDispatchContext,
} from "../context";
import { useNavigate } from "react-router-dom";

type destination = "home" | "inst" | "coll";

const BreadCrumbs = () => {
  const dispatchPath = useContext(PathDispatchContext);
  const dispatchSearchParam = useContext(SearchDispatchContext);
  const { coll, inst, obj } = useContext(PathContext);
  const currentCity = useContext(CityContext);

  const searchParam = useContext(SearchContext);

  const navigate = useNavigate();
  const handleCLick = (destination: destination) => {
    switch (destination) {
      case "home":
        if (dispatchPath) dispatchPath({ type: "clearAll" });
        if (dispatchSearchParam)
          dispatchSearchParam({ type: "clearSearchParam" });
        navigate("/");
        break;
      case "inst":
        if (dispatchPath && inst) {
          dispatchPath({ type: "clearObj" });
          dispatchPath({ type: "clearColl" });
          navigate(`institutions/${inst.id}`);
        }
        break;
      case "coll":
        if (dispatchPath && coll) {
          dispatchPath({ type: "clearObj" });
          navigate(`collections/${coll.id}/${coll.name}`);
        }
        break;
      default:
        break;
    }
  };
  if (inst) {
    return (
      <Flex style={{ padding: "0.2rem 1rem", alignItems: "center" }}>
        {inst && (
          <Button variant="subtle" onClick={() => handleCLick("home")}>
            {currentCity}
          </Button>
        )}
        {inst && (
          <>
            <IconChevronRight size={16}></IconChevronRight>
            <Button variant="subtle" onClick={() => handleCLick("inst")}>
              {inst?.name}
            </Button>
          </>
        )}
        {coll && (
          <>
            <IconChevronRight size={16}></IconChevronRight>
            <Button variant="subtle" onClick={() => handleCLick("coll")}>
              {coll?.name}
            </Button>
          </>
        )}
        {obj && (
          <>
            <IconChevronRight size={16}></IconChevronRight>
            <Button variant="subtle">{obj?.name}</Button>
          </>
        )}
      </Flex>
    );
  }
  if (searchParam) {
    return (
      <Flex style={{ padding: "0.2rem 1rem", alignItems: "center" }}>
        <Button variant="subtle" onClick={() => handleCLick("home")}>
          Home
        </Button>
        <IconSearch style={{ display: "flex" }} size={14}></IconSearch>
        <Button
          variant="subtle"
          rightIcon={<IconX size={14} />}
          onClick={() => handleCLick("home")}
        >
          {searchParam}
        </Button>
      </Flex>
    );
  }
};

export default BreadCrumbs;
