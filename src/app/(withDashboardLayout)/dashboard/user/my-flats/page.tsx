"use client";

import React, { useState } from "react";
import { Box, CircularProgress, IconButton, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import { useGetMyFlatsQuery } from "@/redux/api/flatApi";
import UpdateFlatModal from "./components/updateFlatModal";

const MyFlats = () => {
  const { data, isLoading, error } = useGetMyFlatsQuery("");
  const [open, setOpen] = useState(false);
  const [selectedFlat, setSelectedFlat] = useState(null);

  const handleOpen = (flat: any) => {
    setSelectedFlat(flat);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedFlat(null);
  };

  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box>
        <Typography color="error">Failed to load flats</Typography>
      </Box>
    );
  }

  const columns: GridColDef[] = [
    { field: "location", headerName: "Location", flex: 1 },
    { field: "description", headerName: "Description", flex: 1 },
    { field: "rentAmount", headerName: "Rent Amount", flex: 1 },
    { field: "bedrooms", headerName: "Bedrooms", flex: 1 },
    { field: "amenities", headerName: "Amenities", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Box>
            <IconButton aria-label="edit" onClick={() => handleOpen(row)}>
              <EditIcon />
            </IconButton>
          </Box>
        );
      },
    },
  ];

  return (
    <Box>
      <Box
        sx={{
          height: 600,
          mt: 2,
          mx: 2,
          "& .MuiDataGrid-root": { backgroundColor: "background.paper" },
        }}
      >
        <DataGrid rows={data?.data || []} columns={columns} />
      </Box>
      {selectedFlat && (
        <UpdateFlatModal
          open={open}
          handleClose={handleClose}
          flatData={selectedFlat}
        />
      )}
    </Box>
  );
};

export default MyFlats;
