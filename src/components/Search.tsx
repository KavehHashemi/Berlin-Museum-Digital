/* eslint-disable @typescript-eslint/no-unused-vars */
import { ActionIcon, Center, TextInput, useMantineTheme } from "@mantine/core";
import { IconArrowRight, IconSearch } from "@tabler/icons-react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const theme = useMantineTheme();
  const navigate = useNavigate();
  const ref = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    navigate(`search/${ref.current?.value}`);
  };
  return (
    <Center style={{ paddingBlock: "0.5rem" }}>
      <TextInput
        icon={<IconSearch size="1.1rem" stroke={1.5} />}
        radius="xl"
        size="sm"
        rightSection={
          <ActionIcon
            size={32}
            radius="xl"
            color={theme.primaryColor}
            variant="subtle"
            onClick={handleClick}
          >
            <IconArrowRight size="1.1rem" stroke={1.5} />
          </ActionIcon>
        }
        placeholder="Objeckte Suchen"
        rightSectionWidth={42}
        ref={ref}
      />
    </Center>
  );
};

export default Search;
