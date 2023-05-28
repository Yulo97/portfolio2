import React from "react";

const TechnologyImg = ({ image, title }: { image: string; title: string }) => {
  return <img height="75px" alt={title} src={image} style={{ margin: "auto" }} />;
};

export default TechnologyImg;
