import { Header, Text, Popover, Center, Button } from "@mantine/core";
import { IconSun, IconMoon, IconChevronDown } from "@tabler/icons-react";

import "../styles/navbar.css";
import { useContext, useEffect } from "react";
import BreadCrumbs from "./BreadCrumbs";
import { CityNames } from "../Types";
import CitiesList from "./CitiesList";
import { CityContext } from "../context";

type NavBarProps = {
  lightMode: boolean;
  setMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar = ({ setMode, lightMode }: NavBarProps) => {
  const currentCity = useContext(CityContext);

  useEffect(() => {
    localStorage.setItem("isLightMode", lightMode ? "light" : "dark");
  }, [lightMode]);

  const citiesArray = [];
  for (const ct in CityNames) {
    citiesArray.push(ct);
  }

  return (
    <>
      <Header height={60}>
        <Popover
          width={"auto"}
          position="bottom-start"
          withArrow
          arrowPosition="center"
          shadow="md"
        >
          <Popover.Target>
            <Button
              rightIcon={<IconChevronDown size={14}></IconChevronDown>}
              variant="city"
            >
              {currentCity}
            </Button>
          </Popover.Target>
          <Popover.Dropdown>
            <CitiesList cities={citiesArray}></CitiesList>
          </Popover.Dropdown>
        </Popover>
        <Text size={"lg"} weight={"bolder"} align="center">
          Museum Digital
        </Text>
        <Center
          style={{ justifyContent: "end" }}
          onClick={() => setMode(!lightMode)}
        >
          {lightMode ? <IconMoon></IconMoon> : <IconSun></IconSun>}
        </Center>
      </Header>
      <BreadCrumbs></BreadCrumbs>
    </>
  );
};

export default Navbar;
