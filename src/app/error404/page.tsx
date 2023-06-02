"use client";
import React from "react";
import { Box, Container, Typography } from "@mui/material";

const NotFoundPage = () => {
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
