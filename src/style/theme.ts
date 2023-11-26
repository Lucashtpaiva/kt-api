import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import "@fontsource-variable/inter";

export const theme = extendTheme(
  {
    fonts: {
      heading: `'inter', sans-serif`,
      body: `'inter', sans-serif`,
    },
    config: {
      initialColorMode: "dark",
      useSystemColorMode: false,
    },

    styles: {
      global: () => ({
        color: "#00ff00",
      }),
    },
  },
  withDefaultColorScheme({ colorScheme: "black" })
);
