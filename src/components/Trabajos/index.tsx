// ExperienceTimeline.tsx
import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineContent from "@mui/lab/TimelineContent"; // Importa TimelineContent desde @mui/lab
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import Container from "@mui/material/Container";
import { useTranslation } from "react-i18next";

export const Trabajos = () => {
  const [t] = useTranslation("global");
  const isMobile = useMediaQuery("(max-width:600px)");

  const trabajos = [
    {
      position: t("works.municipal.position"),
      empresa: "Banco Municipal",
      desde: "12/2023",
      hasta: t("works.today"),
      isActual: true,
    },
    {
      position: t("works.softing.position"),
      empresa: "Softing SRL",
      desde: "11/2023",
      hasta: t("works.today"),
      isActual: false,
    },
    {
      position: t("works.freelance.position"),
      empresa: "FreeLance",
      desde: "02/2019",
      hasta: "11/2023",
      isActual: false,
    },
  ];

  return (
    <>
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
          {t("works.works")}
        </Typography>
        <Typography variant="h2" sx={{ mt: 3 }}>
          {t("works.experience")}
        </Typography>
        <Typography color="primary" className="dividerGreen">
          ___
        </Typography>
      </Container>

      <Timeline
        position={isMobile ? "right" : "alternate"}
        sx={
          !isMobile
            ? {}
            : {
                [`& .${timelineItemClasses.root}:before`]: {
                  flex: 0,
                  padding: 0,
                },
              }
        }
      >
        {trabajos.map((item) => (
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color={item.isActual ? "primary" : undefined} />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h5">{item.position}</Typography>
              <Typography variant="h6" color="primary">
                {item.empresa}
              </Typography>
              <Typography variant="body2" color="grey">
                {item.desde} - {item.hasta}
              </Typography>
              {/* <Typography variant="body1" color="">
                {item.descripcion}
              </Typography> */}
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </>
  );
};
