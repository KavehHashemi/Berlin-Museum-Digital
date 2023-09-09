import { Header, Text, Popover } from "@mantine/core";
import { IconCircleLetterB, IconSun } from "@tabler/icons-react";

import "../styles/navbar.css";

const Navbar = () => {
  return (
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
      <IconSun></IconSun>
    </Header>
  );
};

export default Navbar;
