import { Box, Typography, Card, CardMedia, CardContent, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar"; // Ensure the correct path is used

const AdminViewProduct = () => {
  const [cakes, setCakes] = useState([]);

  useEffect(() => {
    const fetchCakes = async () => {
      try {
        const response = await axios.get("https://localhost:7111/api/User_registration/view_product");
        setCakes(response.data);
      } catch (err) {
        console.error("Failed to fetch cake details", err);
      }
    };

    fetchCakes();
  }, []);

  const handleEditProduct = async (cake) => {
    try {
      const updatedCake = {
        cake_name: "New Cake Name" , // Replace with user input
        description: "Updated description",
        price: 250, // Replace with user input
      };

      await axios.put(`https://localhost:7111/api/User_registration/Edit_Product/${cake.cake_id}`, updatedCake);
      alert("Product updated successfully!");
    } catch (error) {
      console.error("Failed to update product", error);
    }
  };

  return (
    <>
      <Navbar /> {/* Adding Navbar at the top */}
      <Box sx={{ padding: 4, backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
        <Typography variant="h3" gutterBottom textAlign="center">
          🎂 Cakes
        </Typography>

        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 3 }}>
          {cakes.map((cake) => (
            <Card key={cake.cake_id} sx={{ width: 280, borderRadius: 2, boxShadow: 3, backgroundColor: "white", padding: 2 }}>
              <CardMedia component="img" height="200" image={cake.cake_image || "https://via.placeholder.com/200"} alt={cake.cake_name} />
              <CardContent>
                <Typography variant="h5" fontWeight="bold">{cake.cake_name}</Typography>
                <Typography variant="body2" sx={{ color: "#666", marginBottom: 1 }}>{cake.description}</Typography>
                <Typography variant="h6" color="primary">₹{cake.price}</Typography>
                <Button 
                  variant="contained" 
                  fullWidth 
                  sx={{ marginTop: 3, backgroundColor: "#007bff" }} 
                  onClick={() => handleEditProduct(cake)}
                >
                  Edit Product
                </Button>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default AdminViewProduct;
