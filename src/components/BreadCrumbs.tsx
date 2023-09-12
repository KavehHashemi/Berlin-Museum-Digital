import { Button, Flex } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import { useContext } from "react";
import { PathContext, PathDispatchContext } from "../context";
import { useNavigate } from "react-router-dom";
// import { PathType } from "../Types";

type destination = "home" | "inst" | "coll";

const BreadCrumbs = () => {
  const dispatch = useContext(PathDispatchContext);
  const { coll, inst, obj } = useContext(PathContext);

  const navigate = useNavigate();
  const handleCLick = (destination: destination) => {
    switch (destination) {
      case "home":
        if (dispatch) dispatch({ type: "clearAll" });
        navigate("/");
        break;
      case "inst":
        if (dispatch && inst) {
          dispatch({ type: "clearObj" });
          dispatch({ type: "clearColl" });
          navigate(`institutions/${inst.id}`);
        }
        break;
      case "coll":
        if (dispatch && coll) {
          dispatch({ type: "clearObj" });
          navigate(`collections/${coll.id}/${coll.name}`);
        }
        break;
      default:
        break;
    }
  };
  return (
    <Flex style={{ padding: "0.2rem 1rem", alignItems: "center" }}>
      {inst && (
        // <IconGridDots
        //   size="16"
        //   height={34}
        //   onClick={() => handleCLick("home")}
        // ></IconGridDots>
        <Button variant="subtle" onClick={() => handleCLick("home")}>
          Home
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
};

export default BreadCrumbs;
