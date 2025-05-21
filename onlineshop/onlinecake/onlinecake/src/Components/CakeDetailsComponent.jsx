import { Box, Typography, Card, CardMedia, CardContent, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CakeDetailsComponent = () => {
  const [cakes, setCakes] = useState([]);
  const navigate = useNavigate();

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

  const handleOrderNow = (cake) => {
    navigate("/booking", { state: { cake } });
  };

  return (
    <Box sx={{ padding: 4, backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      <Typography variant="h3" gutterBottom textAlign="center">
        🎂 Order Your Favorite Cake
      </Typography>

      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 3 }}>
        {cakes.map((cake) => (
          <Card key={cake.cake_id} sx={{ width: 280, borderRadius: 2, boxShadow: 3, backgroundColor: "white", padding: 2 }}>
            <CardMedia component="img" height="200" image={cake.cake_image || "https://via.placeholder.com/200"} alt={cake.cake_name} />
            <CardContent>
              <Typography variant="h5" fontWeight="bold">{cake.cake_name}</Typography>
              <Typography variant="body2" sx={{ color: "#666", marginBottom: 1 }}>{cake.description}</Typography>
              <Typography variant="h6" color="primary">₹{cake.price}</Typography>
              <Button variant="contained" sx={{ marginTop: 2, backgroundColor: "#007bff" }} onClick={() => handleOrderNow(cake)}>
                Order Now
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default CakeDetailsComponent;
