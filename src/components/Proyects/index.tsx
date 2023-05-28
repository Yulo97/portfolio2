"use client";
import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ProyectCard from "../ProyectCard";
import { Typography } from "@mui/material";
import Slider from "react-slick";

interface IProyect {
  title: string;
  image: string;
  description: string;
  technologys: string;
  path?: string;
}

const proyects: IProyect[] = [
  {
    title: "UP Shop - Ecommerce",
    image: "/proyectos/upshop.png",
    description: "Ecommerce para Pyme Rosarina, carrito de compras, control de stock.",
    technologys: "React, Firebase, Material UI",
    path: "https://upshop-react2-748t6iega-yulo97.vercel.app/",
  },
  {
    title: "Black Gestion - Sitio Web",
    image: "/proyectos/blackgestion.png",
    description: "Sitio web, con posibilidad de suscripcion a la plataforma.",
    technologys: "PHP, JS, SCSS, Boostrap 5",
    path: "https://blackgestion.com.ar/",
  },
  {
    title: "Software de Gestion Comercial",
    image: "/proyectos/blackautomotor.png",
    description:
      "Orientado a talleres Mecanicos, control de stock, ventas, cartera de clientes, etc.",
    technologys: "C#, WPF, MySql",
    path: "https://blackgestion.com.ar/automotor.html",
  },
  {
    title: "Portfolio",
    image: "/proyectos/portfolio.png",
    description: "Sitio Web de presentacion",
    technologys: "Next.js, TypeScript, Material UI, Sass",
    path: "/",
  },
];

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
      <Typography variant="h5" color="initial" sx={{ mt: 3, color: "grey" }}>
        Proyectos
      </Typography>
      <Typography variant="h2" color="initial" sx={{ mt: 3, color: "white" }}>
        Proyectos
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
