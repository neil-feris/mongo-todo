// Renders an individual todo using MUI list

import React from "react";
import {
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemIcon,
  Divider,
  Snackbar,
  Alert,
} from "@mui/material";

// icons from MUI
import DeleteIcon from "@mui/icons-material/Delete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

export function Todo({ todo }) {
  const [openSnackBar, setOpenSnackBar] = React.useState(false); // for Snackbar
  const [snackBarMessage, setSnackBarMessage] = React.useState(""); // for Snackbar

  const handleCloseSnackBar = () => {
    setOpenSnackBar(false); // close the snackbar
  };

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
      body: JSON.stringify({ completed: !todo.completed }), //toggle the completed state
    })
      .then((res) => res.json())
      .then((data) => {
        // update todo
        todo.completed = data.completed;
        setSnackBarMessage(
          // set the snackbar message
          !data.completed ? "marked as completed!" : "marked as uncompleted!"
        );
        setOpenSnackBar(true);
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = () => {
    // load token from session storage
    const token = sessionStorage.getItem("token");
    // send a DELETE request to the backend to delete the todo
    fetch(`/api/todos/${todo._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
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
        <ListItemButton onClick={handleDelete}>
          <ListItemIcon>
            <DeleteIcon />
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
      <Snackbar
        open={openSnackBar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={1500}
        onClose={handleCloseSnackBar}
      >
        <Alert severity="success">{snackBarMessage}</Alert>
      </Snackbar>
    </>
  );
}
