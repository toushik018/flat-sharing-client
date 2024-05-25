// components/FlatCards.tsx
import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import FCard from "./FCard";

const FlatCards = async () => {
  const res = await fetch("http://localhost:5000/api/flats?limit=6");
  const flatCards = await res.json();

  return (
    <Container sx={{ my: 4 }}>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h4" component="h2">
          Available Flats
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {flatCards?.data?.map((flat: any) => (
          <Grid item xs={12} sm={6} md={4} key={flat.id}>
            <FCard flat={flat} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FlatCards;
