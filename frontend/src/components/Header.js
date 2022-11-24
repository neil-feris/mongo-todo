import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

// return MUI AppBar component with title centered
const Header = () => {
  const [authenticated, setAuthenticated] = useState(false);

  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    // check if user is authenticated
    if (token) {
      setAuthenticated(true);

      console.log("authenticated");
    } else {
      setAuthenticated(false);
      console.log("not authenticated");
    }
  }, [authenticated, token]);

  const handleLogin = () => {
    if (authenticated) {
      setAuthenticated(false);
      sessionStorage.removeItem("token"); // remove token from session storage

      console.log("navigate to login page", authenticated);
      navigate("/login");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="header">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            What to DO?
          </Typography>
          {/* if authenticated */}
          {authenticated ? (
            <Button color="inherit" onClick={handleLogin}>
              Logout
            </Button>
          ) : (
            <Button color="inherit" onClick={handleLogin}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
