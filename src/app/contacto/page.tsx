"use client";
import React, { FormEvent, useEffect } from "react";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Container,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    alert("Los envios de este formulario estan desabilitados");
  };

  const [t, i18n] = useTranslation("global");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, []);

  return (
    <Container sx={{ mt: 16 }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6">{t("form-contact.title")}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label={t("form-contact.name")} name="name" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label={t("form-contact.email")} name="email" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label={t("form-contact.message")}
              name="message"
              multiline
              rows={4}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox name="terms" color="primary" />}
                label={t("form-contact.check-conditions")}
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
              {t("form-contact.btn-send")}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default ContactForm;
