import { Todo } from "./Todo";
// Render a MUI list with the todos
import React from "react";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";

export default function TodoList({ todos }) {
  return (
    <Box sx={{ width: "100%", maxWidth: 480, bgcolor: "background.paper" }}>
      <List aria-label="todos">
        {todos.map((todo) => (
          <Todo key={todo._id} todo={todo} />
        ))}
      </List>
      <Divider />
    </Box>
  );
}
