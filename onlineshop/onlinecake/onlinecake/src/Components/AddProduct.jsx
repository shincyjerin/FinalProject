import { Box, Button, TextField, Typography, Paper } from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import Navbar from "../Components/Navbar";

const AddProduct = () => {
  const navigate = useNavigate(); // ✅ Initialize useNavigate

  const [productData, setProductData] = useState({
    cake_name: "",
    price: 0, // ✅ Ensure this is a number
    description: "",
    cake_image: "",
  });

  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: name === "price" ? Number(value) : value, // ✅ Convert price to number
    }));
  };

  const handleAddProduct = async () => {
    try {
      const response = await axios.post("https://localhost:7111/api/User_registration/ADD_Product", productData, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 200) {
        navigate("/cakedetail"); // ✅ Navigate after success
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <>
      <Navbar />
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", minHeight: "100vh", backgroundColor: "#f5f5f5" }}>
        <Paper elevation={6} sx={{ padding: 4, maxWidth: 400, textAlign: "center", borderRadius: 2 }}>
          <Typography variant="h4" gutterBottom>Add Cake Product</Typography>

          <TextField fullWidth required label="Cake Name" name="cake_name" value={productData.cake_name} onChange={handleChange} margin="normal" />
          <TextField fullWidth required label="Price" type="number" name="price" value={productData.price} onChange={handleChange} margin="normal" />
          <TextField fullWidth required label="Description" name="description" value={productData.description} onChange={handleChange} margin="normal" />
          <TextField fullWidth required label="Image URL" name="cake_image" value={productData.cake_image} onChange={handleChange} margin="normal" /> {/* ✅ Fixed name */}

          <Button variant="contained" fullWidth sx={{ marginTop: 3, backgroundColor: "#007bff" }} onClick={handleAddProduct}>
            Add Product
          </Button>
        </Paper>
      </Box>
    </>
  );
};

export default AddProduct;
