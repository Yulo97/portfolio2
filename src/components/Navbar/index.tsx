"use client";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import { Button, Toolbar } from "@mui/material";

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

  return (
    <AppBar position="fixed" color="primary" component="nav">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          GIULIANO DE VITO
        </Typography>
        {menus.map((item) => (
          <Button
            variant={item.button ? "contained" : "text"}
            color={item.button ? "primary" : "inherit"}
            sx={{ borderRadius: 0, marginLeft: "25px" }}
            href={item.path}
          >
            {item.title}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
