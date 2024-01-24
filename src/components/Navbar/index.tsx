"use client";
import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import { Box, Button, Drawer, Toolbar, IconButton } from "@mui/material";
import { NavDrawer } from "./NavDrawer";
import { useTranslation } from "react-i18next";
import Link from "next/link";

// icons
import MenuIcon from "@mui/icons-material/Menu";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

interface NavbarProps {
  toggleTheme: () => void;
  themeMode: string;
}
const Navbar: React.FC<NavbarProps> = ({ toggleTheme, themeMode }) => {
  const [t, i18n] = useTranslation("global");

  interface IMenu {
    title: string;
    path: string;
    button?: boolean;
  }

  const [open, setOpen] = useState(false);

  const changeLanguage = () => {
    const newLanguage = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  // En el componente donde inicializas tu aplicación, puedes agregar lógica para cargar el idioma desde localStorage al inicio.
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, []);

  const translator = (
    <>
      <Button
        variant="text"
        color="inherit"
        sx={{ borderRadius: 0, marginLeft: "25px" }}
        onClick={toggleTheme}
      >
        {themeMode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
      </Button>
      <Button
        variant="text"
        color="inherit"
        sx={{ borderRadius: 0, marginLeft: "25px" }}
        onClick={changeLanguage}
      >
        <img
          src={`/icons/flag-${i18n.language === "en" ? `argentina` : `united-kingdom`}.png`}
          alt=""
          width={"30px"}
        />
      </Button>
    </>
  );

  const menus: IMenu[] = [
    {
      title: t("button.home"),
      path: "/",
    },
    {
      title: t("button.contact"),
      path: "/contacto",
    },
    {
      title: t("button.download-cv"),
      path: "https://onedrive.live.com/?authkey=%21ADrstYzy3z8WH24&cid=D1C2EBA35D62423E&id=D1C2EBA35D62423E%212816&parId=root&o=OneUp",
      button: true,
    },
  ];

  return (
    <nav>
      <AppBar position="fixed" color="primary" component="nav">
        {/* MENU ESCRITORIO */}
        <Box sx={{ display: { xs: "none", sm: "block" }, mt: 1 }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              GIULIANO DE VITO
            </Typography>
            {translator}
            {menus.map((item) =>
              item.button ? (
                <Link
                  href="https://onedrive.live.com/?authkey=%21ADrstYzy3z8WH24&cid=D1C2EBA35D62423E&id=D1C2EBA35D62423E%212816&parId=root&o=OneUp"
                  target="#"
                  key={item.title}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ borderRadius: 0, marginLeft: "25px" }}
                  >
                    {item.title}
                  </Button>
                </Link>
              ) : (
                <Link href={item.path} key={item.title} style={{ color: "inherit" }}>
                  <Button
                    variant="text"
                    color="inherit"
                    sx={{ borderRadius: 0, marginLeft: "25px" }}
                  >
                    {item.title}
                  </Button>
                </Link>
              )
            )}
          </Toolbar>
        </Box>

        {/* MENU RESPONSIVE */}
        <Toolbar sx={{ display: { xs: "flex", sm: "none" } }}>
          <IconButton aria-label="" size="large" onClick={() => setOpen(true)}>
            <MenuIcon sx={{ color: "white" }} />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Menu
          </Typography>
          {translator}
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
