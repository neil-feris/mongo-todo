import { AppBar, Toolbar, Typography } from "@mui/material";

// return MUI AppBar component with title centered
const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h4" component="div" >
          What to DO?
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
