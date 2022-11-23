// Renders the main page of the app

import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

import TodoList from "./TodoList";

export default function Main() {
  const [todos, setTodos] = useState([]);
  const [errors, setErrors] = useState(null);

  // check if token is in local storage
  const token = sessionStorage.getItem("token");
  // if it is not, redirect to login page

  // if (!token) {
  //   // render link to login page
  //   return <Navigate to="/login" />;
  // }

  useEffect(() => {
    // fetch the todo list from the backend
    fetch("/api/todos", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data: ", data);
        setTodos(data);
      });
  }, []);

  // if it is, render the TodoList component
  return (
    <Container>
      <Typography variant="h1" textAlign={"center"}>Your Todo List</Typography>
      <Box sx={{display:"flex", alignItems:"center", justifyContent: "center"}}>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                
                label="Add a todo"
                name="todo"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <Button size="small" color="primary"  type="submit" variant="contained">
                Add Todo
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
      <Box sx={{display:"flex", alignItems:"center", justifyContent: "center"}}>
        { todos && <TodoList todos={todos} /> }
      </Box>
    </Container>
  );
}