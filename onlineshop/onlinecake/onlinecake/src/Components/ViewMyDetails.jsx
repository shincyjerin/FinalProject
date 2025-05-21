import { Box, Typography, Paper, List, ListItem, ListItemText, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ViewMyDetails = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(""); // Error state
  const navigate = useNavigate();

  useEffect(() => {
    fetchOrders();
  }, []); // Only calls once after component mounts

  const fetchOrders = async () => {
    try {
      const response = await axios.get("https://localhost:7111/api/User_registration/ViewMyorder");

      if (response.status === 200 && response.data.length > 0) {
        setOrders(response.data); // Store fetched orders
      } else {
        setError("No orders found.");
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
      setError("Failed to load orders. Please try again later.");
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", minHeight: "100vh", backgroundColor: "#f5f5f5" }}>
      <Paper elevation={6} sx={{ padding: 4, maxWidth: 500, textAlign: "center", borderRadius: 2 }}>
        <Typography variant="h4" gutterBottom>Your Order Confirmed</Typography>

        {error ? (
          <Typography color="error">{error}</Typography>
        ) : orders.length > 0 ? (
          <List>
            {orders.map((order) => (
              <ListItem key={order.order_id} sx={{ borderBottom: "1px solid #ddd" }}>
                <ListItemText 
                  primary={`Cake: ${order.cake_name}`} 
                  secondary={`Qty: ${order.quantity} | ₹${order.total_amount} | Delivery: ${order.delivery_date}`} 
                />
              </ListItem>
            ))}
          </List>
        ) : (
          <Typography>No orders found.</Typography>
        )}

        {/* Navigation Button */}
        <Button variant="contained" sx={{ marginTop: 3, backgroundColor: "#007bff" }} onClick={() => navigate("/cakedetail")}>
          Back to Home
        </Button>
      </Paper>
    </Box>
  );
};

export default ViewMyDetails;
