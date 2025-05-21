import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import './styles.css';

const NavbarComponent = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "black", padding: "10px" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold", color: "white" }}>
          CAKE FARM
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
        <Button component={Link} to="/adminlogin" sx={navButtonStyle}>
            Admin Login
          </Button>
          <Button component={Link} to="/login" sx={navButtonStyle}>
           User Login
          </Button>
          <Button component={Link} to="/signup" sx={navButtonStyle}>
            Sign Up
          </Button>
          {/* <Button component={Link} to="/cakedetail" sx={navButtonStyle}>
            cakedetail
          </Button> */}
          <Button component={Link} to="/logout" sx={navButtonStyle}>
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
    
  );
};

const navButtonStyle = {
  color: "white",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#444d56",
  },


  
};



export default NavbarComponent;
