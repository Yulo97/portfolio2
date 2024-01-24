"use client";
import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ProyectCard from "../ProyectCard";
import { Typography } from "@mui/material";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";

interface IProyect {
  title: string;
  image: string;
  description: string;
  technologys: string;
  path?: string;
}

const settingsSlider = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Proyects = () => {
  const [t] = useTranslation("global");

  const proyects: IProyect[] = [
    {
      title: t("card-proyects.up-shop.title"),
      image: "/proyectos/upshop.png",
      description: t("card-proyects.up-shop.description"),
      technologys: "React, Firebase, Material UI",
      path: "https://upshop-react2-748t6iega-yulo97.vercel.app/",
    },
    {
      title: t("card-proyects.bg-web.title"),
      image: "/proyectos/blackgestion.png",
      description: t("card-proyects.bg-web.description"),
      technologys: "PHP, JS, SCSS, Boostrap 5",
      path: "https://blackgestion.com.ar/",
    },
    {
      title: t("card-proyects.bg-automotor.title"),
      image: "/proyectos/blackautomotor.png",
      description: t("card-proyects.bg-automotor.description"),
      technologys: "C#, WPF, MySql",
      path: "https://blackgestion.com.ar/automotor.html",
    },
    {
      title: t("card-proyects.portfolio.title"),
      image: "/proyectos/portfolio.png",
      description: t("card-proyects.portfolio.description"),
      technologys: "Next.js, TypeScript, Material UI, Sass",
      path: "/",
    },
  ];

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        mt: 8,
      }}
    >
      <Typography variant="h5" sx={{ mt: 3, opacity: 0.6 }}>
        {t("title.proyects")}
      </Typography>
      <Typography variant="h2" sx={{ mt: 3 }}>
        {t("title.proyects")}
      </Typography>
      <Typography color="primary" className="dividerGreen">
        ___
      </Typography>
      <Grid sx={{ width: "100%", padding: "25px" }}>
        <Slider {...settingsSlider}>
          {proyects.map((item) => (
            <ProyectCard
              key={item.title}
              title={item.title}
              image={item.image}
              description={item.description}
              technologys={item.technologys}
              path={item.path ? item.path : ""}
            />
          ))}
        </Slider>
      </Grid>
    </Container>
  );
};

export default Proyects;
