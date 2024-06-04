// components/FlatCards.tsx
import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import FlatCardsClient from "./FlatCardsClient";

const fetchInitialFlats = async () => {
  const res = await fetch(
    "https://flat-sharing-backend-beta.vercel.app/api/flats?limit=6"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch flats");
  }
  return res.json();
};

const FlatCards = async () => {
  const initialFlats = await fetchInitialFlats();

  return (
    <Container sx={{ my: 4 }}>
      {/* <SearchOptions /> */}
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h4" component="h2">
          Available Flats
        </Typography>
      </Box>
      <FlatCardsClient initialFlats={initialFlats.data} />
    </Container>
  );
};

export default FlatCards;
