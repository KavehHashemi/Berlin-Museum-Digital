import { MantineThemeOverride } from "@mantine/core";

export const DarkTheme: MantineThemeOverride = {
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

export const LightTheme: MantineThemeOverride = {
  colorScheme: "light",
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
