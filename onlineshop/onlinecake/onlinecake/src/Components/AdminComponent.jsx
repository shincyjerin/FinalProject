import { Box, Button, TextField, Typography, Paper } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminComponent = () => {
  const [username, setUsername] = useState("");
  const [userpassword, setUserPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("https://localhost:7111/api/User_registration/Admin_login", 
        {
          username,
          userpassword
        },
        {
          headers: { "Content-Type": "application/json" }
        }
      );

      if (response.status === 200) {
        sessionStorage.setItem("userId", response.data.userId); // Store session
        navigate("/AllOrders"); // Redirect after successful login
      }
    } catch (err) {
      if (err.response && err.response.status === 400) {
        setError("Invalid username or password. Please check your details.");
      } else {
        setError("Server error. Try again later.");
      }
    }
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "white" }}>
      <Paper elevation={8} sx={{ padding: 4, maxWidth: 400, textAlign: "center", borderRadius: 2, backgroundColor: "#363636", color: "white" }}>
        <Typography variant="h4" gutterBottom>Admin Login</Typography>

        <TextField fullWidth required label="Username" value={username} onChange={(e) => setUsername(e.target.value)} margin="normal" />
        <TextField fullWidth required label="Password" type="password" value={userpassword} onChange={(e) => setUserPassword(e.target.value)} margin="normal" />

        {error && <Typography color="error">{error}</Typography>}

        <Button variant="contained" fullWidth sx={{ marginTop: 3, backgroundColor: "#007bff", color: "white" }} onClick={handleLogin}>
          Login
        </Button>
      </Paper>
    </Box>
  );
};

export default AdminComponent;
