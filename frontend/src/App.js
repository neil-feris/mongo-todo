// import React
import React from "react";
// import router components from react-router-dom
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import cssbaseline to reset browser styles
import CssBaseline from "@mui/material/CssBaseline";
// import components for custom theme
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme";

// import components
import Header from "./components/Header";
import Main from "./components/Main";
import LoginSignUp from "./components/LoginSignUp";

import "./App.css";

export default function App() {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Header />
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/login" element={<LoginSignUp />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}
