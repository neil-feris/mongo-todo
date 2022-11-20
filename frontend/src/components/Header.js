import * as React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Alert,
  AlertTitle,
  Collapse,
  Fade,
  Slide,
  Grow,
  Snackbar,
  IconButton,
  Button,
  LinearProgress,
  Backdrop,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

// return MUI AppBar component with title centered
const Header = () => {
  const [open, setOpen] = React.useState(true);
  return (
    <div className="header">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" component="div">
            What to DO?
          </Typography>
        </Toolbar>
      </AppBar>
      <Fade in={open} easing="ease-in" timeout={300}>
        <Alert
          variant="filled"
          severity="info"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          <AlertTitle>Info</AlertTitle>
          This is a demo app for <strong>What to DO?</strong>
        </Alert>
      </Fade>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Reopen
      </Button>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity="info"
          sx={{ width: "100%" }}
        >
          This is a demo app for <strong>What to DO?</strong>
        </Alert>
      </Snackbar>
      
    </div>
  );
};

export default Header;
