import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme";
import Header from "./components/Header";
// import Footer from './components/Footer';
// import Main from './components/Main';

import "./App.css";

export default function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
      <Header />
      {/* <Main />
      <Footer /> */}
      </ThemeProvider>
    </>
  );
}
