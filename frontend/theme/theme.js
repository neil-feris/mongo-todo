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
    MuiCardHeader: {
      styleOverrides: {
        root: {
          backgroundColor: "#f5f5f5",
        },
        title: {
          fontFamily: "Sriracha",
          fontWeight: 500,
        },
        subheader: {
          fontFamily: "Roboto Mono",
          fontWeight: 500,
        },
      },
    },
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
