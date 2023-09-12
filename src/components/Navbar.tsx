/* eslint-disable @typescript-eslint/no-unused-vars */
import { Header, Text, Popover, Flex, Button, Center } from "@mantine/core";
import { IconCircleLetterB, IconSun, IconMoon } from "@tabler/icons-react";

import "../styles/navbar.css";
import { useContext, useEffect } from "react";
import { PathContext } from "../context";
import BreadCrumbs from "./BreadCrumbs";

type NavBarProps = {
  lightMode: boolean;
  setMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar = ({ setMode, lightMode }: NavBarProps) => {
  useEffect(() => {
    localStorage.setItem("isLightMode", lightMode ? "light" : "dark");
  }, [lightMode]);

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
        <Center onClick={() => setMode(!lightMode)}>
          {lightMode ? <IconMoon></IconMoon> : <IconSun></IconSun>}
        </Center>
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
