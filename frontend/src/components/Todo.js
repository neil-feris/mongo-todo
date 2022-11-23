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
  return (
    <>
      <Divider />
      <ListItem disablePadding>
        <ListItemButton>
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
