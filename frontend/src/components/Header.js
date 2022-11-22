import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Alert,
  AlertTitle,
  Collapse,
  Fade,
  Slide,
  Grow,
  Snackbar,
  IconButton,
  Button,
  LinearProgress,
  Backdrop,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

// return MUI AppBar component with title centered
const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [openSnackBar, setOpenSnackBar] = React.useState(true); // for Snackbar
  const [openAlert, setOpenAlert] = React.useState(true); // for Alert
  const navigate = useNavigate();

  const handleLogin = () => {
    if (loggedIn) {
      // setLoggedIn(false);
      sessionStorage.removeItem("token"); // remove token from session storage
      console.log("navigate to login page", loggedIn);
      navigate("/login");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="header">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            What to DO?
          </Typography>
          {/* if loggedIn */}
          {loggedIn ? (
            <Button color="inherit" onClick={handleLogin}>
              Login
            </Button>
          ) : (
            <Button color="inherit" onClick={handleLogin}>
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Fade in={openAlert} easing="ease-in" timeout={300}>
        <Alert
          variant="filled"
          severity="info"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpenAlert(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          <AlertTitle>Info</AlertTitle>
          This is a demo app for <strong>What to DO?</strong>
        </Alert>
      </Fade>

      <Snackbar
        open={openSnackBar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackBar(false)}
      >
        <Alert
          onClose={() => setOpenSnackBar(false)}
          severity="info"
          sx={{ width: "100%" }}
        >
          This is a demo app for <strong>What to DO?</strong>
        </Alert>
      </Snackbar>
      <Button variant="contained" onClick={() => setOpenSnackBar(true)}>
        Reopen
      </Button>
    </div>
  );
};

export default Header;
