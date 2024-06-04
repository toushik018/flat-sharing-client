// components/FlatCardsClient.tsx
"use client";

import React, { useState, useEffect } from "react";
import { Box, Button, Grid, CircularProgress, Typography } from "@mui/material";
import FCard from "./FCard";
import SearchOptions from "../SearchFlats/SearchFlats";
import { IFlat, SearchParams } from "@/types/flat/flat";

const FlatCardsClient = ({ initialFlats = [] }) => {
  const [flats, setFlats] = useState<IFlat[]>(initialFlats);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [searchParams, setSearchParams] = useState<SearchParams>({});

  const fetchFlats = async (page: number, searchParams: SearchParams) => {
    setIsLoading(true);
    try {
      const query = new URLSearchParams({
        ...Object.fromEntries(
          Object.entries(searchParams).map(([key, value]) => [
            key,
            String(value),
          ])
        ),
        limit: "6",
        page: String(page),
      });

      const res = await fetch(
        `https://flat-sharing-backend-beta.vercel.app/api/flats?${query}`
      );
      const data = await res.json();

      if (page === 1) {
        setFlats(data.data);
      } else {
        setFlats((prevFlats) => {
          const flatIds = new Set(prevFlats.map((flat) => flat.id));
          const newFlats = data.data.filter(
            (flat: { id: string }) => !flatIds.has(flat.id)
          );
          return [...prevFlats, ...newFlats];
        });
      }

      if (data.data.length < 6) {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Failed to fetch flats:", error);
      setHasMore(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchFlats(1, searchParams);
  }, [searchParams]);

  const handleShowMore = () => {
    setPage((prevPage) => {
      const nextPage = prevPage + 1;
      fetchFlats(nextPage, searchParams);
      return nextPage;
    });
  };

  const handleSearch = (params: SearchParams) => {
    setSearchParams(params);
    setPage(1);
  };

  return (
    <>
      <SearchOptions onSearch={handleSearch} />
      <Grid container spacing={4}>
        {flats.length > 0
          ? flats.map((flat: any) => (
              <Grid item xs={12} sm={6} md={4} key={flat.id}>
                <FCard flat={flat} />
              </Grid>
            ))
          : !isLoading && (
              <Box sx={{ textAlign: "center", width: "100%", my: 4 }}>
                <Typography variant="h6">No flats found.</Typography>
              </Box>
            )}
      </Grid>
      {isLoading && (
        <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
          <CircularProgress />
        </Box>
      )}
      {hasMore && !isLoading && (
        <Box sx={{ textAlign: "center", my: 4 }}>
          <Button variant="contained" onClick={handleShowMore}>
            Show More
          </Button>
        </Box>
      )}
    </>
  );
};

export default FlatCardsClient;
