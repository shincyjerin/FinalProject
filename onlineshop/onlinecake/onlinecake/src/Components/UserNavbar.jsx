import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import UserNavbar from '../Components/UserNavbar';

const MainComponent = () => {
  return (
    <>
      <UserNavbar />
      <AppBar position="static" sx={{ backgroundColor: "#007bff" }}>
        <Toolbar>
          <Button color="inherit" component={Link} to="/cakedetail">
            View Products
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default MainComponent;
