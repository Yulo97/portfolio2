"use client";
import styles from "./Cabecera.module.scss";
import { Button, Grid } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";
import { useState, useEffect } from "react";

function Cabecera() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

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
        <ul className={styles.contenedorIconos}>
          <li>
            <a href="https://www.instagram.com/yulodevito/" target="_blank">
              <InstagramIcon fontSize={width < 500 ? "medium" : "large"} />
            </a>
          </li>
          <li>
            <a href="https://github.com/Yulo97" target="_blank">
              <GitHubIcon fontSize={width < 500 ? "medium" : "large"} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/giuliano-de-vito-1a6431194/" target="_blank">
              <LinkedInIcon fontSize={width < 500 ? "medium" : "large"} />
            </a>
          </li>
          <li>
            <Link href="/contacto">
              <EmailIcon fontSize={width < 500 ? "medium" : "large"} />
            </Link>
          </li>
        </ul>
      </Grid>
    </Grid>
  );
}

export default Cabecera;
