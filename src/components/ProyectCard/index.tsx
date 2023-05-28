"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "./ProyectCard.module.scss";

interface IProyect {
  title: string;
  image: string;
  description: string;
  technologys: string;
  path: string;
}

const ProyectCard = ({ title, image, description, technologys, path }: IProyect) => {
  return (
    <Card
      sx={{ width: 350, margin: "auto", height: 500, display: "flex", flexDirection: "column" }}
      className={styles.container}
    >
      <CardMedia sx={{ height: 300 }} image={image} title={title} className={styles.cardMedia} />
      <CardContent sx={{ display: "flex", flexGrow: 1, flexDirection: "column" }}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography gutterBottom variant="body1" component="p">
          <strong>Tecnologias: </strong>
          {technologys}
        </Typography>
        <Typography gutterBottom variant="body1" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large" variant="contained" sx={{ borderRadius: 0, m: 1 }}>
          <a href={path} target="_blank" className={styles.aButtom}>
            Visitar
          </a>
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProyectCard;
