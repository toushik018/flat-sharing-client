"use client";

// components/Navbar.js
import React from "react";
import {
  Typography,
  Container,
  Stack,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Button,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import dynamic from "next/dynamic";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const AuthButton = dynamic(
    () => import("@/components/UI/AuthButton/AuthButton"),
    { ssr: false }
  );

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ width: 250, textAlign: "center" }}>
      <Typography
        variant="h6"
        fontWeight={600}
        color="secondary"
        sx={{ my: 2 }}
      >
        Flat Share
      </Typography>
      <List sx={{ textAlign: "center" }}>
        <ListItem disablePadding>
          <ListItemButton component="a" href="/">
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="/about">
            <ListItemText primary="About Us" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="/my-profile">
            <ListItemText primary="My Profile" />
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ mt: 20 }}>
          <AuthButton />
          <Button component={Link} href="/register">
            Register
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Container>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        sx={{ py: 2 }}
      >
        <Typography
          variant="h6"
          color="secondary"
          component="div"
          fontWeight={600}
          sx={{ flexGrow: 1, cursor: "pointer" }}
        >
          Flat Share
        </Typography>
        {isMobile ? (
          <>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={handleDrawerToggle}
            >
              {drawer}
            </Drawer>
          </>
        ) : (
          <Box>
            <Typography
              variant="body1"
              component="a"
              href="/"
              sx={{
                mx: 2,
                cursor: "pointer",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              Home
            </Typography>
            <Typography
              variant="body1"
              component="a"
              href="/about"
              sx={{
                mx: 2,
                cursor: "pointer",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              About Us
            </Typography>

            <Typography
              variant="body1"
              component="a"
              href="/login"
              sx={{
                mx: 2,
                cursor: "pointer",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              My Profile
            </Typography>
            <AuthButton />
            <Button component={Link} href="/register">
              Register
            </Button>
          </Box>
        )}
      </Stack>
    </Container>
  );
};

export default Navbar;
