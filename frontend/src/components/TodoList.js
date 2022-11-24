// Render a MUI list with the todos
import React from "react";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";

import { Todo } from "./Todo";

export default function TodoList({ todos }) {
  if (!todos.length) {
    // if there are no todos to display
    return <h3>No Todos Yet</h3>;
  }
  return (
    <Box sx={{ width: "100%", maxWidth: 480, bgcolor: "background.paper" }}>
      <List aria-label="todos">
        {todos.map(
          (
            todo // map through the todos
          ) => (
            <Todo key={todo._id} todo={todo} /> // render a todo
          )
        )}
      </List>
      <Divider />
    </Box>
  );
}
