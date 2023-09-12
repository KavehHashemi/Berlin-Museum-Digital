/* eslint-disable @typescript-eslint/no-unused-vars */
import { Header, Text, Popover, Flex } from "@mantine/core";
import {
  IconCircleLetterB,
  IconSun,
  IconPointFilled,
} from "@tabler/icons-react";

import "../styles/navbar.css";
import { useContext } from "react";
import { PathContext } from "../context";
import BreadCrumbs from "./BreadCrumbs";

type NavBarProps = {
  lightMode: boolean;
  setMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar = ({ setMode, lightMode }: NavBarProps) => {
  // const path = useContext(PathContext);
  return (
    <>
      <Header height={60}>
        <Popover width={200} position="bottom" withArrow shadow="md">
          <Popover.Target>
            <IconCircleLetterB></IconCircleLetterB>
          </Popover.Target>
          <Popover.Dropdown>other cities</Popover.Dropdown>
        </Popover>
        <Text size={"lg"} weight={"bolder"}>
          Museum Digital
        </Text>
        <IconSun onClick={() => setMode(!lightMode)}></IconSun>
      </Header>
      {/* <Flex
        gap={"1rem"}
        style={{ backgroundColor: "#000033", paddingBlock: "0.2rem" }}
      > */}
      <BreadCrumbs
      // inst={path.inst}
      // coll={path.coll}
      // obj={path.obj}
      ></BreadCrumbs>
      {/* </Flex> */}
    </>
  );
};

export default Navbar;
