// components/SearchOptions.js
import React from "react";
import {
  Box,
  Container,
  TextField,
  Button,
  Grid,
  Typography,
} from "@mui/material";

const SearchOptions = () => {
  return (
    <Container sx={{ my: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Find Flats
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={3}>
          <TextField label="Location" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField label="Price Range" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField label="Number of Bedrooms" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ height: 55 }}
            component="h1"
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SearchOptions;
