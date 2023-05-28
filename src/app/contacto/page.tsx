"use client";
import React from "react";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Container,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
  };

  return (
    <Container sx={{ mt: 16 }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6">Formulario de Contacto</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Nombre" name="name" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Correo Electrónico" name="email" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Mensaje" name="message" multiline rows={4} fullWidth />
          </Grid>
          <Grid item xs={12}>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox name="terms" color="primary" />}
                label="Acepto los términos y condiciones"
              />
            </Grid>
            <Button type="submit" variant="contained" color="primary" size="large">
              Enviar
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default ContactForm;
