import { MantineThemeOverride } from "@mantine/core";

export const themeGenerator = (isLightMode: boolean) => {
  const myTheme: MantineThemeOverride = {
    colorScheme: isLightMode ? "light" : "dark",
    globalStyles: (theme) => ({
      body: {
        backgroundColor: isLightMode ? theme.white : theme.black,
      },
    }),
    components: {
      SimpleGrid: {
        styles: {
          root: {
            padding: "1rem",
            gap: "1.5rem",
          },
        },
      },
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
        },
      },
    },
  };
  return myTheme;
};

// export const DarkTheme: MantineThemeOverride = {
//   colorScheme: "dark",
//   globalStyles: (theme) => ({
//     body: {
//       backgroundColor: theme.black,
//     },
//   }),
//   components: {
//     Header: {
//       styles: {
//         root: {
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           padding: "0 2rem",
//         },
//       },
//     },

//     Card: {
//       variants: {
//         institution: (theme) => ({
//           root: {
//             border: "1px solid",
//             borderColor: theme.colors.dark[7],
//             backgroundColor: theme.colors.dark[8],
//             ...theme.fn.hover({
//               backgroundColor: theme.colors.dark[6],
//               cursor: "pointer",
//             }),
//             ":active": {
//               backgroundColor: theme.colors.gray[2],
//             },
//           },
//         }),
//       },
//     },
//   },
// };

// export const LightTheme: MantineThemeOverride = {
//   colorScheme: "light",
//   globalStyles: (theme) => ({
//     body: {
//       backgroundColor: theme.white,
//     },
//   }),
//   components: {
//     Header: {
//       styles: {
//         root: {
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           padding: "0 2rem",
//         },
//       },
//     },
//   },
// };
