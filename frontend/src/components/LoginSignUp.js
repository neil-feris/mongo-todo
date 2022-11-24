// Renders a MUI login form and a signup form
//
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Grid,
  FormControl,
  InputLabel,
  Input,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";

export default function LoginSignUp() {
  const [isLogin, setIsLogin] = useState(true); // state to check if user is logging in or signing up
  const [error, setError] = useState(null);
  const [credentials, setCredentials] = useState({
    // state to store username and password
    username: "",
    password: "",
  });

  const [open, setOpen] = useState(false); // state to check if snackbar is open

  const navigate = useNavigate(); // hook to navigate to different routes

  const handleChanges = (e) => {
    setCredentials({
      ...credentials, // spread the existing credentials
      [e.target.name]: e.target.value, // update the state with the new values
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError(null); // reset the error
    // check whether the user is logging in or signing up
    if (isLogin) {
      // login
      // fetch to login endpoint with credentials
      fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      })
        .then((res) => res.json()) // convert response to json
        .then((data) => {
          if (data.error) {
            // if there is an error
            setError(data.error); // set the error
            return; // return
          }
          // save token to local storage
          sessionStorage.setItem("token", data.token);

          // navigate to the homepage
          navigate("/");
        });
    } else {
      // sign up
      // fetch to signup endpoint
      fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      })
        .then((res) => res.json()) // convert response to json
        .then((data) => {
          if (data.error) {
            // if there is an error
            setError(data.error); // set the error
            return;
          }

          // set snackbar to open
          setOpen(true);

          // navigate to the login page
          setIsLogin(true);
          navigate("/login");
        })
        .catch((err) => {
          console.log("Setting error", err);
          setError(err.message);
        });
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 8,
        }}
      >
        <Typography component="h1" variant="h5">
          {
            isLogin
              ? "Login"
              : "Sign Up" /* check if user is logging in or signing up */
          }
        </Typography>
        <Box
          component="form"
          noValidate
          sx={{
            mt: 1,
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel htmlFor="username">Username</InputLabel>
                <Input
                  id="username"
                  type="text"
                  name="username"
                  aria-describedby="username-helper-text"
                  onChange={handleChanges}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  aria-describedby="password-helper-text"
                  onChange={handleChanges}
                />
              </FormControl>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
            }}
            onClick={handleLogin}
          >
            {
              isLogin
                ? "Login"
                : "Sign Up" /* check if user is logging in or signing up */
            }
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to="#" variant="body2" onClick={() => setIsLogin(!isLogin)}>
                {
                  isLogin
                    ? "Don't have an account? Sign Up"
                    : "Already have an account? Login" /* check if user is logging in or signing up */
                }
              </Link>
            </Grid>
            {error && (
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Typography variant="body2" color="error">
                    {error /* display error if there is one */}
                  </Typography>
                </Grid>
              </Grid>
            )}
          </Grid>
        </Box>
      </Box>
      {/* Snackbar to cue user that account was created */}
      <Snackbar
        open={open}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={4000}
        onClose={() => setOpen(false)}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity="info"
          sx={{ width: "100%" }}
        >
          Account created successfully! Log in to continue.
        </Alert>
      </Snackbar>
    </Container>
  );
}
