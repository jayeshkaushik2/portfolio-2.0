import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Header from "../compnents/Header";
import BaseLayout from "../compnents/layouts/BaseLayout";
import ProjectCart from "../compnents/ProjectCard";

const data = [
  {
    name: "Porfolio 2.0",
    is_group_project: false,
    images: [{}, {}],
    tools: ["React JS", "Django"],
    start_date: "22 mar 2021",
    end_date: "",
    is_present: true,
    description:
      "TaskMaster is a modern web application designed to streamline task management and boost productivity. The platform provides a user-friendly interface.",
    project_location_link: "https://google.com",
    live_link: "",
  },
  {
    name: "Ice Cream Wala",
    is_group_project: false,
    images: [{}, {}],
    tools: ["React JS", "Django"],
    is_present: false,
    description:
      "TaskMaster is a modern web application designed to streamline task management and boost productivity. The platform provides a user-friendly interface.",
    link: "https://google.com",
    start_date: "22 sep 2020",
    end_date: "21 mar 2021",
    project_location_link: "https://google.com",
    live_link: "",
  },
  {
    name: "EcomBuy",
    is_group_project: false,
    images: [{}, {}],
    tools: ["React JS", "Django"],
    is_present: false,
    description:
      "TaskMaster is a modern web application designed to streamline task management and boost productivity. The platform provides a user-friendly interface.",
    link: "https://google.com",
    start_date: "22 sep 2020",
    end_date: "21 mar 2021",
    project_location_link: "https://google.com",
    live_link: "",
  },
  {
    name: "Finance",
    is_group_project: false,
    images: [{}, {}],
    tools: ["React JS", "Django"],
    is_present: false,
    description:
      "TaskMaster is a modern web application designed to streamline task management and boost productivity. The platform provides a user-friendly interface.",
    link: "https://google.com",
    start_date: "22 sep 2020",
    end_date: "21 mar 2021",
    project_location_link: "https://google.com",
    live_link: "",
  },
];

const Projects = () => {
  return (
    <BaseLayout
      customStyle={{
        paddingTop: 3,
        color: "black",
      }}
    >
      <Typography variant="h4" align="center" color="textPrimary.main">
        Projects
      </Typography>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ justifyContent: "center", paddingLeft: 3, paddingRight: 3 }}
      >
        {data.map((project) => (
          <>
            <ProjectCart project={project} />
          </>
        ))}
      </Grid>
    </BaseLayout>
  );
};

export default Projects;
