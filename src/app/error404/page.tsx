"use client";
import React, { useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const NotFoundPage = () => {
  const [t, i18n] = useTranslation("global");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, []);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      flexDirection="column"
      gap={2}
    >
      <Typography variant="h1" align="center">
        404 - Página no encontrada
      </Typography>
      <Typography variant="h4" align="center">
        Lo sentimos, la página que buscas no existe.
      </Typography>
      <Typography
        variant="body1"
        align="center"
        style={{ cursor: "pointer", textDecoration: "underline" }}
      >
        Volver a la página de inicio
      </Typography>
    </Box>
  );
};

export default NotFoundPage;
