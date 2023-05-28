"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import CardTechnology from "../TechnologyImg";
import styles from "./Technology.module.scss";

interface ITechnology {
  title: string;
  image: string;
}

const technology: ITechnology[] = [
  {
    title: "html logo",
    image: "/logos/html3.png",
  },
  {
    title: "css logo",
    image: "/logos/css4.png",
  },
  {
    title: "sass logo",
    image: "/logos/sass2.png",
  },
  {
    title: "Javascript logo",
    image: "/logos/js.png",
  },
  {
    title: "Typescript logo",
    image: "/logos/ts.png",
  },
  {
    title: "React logo",
    image: "/logos/react3.png",
  },
  {
    title: "NodeJs logo",
    image: "/logos/node.svg",
  },
  {
    title: "next js logo",
    image: "/logos/next.png",
  },
  {
    title: "MySql Logo",
    image: "/logos/mysql.png",
  },
  {
    title: "Php logo",
    image: "/logos/php.png",
  },
  {
    title: "github logo",
    image: "/logos/github.png",
  },
  {
    title: "git logo",
    image: "/logos/git.png",
  },
  {
    title: "boostrap logo",
    image: "/logos/boostrap.png",
  },
  {
    title: "csharp logo",
    image: "/logos/csharp.svg",
  },
  {
    title: "firebase js logo",
    image: "/logos/firebase2.png",
  },
];

const Technology = () => {
  const settingSlider = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    pauseOnHover: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  const settingContainer = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    mt: 6,
  };

  return (
    <Grid sx={{ ...settingContainer }}>
      <Typography variant="h5" color="grey">
        Tecnologias
      </Typography>
      <Typography variant="h2" color="initial" sx={{ mt: 3, color: "white" }}>
        My Stack
      </Typography>
      <Typography color="primary" className="dividerGreen">
        ___
      </Typography>
      <Container>
        <Slider {...settingSlider}>
          {technology.map((item) => (
            <CardTechnology key={item.title} image={item.image} title={item.title} />
          ))}
        </Slider>
      </Container>
    </Grid>
  );
};

export default Technology;
