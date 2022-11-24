import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// Some Custom Theming for Material UI Components

import { createTheme } from "@mui/material/styles";
import { cyan, deepPurple, pink, lime } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: deepPurple,
    secondary: cyan,
    error: pink,
    success: lime,
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        body2: {
          fontFamily: "Roboto Mono, monospace",
        },
        h6: {
          fontFamily: "Sriracha",
          fontWeight: 500,
        },
        h5: {
          fontFamily: "Sriracha",
          fontWeight: 500,
        },
        h4: {
          fontFamily: "Sriracha",
          fontWeight: 500,
        },
        h3: {
          fontFamily: "Sriracha",
          fontWeight: 500,
        },
        h2: {
          fontFamily: "Sriracha",
          fontSize: "4.5rem",
          fontWeight: 500,
          color: deepPurple[500],
        },
        h1: {
          fontFamily: "Sriracha",
          fontWeight: 500,
          color: deepPurple[500],
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "Roboto Mono",
          fontWeight: 500,
        },
      },
    },
  },
});
