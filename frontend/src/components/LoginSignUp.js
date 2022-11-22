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
} from "@mui/material";

export default function LoginSignUp() {
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState(null);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChanges = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError(null);
    // check whether the user is logging in or signing up
    if (isLogin) {
      // login
      console.log("logging in", credentials);
      // fetch to login endpoint
      fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            setError(data.error);
            return;
          }
          console.log("data: ", data);
          // save token to local storage
          sessionStorage.setItem("token", data.token);
          // navigate to the homepage
          console.log("navigate to homepage");

          navigate("/");
        });
    } else {
      // sign up
      console.log("signing up", credentials);
      // fetch to signup endpoint
      fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
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
          {isLogin ? "Login" : "Sign Up"}
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
            {isLogin ? "Login" : "Sign Up"}
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to="#" variant="body2" onClick={() => setIsLogin(!isLogin)}>
                {isLogin
                  ? "Don't have an account? Sign Up"
                  : "Already have an account? Login"}
              </Link>
            </Grid>
            {error && (
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Typography variant="body2" color="error">
                    {error}
                  </Typography>
                </Grid>
              </Grid>
            )}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
