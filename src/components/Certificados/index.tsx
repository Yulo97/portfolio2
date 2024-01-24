"use client";
import React from "react";
import { Grid } from "@mui/material";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import styles from "./Certificados.module.scss";
import { useTranslation } from "react-i18next";

const certificados = [
  {
    title: "Desarrollo Web",
    image: "/certificados/certificado-desarrollo-web.png",
    link: "",
  },
  {
    title: "JavaScript",
    image: "/certificados/certificado-javascript.png",
    link: "",
  },
  {
    title: "React.Js",
    image: "/certificados/certificado-react.png",
    link: "",
  },
];

const settingContainer = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  mt: 6,
};

const Certificados = () => {
  const [t] = useTranslation("global");

  return (
    <Grid sx={{ ...settingContainer }}>
      <Typography variant="h5" sx={{ mt: 3, opacity: 0.6 }}>
        {t("title.studies")}
      </Typography>
      <Typography variant="h2" sx={{ mt: 3 }}>
        {t("title.certificates")}
      </Typography>
      <Typography color="primary" className="dividerGreen">
        ___
      </Typography>
      <section className={styles.sectionCertificados}>
        {certificados.map((item) => (
          <Image
            src={item.image}
            height={200}
            width={300}
            alt={item.title}
            className={styles.imagenCertificado}
            key={item.title}
          />
        ))}
      </section>
    </Grid>
  );
};

export default Certificados;
