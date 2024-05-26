"use client";
import React, { useState } from "react";
import {
  Box,
  CircularProgress,
  IconButton,
  Stack,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Alert,
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import {
  useGetAllUsersQuery,
  useUpdateUserRoleMutation,
  useUpdateUserStatusMutation,
  useDeleteUserMutation,
} from "@/redux/api/userApi";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { toast } from "sonner";
import { useDebounced } from "@/redux/hooks";

enum UserRole {
  USER = "USER",
  ADMIN = "ADMIN",
}

enum UserStatus {
  ACTIVATE = "ACTIVATE",
  DEACTIVATE = "DEACTIVATE",
}

const ManageUsers = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [roleMap, setRoleMap] = useState<{ [key: string]: UserRole }>({});
  const [statusMap, setStatusMap] = useState<{ [key: string]: UserStatus }>({});

  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  const query: Record<string, any> = {};

  if (debouncedTerm) {
    query["searchTerm"] = debouncedTerm;
  }

  const { data, isLoading, error } = useGetAllUsersQuery({ ...query });
  const [updateUserRole] = useUpdateUserRoleMutation();
  const [updateUserStatus] = useUpdateUserStatusMutation();
  const [deleteUser] = useDeleteUserMutation();

  const handleRoleChange = async (userId: string, newRole: UserRole) => {
    setRoleMap((prev) => ({ ...prev, [userId]: newRole }));
    try {
      await updateUserRole({ userId, newRole }).unwrap();
      toast.success("User role updated successfully");
    } catch (error) {
      console.error("Failed to update user role:", error);
      toast.error("Failed to update user role");
    }
  };

  const handleStatusChange = async (userId: string, status: UserStatus) => {
    setStatusMap((prev) => ({ ...prev, [userId]: status }));
    try {
      await updateUserStatus({ userId, status }).unwrap();
      toast.success("User status updated successfully");
    } catch (error) {
      console.error("Failed to update user status:", error);
      toast.error("Failed to update user status");
    }
  };

  const handleDelete = async (userId: string) => {
    try {
      const res = await deleteUser({ userId }).unwrap();
      toast.success("User deleted successfully");
    } catch (error) {
      console.error("Failed to delete user:", error);
      toast.error("Failed to delete user");
    }
  };

  const columns: GridColDef[] = [
    { field: "username", headerName: "Username", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    {
      field: "role",
      headerName: "Role",
      flex: 1,
      renderCell: (params) => (
        <FormControl fullWidth>
          <Select
            value={roleMap[params.row.id] || params.row.role}
            onChange={(e) =>
              handleRoleChange(params.row.id, e.target.value as UserRole)
            }
          >
            <MenuItem value={UserRole.USER}>User</MenuItem>
            <MenuItem value={UserRole.ADMIN}>Admin</MenuItem>
          </Select>
        </FormControl>
      ),
    },
    {
      field: "isActive",
      headerName: "Status",
      flex: 1,
      renderCell: (params) => (
        <FormControl fullWidth>
          <Select
            value={statusMap[params.row.id] || params.row.isActive}
            onChange={(e) =>
              handleStatusChange(params.row.id, e.target.value as UserStatus)
            }
          >
            <MenuItem value={UserStatus.ACTIVATE}>Activate</MenuItem>
            <MenuItem value={UserStatus.DEACTIVATE}>Deactivate</MenuItem>
          </Select>
        </FormControl>
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => (
        <Box display="flex" justifyContent="center">
          <IconButton onClick={() => handleDelete(row.id)} aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Box>
      ),
    },
  ];

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
    return <Alert severity="error">Error loading users</Alert>;
  }

  const users = data?.users || [];

  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 2 }}
      >
        <Typography variant="h4" component="h1">
          Manage Users
        </Typography>
        <TextField
          onChange={(e) => setSearchTerm(e.target.value)}
          size="small"
          placeholder="Search Users"
        />
      </Stack>
      <Box sx={{ height: 600 }}>
        <DataGrid rows={users} columns={columns} />
      </Box>
    </Box>
  );
};

export default ManageUsers;
