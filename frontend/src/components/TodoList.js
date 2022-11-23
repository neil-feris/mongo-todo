// Render a MUI list with the todos
import React from "react";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

import DeleteIcon from "@mui/icons-material/Delete";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
export default function TodoList({ todos }) {
  return (
    <Box sx={{ width: "100%", maxWidth: 480, bgcolor: "background.paper" }}>
      <List component="nav" aria-label="todos">
        {todos.map((todo) => (
          <>
            <Divider />
            <ListItem key={todo._id} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <FormatListBulletedIcon />
                </ListItemIcon>
                <ListItemText sx={{ minWidth: 380 }} primary={todo.todo} />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <DeleteIcon />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </>
        ))}
      </List>
      <Divider />
    </Box>
  );
}
