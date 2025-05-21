import { Box, Button, TextField, Typography, Paper } from "@mui/material";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const BookingComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedCake = location.state?.cake;

  if (!selectedCake) {
    return <Typography variant="h6" color="error" sx={{ textAlign: "center", marginTop: 4 }}>Invalid cake selection.</Typography>;
  }

  const [orderData, setOrderData] = useState({
    productId: selectedCake?.cake_id || "", // Changed from 'product_id'
    quantity: 1,
    message: "",
    address: "",
    userId: sessionStorage.getItem("userId") || "", // Get logged-in user ID
    deliveryDate: "", // Changed from 'delivery_date'
    totalAmount: selectedCake.price || 0, // Changed from 'total_amount'
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderData((prevData) => ({
      ...prevData,
      [name]: value,
      ...(name === "quantity" && selectedCake ? { totalAmount: selectedCake.price * value } : {}),
    }));
  };

  const handleOrder = async () => {
    try {
      const response = await axios.post("https://localhost:7111/api/User_registration/ADD_order", orderData);
      if (response.status === 200) {
        setSuccess("Order placed successfully!");
        navigate("/ViewMyDetails"); // Redirect after successful order
      }
    } catch (error) {
      setError(`Failed to place order. Error: ${error.response?.data?.message || "Please try again."}`);
    }
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", backgroundColor: "#f5f5f5" }}>
      <Paper elevation={6} sx={{ padding: 4, maxWidth: 400, textAlign: "center", borderRadius: 2 }}>
        <Typography variant="h4" gutterBottom>Order Your Cake</Typography>
        
        <TextField fullWidth required label="Cake Name" value={selectedCake?.cake_name || ""} margin="normal" disabled />
        <TextField fullWidth required label="Quantity" type="number" name="quantity" value={orderData.quantity} onChange={handleChange} margin="normal" />
        <TextField fullWidth required label="Message" name="message" value={orderData.message} onChange={handleChange} margin="normal" />
        <TextField fullWidth required label="Delivery Address" name="address" value={orderData.address} onChange={handleChange} margin="normal" />
        <TextField fullWidth required label="Delivery Date" type="date" name="deliveryDate" value={orderData.deliveryDate} onChange={handleChange} margin="normal" />
        
        <Typography variant="h6" sx={{ marginTop: 2 }}>Total Amount: ₹{orderData.totalAmount}</Typography>

        {error && <Typography color="error">{error}</Typography>}
        {success && <Typography color="primary">{success}</Typography>}

        <Button variant="contained" fullWidth sx={{ marginTop: 3, backgroundColor: "#007bff" }} onClick={handleOrder}>
          Confirm Order
        </Button>
      </Paper>
    </Box>
  );
};

export default BookingComponent;
