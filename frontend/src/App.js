import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme";
import Header from "./components/Header";
// import Footer from './components/Footer';
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
          {/* <Main />
      <Footer /> */}
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}
