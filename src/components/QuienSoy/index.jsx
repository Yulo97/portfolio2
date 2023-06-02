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

const QuienSoy = () => {
  return (
    <Container>
      <Box className={styles.container}>
        <Typography variant="h5" color="initial">
          Biografia
        </Typography>
        <Typography variant="h2" color="white">
          Quien Soy
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
              ME
            </Divider>
          </Hidden>
          <Grid
            item
            className={styles.textoPresentacion}
            lg={5}
            sx={{ display: "flex", alignItems: "flex-start", flexDirection: "column" }}
          >
            <Typography variant="h6" color="primary">
              Sobre Mi
            </Typography>
            <Typography variant="h4" color="initial">
              Giuliano De Vito
            </Typography>
            <Typography variant="body1" className={styles.parrafo}>
              Me considero una persona autodidacta, busco aprender e instruirme en cada situación y
              con las personas que trabajo. Me apasiona la programación, el análisis y el desarrollo
              de nuevos proyectos. Creando soluciones y automatizando procesos para que sean mas
              sencillos y optimos.
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
                        Pais
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
                        Ciudad
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
                        Telefono
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
                        Nacimiento
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
