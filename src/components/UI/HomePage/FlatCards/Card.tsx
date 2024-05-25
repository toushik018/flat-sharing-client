import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  CardActionArea,
} from "@mui/material";

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
          image={flat.photos[0]} // Assuming photos is an array and taking the first image
          alt={flat.location}
          sx={{
            objectFit: "cover",
            width: "100%", // Set fixed width
            height: 300, // Set fixed height
          }}
        />
        <CardContent
          sx={{
            flexGrow: 1, // Ensures the content grows to fill the remaining space
          }}
        >
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
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default FCard;
