import { Flex, MantineThemeOverride } from "@mantine/core";

export const themeGenerator = (isLightMode: boolean) => {
  const myTheme: MantineThemeOverride = {
    colorScheme: isLightMode ? "light" : "dark",
    // primaryShade: { dark: 1, light: 9 },
    globalStyles: (theme) => ({
      body: {
        backgroundColor: isLightMode ? theme.white : theme.black,
      },
    }),
    components: {
      List: {
        styles: (theme) => ({
          item: {
            paddingInline: "1rem",
            paddingBlock: "0.3rem",
            ":hover": {
              backgroundColor: isLightMode
                ? theme.colors.cyan[2]
                : theme.colors.cyan[9],
              cursor: "pointer",
            },
          },
        }),
      },
      Popover: {
        styles: {
          root: {},
          dropdown: {
            paddingInline: 0,
          },
        },
      },
      SimpleGrid: {
        styles: {
          root: {
            padding: "1rem",
            gap: "1.5rem",
          },
        },
        variants: {
          between: () => ({
            root: {
              gridTemplateColumns: "1fr 20%",
            },
          }),
        },
      },
      Header: {
        styles: {
          root: {
            display: "grid",
            gridTemplateColumns: "20% 60% 20%",
            justifyContent: "center",
            alignItems: "center",
            padding: "0 2rem",
          },
        },
      },
      TextInput: {
        styles: {
          root: {
            width: "25vw",
          },
        },
      },
      Card: {
        variants: {
          institution: (theme) => ({
            root: {
              padding: "1.25rem",
              backgroundColor: isLightMode
                ? theme.colors.gray[2]
                : theme.colors.dark[8],
              ...theme.fn.hover({
                backgroundColor: isLightMode
                  ? theme.colors.gray[1]
                  : theme.colors.dark[6],
                cursor: "pointer",
              }),
              ":active": {
                backgroundColor: theme.colors.gray[2],
              },
            },
          }),
          collection: (theme) => ({
            root: {
              padding: "0 1rem 1rem !important",
              backgroundColor: isLightMode
                ? theme.colors.gray[2]
                : theme.colors.dark[8],
              ...theme.fn.hover({
                backgroundColor: isLightMode
                  ? theme.colors.gray[1]
                  : theme.colors.dark[6],
                cursor: "pointer",
              }),
              ":active": {
                backgroundColor: theme.colors.gray[2],
              },
            },
          }),
          object: (theme) => ({
            root: {
              padding: "1.25rem !important",
              display: "Flex",
              flexDirection: "column",
              justifyContent: "start",
              alignItems: "center",
              gap: "1rem",
              backgroundColor: isLightMode
                ? theme.colors.gray[2]
                : theme.colors.dark[8],
              ...theme.fn.hover({
                backgroundColor: isLightMode
                  ? theme.colors.gray[1]
                  : theme.colors.dark[6],
                cursor: "pointer",
              }),
              ":active": {
                backgroundColor: theme.colors.gray[2],
              },
            }
          }),
          detailed: (theme) => ({
            root: {
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              alignItems: "center",
              backgroundColor: isLightMode
                ? theme.colors.gray[2]
                : theme.colors.dark[8],
              ...theme.fn.hover({
                backgroundColor: isLightMode
                  ? theme.colors.gray[1]
                  : theme.colors.dark[6],
                cursor: "pointer",
              }),
              ":active": {
                backgroundColor: theme.colors.gray[2],
              },
            }
          })
        },
      },
      Group: {
        variants: {
          between: () => ({
            root: {
              justifyContent: "space-between",
              marginBottom: "1rem",
            },
          }),
        },
      },

      Button: {
        variants: {
          city: (theme) => ({
            root: {
              width: "fit-content",
              display: "flex",
              ":active": { transform: "none" },
              ":hover": {
                backgroundColor: isLightMode
                  ? theme.fn.darken(theme.fn.rgba("#0099ff", 0.1), 0.1)
                  : theme.fn.lighten(theme.fn.rgba("#0099ff", 0.2), 0.1),
              },
            },
          }),
        },
      },
    },
  };
  return myTheme;
};
