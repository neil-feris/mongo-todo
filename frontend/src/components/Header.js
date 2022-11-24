// Renders the top navigation bar

import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Header = () => {
  const [authenticated, setAuthenticated] = useState(false);

  const navigate = useNavigate();
  const token = sessionStorage.getItem("token"); // get the token from session storage

  useEffect(() => {
    // check if user is authenticated
    if (token) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
      navigate("/login"); // redirect to login page if not authenticated
    }
  }, [authenticated, token, navigate]);

  const handleLogin = () => {
    // handle login/signup button click
    if (authenticated) {
      setAuthenticated(false); // set authenticated to false
      sessionStorage.removeItem("token"); // remove token from session storage
    }
    navigate("/login"); // navigate to login page
  };

  return (
    <div className="header">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              What to DO?
            </Link>
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
