import { Box, Typography, Paper, List, ListItem, ListItemText } from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from '../Components/Navbar';


const AllOrders = () => {
  const [orders, setOrders] = useState([]);
  const userId = sessionStorage.getItem("userId"); // Get logged-in user ID

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get("https://localhost:7111/api/User_registration/view_orders");
      setOrders(response.data); // Store fetched orders
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  return (
    <>
      <Navbar /> {/* Add Navbar */}
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", backgroundColor: "#f5f5f5" }}>
        <Paper elevation={6} sx={{ padding: 4, maxWidth: 500, textAlign: "center", borderRadius: 2 }}>
          <Typography variant="h4" gutterBottom>My Cake Orders</Typography>
  
          {orders.length > 0 ? (
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
        </Paper>
      </Box>
    </>
  );
  
};

export default AllOrders;
