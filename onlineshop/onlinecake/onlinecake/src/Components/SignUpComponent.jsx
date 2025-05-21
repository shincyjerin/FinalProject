import { Box, Button, TextField, Typography, Paper } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUpComponent = () => {
  const [formData, setFormData] = useState({
    username: "",
    useremail: "",
    userpassword: "",
    usermobile: "",
    useraddress: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async () => {
    try {
      const response = await axios.post("https://localhost:7111/api/User_registration/User_register", formData);
      if (response.status === 200) {
        navigate("/login"); // Redirect to login page after successful signup
      }
    } catch (err) {
      setError("Failed to register. Please try again.");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "white",
      }}
    >
      <Paper elevation={8} sx={{ padding: 4, maxWidth: 400, textAlign: "center", borderRadius: 2, backgroundColor: "#363636", color: "white" }}>
        <Typography variant="h4" component="h1" gutterBottom>Sign Up</Typography>

        <TextField fullWidth required label="Username" name="username" value={formData.username} onChange={handleChange} margin="normal" sx={textFieldStyle} />
        <TextField fullWidth required label="Email" name="useremail" value={formData.useremail} onChange={handleChange} margin="normal" sx={textFieldStyle} />
        <TextField fullWidth required label="Password" type="password" name="userpassword" value={formData.userpassword} onChange={handleChange} margin="normal" sx={textFieldStyle} />
        <TextField fullWidth required label="Mobile Number" name="usermobile" value={formData.usermobile} onChange={handleChange} margin="normal" sx={textFieldStyle} />
        <TextField fullWidth required label="Address" name="useraddress" value={formData.useraddress} onChange={handleChange} margin="normal" sx={textFieldStyle} />

        {error && <Typography color="error" sx={{ marginTop: 2 }}>{error}</Typography>}

        <Button
          variant="contained"
          fullWidth
          sx={{ marginTop: 3, backgroundColor: "#007bff", color: "white", "&:hover": { backgroundColor: "#0056b3" } }}
          onClick={handleSignup}
        >
          Sign Up
        </Button>
      </Paper>
    </Box>
  );
};

const textFieldStyle = {
  "& .MuiInputBase-root": { color: "white" },
  "& .MuiInputLabel-root": { color: "white" },
  "& .MuiOutlinedInput-root": {
    "& fieldset": { borderColor: "#ffffff" },
    "&:hover fieldset": { borderColor: "#007bff" },
    "&.Mui-focused fieldset": { borderColor: "#007bff" },
  },
};

export default SignUpComponent;
