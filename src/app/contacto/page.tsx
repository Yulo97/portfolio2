"use client";
import React, { FormEvent } from "react";
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
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    alert("Los envios de este formulario estan desabilitados");
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
            <Grid item xs={12}>
              <Typography variant="body1" color="secondary">
                Los envios de este formulario se encuentran desabilitados
              </Typography>
            </Grid>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              sx={{ borderRadius: 0 }}
            >
              Enviar
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default ContactForm;
