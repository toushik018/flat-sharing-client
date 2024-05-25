// components/Tips.js
import React from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

const tips = [
  {
    id: 1,
    title: "Set a Budget",
    content:
      "Determine how much you can afford to spend on rent and other living expenses.",
  },
  {
    id: 2,
    title: "Research Neighborhoods",
    content:
      "Look into different areas to find one that suits your lifestyle and budget.",
  },
  {
    id: 3,
    title: "Meet Potential Flat-mates",
    content:
      "Arrange to meet potential flat-mates in person to ensure compatibility.",
  },
];

const Tips = () => {
  return (
    <Container
      sx={{ my: 4, backgroundColor: "#8DC4FA", borderRadius: 2, p: 4 }}
    >
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h4" component="h2" sx={{ color: "#333" }}>
          Tips for Finding and Sharing Flats
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {tips.map((tip) => (
          <Grid item xs={12} sm={4} key={tip.id}>
            <Card sx={{  borderRadius: 2 }}>
              <CardContent>
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{ mb: 2, color: "#555" }}
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
