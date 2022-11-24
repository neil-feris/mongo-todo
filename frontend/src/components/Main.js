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
  const [newTodo, setNewTodo] = useState("");
  const [errors, setErrors] = useState(null);

  // check if token is in local storage
  const token = sessionStorage.getItem("token");

  useEffect(() => {
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
  }, [todos]);

  const handleAddTodo = (e) => {
    e.preventDefault();
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
    setNewTodo(e.target.value);
  };

  // if it is, render the TodoList component
  return (
    <Container>
      <Typography variant="h1" textAlign={"center"}>
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
                value={newTodo}
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
        {todos && <TodoList todos={todos} />}
      </Box>
    </Container>
  );
}
