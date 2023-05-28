"use client";
import styles from "./Cabecera.module.scss";
import { Button, Grid } from "@mui/material";

function Cabecera() {
  return (
    <Grid container className={styles.container}>
      <Grid item xs={11} className={styles.main}>
        <h3>
          Hello<span> ■</span>
        </h3>
        <h1>
          <span>__</span> I'm Giuliano De Vito
        </h1>
        <h2>Programador Full Stack</h2>
        <Button variant="contained" className={styles.button} size="large">
          Descargar CV
        </Button>
      </Grid>
      <Grid item xs={1} className={styles.picture}>
        <ul>
          <li>Facebook</li>
          <li>Github</li>
          <li>LinkedIn</li>
          <li>Email</li>
        </ul>
      </Grid>
    </Grid>
  );
}

export default Cabecera;
