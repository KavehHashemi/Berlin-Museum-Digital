import { MantineThemeOverride } from "@mantine/core";

export const myTheme: MantineThemeOverride = {
  colorScheme: "dark",
  components: {
    Header: {
      styles: {
        root: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 2rem",
        },
      },
    },
  },
};
