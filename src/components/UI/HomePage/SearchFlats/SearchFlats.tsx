"use client";

import React from "react";
import { Box, Button, Grid, TextField } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { SearchParams } from "@/types/flat/flat";

interface SearchOptionsProps {
  onSearch: (params: SearchParams) => void;
}

const SearchOptions = ({ onSearch }: any) => {
  const { control, handleSubmit } = useForm<SearchParams>();

  const onSubmit = (data: SearchParams) => {
    // Filter out empty fields
    const filters = Object.fromEntries(
      Object.entries(data).filter(([_, value]) => value)
    );
    onSearch(filters);
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mb: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Controller
            name="location"
            control={control}
            render={({ field }) => (
              <TextField {...field} label="Location" fullWidth />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Controller
            name="minPrice"
            control={control}
            render={({ field }) => (
              <TextField {...field} label="Min Price" type="number" fullWidth />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Controller
            name="maxPrice"
            control={control}
            render={({ field }) => (
              <TextField {...field} label="Max Price" type="number" fullWidth />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Controller
            name="bedrooms"
            control={control}
            render={({ field }) => (
              <TextField {...field} label="Bedrooms" type="number" fullWidth />
            )}
          />
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
          <Button type="submit" variant="contained">
            Search
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};

export default SearchOptions;
