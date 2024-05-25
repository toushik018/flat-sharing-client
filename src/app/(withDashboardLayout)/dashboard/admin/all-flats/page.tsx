"use client";

import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  Stack,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import {
  useDeleteFlatMutation,
  useGetAllFlatsQuery,
} from "@/redux/api/flatApi";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { toast } from "sonner";
import Link from "next/link";
import { useDebounced } from "@/redux/hooks";

const AllFlats = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  const query: Record<string, any> = {};

  if (!!debouncedTerm) {
    query["searchTerm"] = debouncedTerm;
  }

  const { data, isLoading } = useGetAllFlatsQuery({ ...query });
  const [deleteFlat] = useDeleteFlatMutation();

  const flats = data?.flats;
  const meta = data?.meta;

  const handleDelete = async (id: string) => {
    try {
      const res = await deleteFlat(id).unwrap();

      if (res?.data.id) {
        toast.warning(res.message);
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

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
            <IconButton
              onClick={() => handleDelete(row.id)}
              aria-label="delete"
            >
              <DeleteIcon />
            </IconButton>
            <Link href={`/dashboard/admin/flats/edit/${row.id}`}>
              <IconButton aria-label="edit">
                <EditIcon />
              </IconButton>
            </Link>
          </Box>
        );
      },
    },
  ];

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <TextField
          onChange={(e) => setSearchTerm(e.target.value)}
          size="small"
          placeholder="Search Flats"
        ></TextField>
      </Stack>
      {!isLoading ? (
        <Box sx={{ height: 600, mt: 2 }}>
          <DataGrid rows={flats || []} columns={columns} />
        </Box>
      ) : (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ height: 600 }}
        >
          <CircularProgress />
        </Box>
      )}
    </Box>
  );
};

export default AllFlats;
