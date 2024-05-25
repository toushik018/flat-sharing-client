// components/FCard.tsx
import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  CardActionArea,
  Button,
} from "@mui/material";
import Link from "next/link";

const FCard = ({ flat }: any) => {
  return (
    <Card
      sx={{
        mx: "auto",
        my: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={flat.photos[0]}
          alt={flat.location}
          sx={{
            objectFit: "cover",
            width: "100%",
            height: 300,
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {flat.location}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {flat.description}
          </Typography>
          <Box sx={{ mt: 1 }}>
            <Typography variant="body1" color="text.primary">
              Rent: ${flat.rentAmount}
            </Typography>
            <Typography variant="body1" color="text.primary">
              Bedrooms: {flat.bedrooms}
            </Typography>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              href={`/flats/${flat.id}`}
            >
              Read and Request
            </Button>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default FCard;
