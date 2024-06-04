import React from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

const tips = [
  {
    id: 1,
    title: "Set a Budget",
    content:
      "Determine how much you can afford to spend on rent and other living expenses.",
    image: "/assets/Images/budget.jpg",
  },
  {
    id: 2,
    title: "Research Neighborhoods",
    content:
      "Look into different areas to find one that suits your lifestyle and budget.",
    image: "/assets/Images/research.jpg",
  },
  {
    id: 3,
    title: "Meet Potential Flat-mates",
    content:
      "Arrange to meet potential flat-mates in person to ensure compatibility.",
    image: "/assets/Images/meet.jpg",
  },
];

const Tips = () => {
  return (
    <Container
      sx={{
        my: 6,
        py: 4,
        backgroundColor: "#f9f9f9",
      }}
    >
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{ color: "#333", fontWeight: "bold" }}
        >
          Tips for Finding and Sharing Flats
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" sx={{ mt: 1 }}>
          Follow these tips to make your flat sharing experience smooth and
          enjoyable.
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {tips.map((tip) => (
          <Grid item xs={12} sm={6} md={4} key={tip.id}>
            <Card sx={{ borderRadius: 2, boxShadow: 1, height: "100%" }}>
              <CardMedia
                component="img"
                height="140"
                image={tip.image}
                alt={tip.title}
              />
              <CardContent sx={{ textAlign: "center" }}>
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{ mb: 2, color: "#333", fontWeight: "bold" }}
                >
                  {tip.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {tip.content}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Tips;
