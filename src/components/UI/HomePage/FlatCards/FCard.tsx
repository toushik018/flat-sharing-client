// components/FCard.tsx
import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  CardActionArea,
  Button,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";

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
        <Box sx={{ position: "relative", width: "100%", height: "200px" }}>
          <Image
            alt={flat.location}
            src={flat.photos[0]}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </Box>
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
