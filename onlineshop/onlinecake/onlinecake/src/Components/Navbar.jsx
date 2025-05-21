import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "black" }}>
      <Toolbar>
        
        <Button color="inherit" component={Link} to="/AddProduct">
          Add Product
        </Button>
        <Button color="inherit" component={Link} to="/AdminViewProduct">
          View Products
        </Button>
        <Button color="inherit" component={Link} to="/AllOrders">
          View Order
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
