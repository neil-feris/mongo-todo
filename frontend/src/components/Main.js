// Renders the main page of the app

import React, { useState, useEffect } from "react";
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
  const [todos, setTodos] = useState([]); // state to store todos
  const [newTodo, setNewTodo] = useState(""); // state to store new todo
  const [errors, setErrors] = useState(null);

  // check if token is in local storage
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    if (token) {
      // fetch the todo list from the backend
      fetch("/api/todos", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setTodos(data);
        });
    }
  }, [todos, token]); // run the effect when todos or token changes

  const handleAddTodo = (e) => {
    e.preventDefault();
    // if not logged in, show error
    if (!token) {
      setErrors("You must be logged in to add a todo");
      return;
    }

    // if the todo is empty, return
    if (!newTodo) return;

    // send a POST request to the backend to add a new todo
    fetch("/api/todos/add/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({ todo: newTodo }),
    })
      .then((res) => res.json())
      .then((data) => {
        // data is the new todo
        if (data.errors) {
          setErrors(data.errors);
        } else {
          setTodos([...todos, data]);
          setNewTodo("");
        }
      });
  };

  const handleChange = (e) => {
    setNewTodo(e.target.value); // update the state with the new value
  };

  // if it is, render the TodoList component
  return (
    <Container>
      <Typography variant="h2" textAlign={"center"}>
        Your Todo List
      </Typography>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12} sx={{ mb: 2 }}>
              <TextField
                label="Add a todo"
                name="addTodo"
                value={newTodo} // bind the value to the state
                onChange={handleChange}
                onSubmit={handleAddTodo}
                variant="outlined"
              />
              <Button
                sx={{ ml: 2, mt: 1 }}
                color="primary"
                size="large"
                type="submit"
                variant="contained"
                onClick={handleAddTodo}
              >
                Add Todo
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        {
          token && todos && (
            <TodoList todos={todos} />
          ) /* render the TodoList component if user is logged in and there are todos*/
        }
      </Box>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        {errors /* show errors if there are any */ && (
          <Typography variant="h6" color="error">
            {errors}
          </Typography>
        )}
      </Box>
    </Container>
  );
}
