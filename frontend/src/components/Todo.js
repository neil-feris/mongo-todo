import React from "react";
import {
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemIcon,
  Divider,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

export function Todo({ todo }) {
  const handleCompleted = () => {
    // load token from session storage
    const token = sessionStorage.getItem("token");
    // send a PUT request to the backend to update the todo
    fetch(`/api/todos/update/${todo._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({ completed: !todo.completed }),
    })
      .then((res) => res.json())
      .then((data) => {
        // update todo 
        todo.completed = data.completed;
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Divider />
      <ListItem disablePadding>
        <ListItemButton onClick={handleCompleted}>
          <ListItemIcon>
            {
              /* if todo.completed */
              todo.completed ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />
            }
          </ListItemIcon>
          <ListItemText
            sx={{
              minWidth: 380,
            }}
            primary={todo.todo}
          />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <DeleteIcon />
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
    </>
  );
}
