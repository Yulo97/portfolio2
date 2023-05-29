"use client";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import { Box, Button, Drawer, Toolbar, IconButton } from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { NavDrawer } from "./NavDrawer";

const Navbar = () => {
  interface IMenu {
    title: string;
    path: string;
    button?: boolean;
  }

  const menus: IMenu[] = [
    {
      title: "Inicio",
      path: "/",
    },
    {
      title: "Contacto",
      path: "/contacto",
    },
    {
      title: "Descargar CV",
      path: "/contacto",
      button: true,
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <nav>
      <AppBar position="fixed" color="primary" component="nav">
        {/* MENU ESCRITORIO */}
        <Box sx={{ display: { xs: "none", sm: "block" }, mt: 1 }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              GIULIANO DE VITO
            </Typography>
            {menus.map((item) => (
              <Button
                key={item.title}
                variant={item.button ? "contained" : "text"}
                color={item.button ? "primary" : "inherit"}
                sx={{ borderRadius: 0, marginLeft: "25px" }}
                href={item.path}
              >
                {item.title}
              </Button>
            ))}
          </Toolbar>
        </Box>

        {/* MENU RESPONSIVE */}
        <Toolbar sx={{ display: { xs: "flex", sm: "none" } }}>
          <IconButton aria-label="" size="large" onClick={() => setOpen(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            GIULIANO DE VITO
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{ display: { xs: "flex", sm: "none" } }}
        open={open}
        anchor="left"
        onClose={() => setOpen(false)}
      >
        <NavDrawer navLinks={menus} setOpen={setOpen} />
      </Drawer>
    </nav>
  );
};

export default Navbar;
