"use client";
import React from "react";
import styles from "./QuienSoy.module.scss";
import {
  Box,
  Container,
  Divider,
  Typography,
  Grid,
  Card,
  CardContent,
  Hidden,
} from "@mui/material";
import { useTranslation } from "react-i18next";

const QuienSoy = () => {
  const [t] = useTranslation("global");

  return (
    <Container>
      <Box className={styles.container}>
        <Typography variant="h5" color="initial">
          {t("title.biography")}
        </Typography>
        <Typography variant="h2" color="white">
          {t("title.about-me")}
        </Typography>
        <Typography variant="span" color="primary" className={styles.divider}>
          ___
        </Typography>
        <Grid container sx={{ display: "flex", justifyContent: "center" }}>
          <Grid item lg={5}>
            <img height={577} src="/fotos/neon7.png" alt="asd" className={styles.image} />
          </Grid>
          <Hidden lgDown>
            <Divider
              orientation="vertical"
              flexItem
              lg={2}
              sx={{ color: "primary ", margin: "0 30px 0 30px" }}
            >
              INFO
            </Divider>
          </Hidden>
          <Grid
            item
            className={styles.textoPresentacion}
            lg={5}
            sx={{ display: "flex", alignItems: "flex-start", flexDirection: "column" }}
          >
            <Typography variant="h6" color="primary">
              {t("me.who-i-am")}
            </Typography>
            <Typography variant="h4" color="initial">
              Giuliano De Vito
            </Typography>
            <Typography variant="body1" className={styles.parrafo}>
              {t("me.about-me")}
            </Typography>
            <Box sx={{ width: "100%" }}>
              <Grid container className={styles.tarjetas} spacing={4} sx={{ mt: "5px" }}>
                <Grid item xs={6}>
                  <Card
                    sx={{
                      maxWidth: 300,
                      borderRadius: 0,
                      display: "flex",
                      justifyContent: "center",
                      height: "100px",
                      mb: 3,
                    }}
                    className={styles.tarjetasContent}
                  >
                    <CardContent>
                      <Typography variant="h6" color="primary">
                        {t("me.country")}
                      </Typography>
                      <p>Argentina</p>
                    </CardContent>
                  </Card>
                  <Card
                    sx={{
                      maxWidth: 300,
                      borderRadius: 0,
                      display: "flex",
                      justifyContent: "center",
                      height: "100px",
                    }}
                    className={styles.tarjetasContent}
                  >
                    <CardContent>
                      <Typography variant="h6" color="primary">
                        {t("me.city")}
                      </Typography>
                      <p>Rosario, Santa Fe</p>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={6}>
                  <Card
                    sx={{
                      maxWidth: 300,
                      borderRadius: 0,
                      display: "flex",
                      justifyContent: "center",
                      height: "100px",
                      mb: 3,
                    }}
                    className={styles.tarjetasContent}
                  >
                    <CardContent>
                      <Typography variant="h6" color="primary">
                        {t("me.phone")}
                      </Typography>
                      <Typography variant="p" color="white">
                        +54 341 306 4343
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card
                    sx={{
                      maxWidth: 300,
                      borderRadius: 0,
                      display: "flex",
                      justifyContent: "center",
                      height: "100px",
                    }}
                    className={styles.tarjetasContent}
                  >
                    <CardContent>
                      <Typography variant="h6" color="primary">
                        {t("me.birth")}
                      </Typography>
                      <p>15 / 04 / 1997</p>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default QuienSoy;
