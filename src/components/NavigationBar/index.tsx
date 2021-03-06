import "./index.css";
import * as React from "react";
import {
  Typography,
  AppBar,
  Box,
  Toolbar,
  IconButton,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

/**
 * navigation bar elements
 * @returns NavigationBar UI elements
 */
const NavigationBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className="navbar" position="static">
        <Toolbar variant="dense">
          <IconButton>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            <Link to={`/`}>ChambaSoft</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavigationBar;