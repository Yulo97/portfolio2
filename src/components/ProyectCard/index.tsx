"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "./ProyectCard.module.scss";
import { useTranslation } from "react-i18next";

interface IProyect {
  title: string;
  image: string;
  description: string;
  technologys: string[];
  path: string;
}

const ProyectCard = ({ title, image, description, technologys, path }: IProyect) => {
  const [t] = useTranslation("global");

  return (
    <Card
      sx={{ margin: 1, height: 500, display: "flex", flexDirection: "column" }}
      className={styles.container}
    >
      <CardMedia sx={{ height: 300 }} image={image} title={title} className={styles.cardMedia} />
      <CardContent sx={{ display: "flex", flexGrow: 1, flexDirection: "column" }}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>

        <Typography gutterBottom variant="body1" component="p">
          {description}
        </Typography>
        <Stack sx={{ display: "block" }}>
          {technologys.map((item) => (
            <Chip
              label={item}
              variant="outlined"
              color="primary"
              size="small"
              sx={{ ml: 1, mt: 1 }}
            />
          ))}
        </Stack>
      </CardContent>
      <CardActions>
        <Button size="large" variant="contained" sx={{ borderRadius: 0, m: 1 }}>
          <a href={path} target="_blank" className={styles.aButtom}>
            {t("button.view")}
          </a>
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProyectCard;
