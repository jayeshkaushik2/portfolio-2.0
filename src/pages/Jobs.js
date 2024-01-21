import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Header from "../compnents/Header";
import BaseLayout from "../compnents/layouts/BaseLayout";
import JobCard from "../compnents/JobCard";

const data = [
  {
    company: "Sigroo Technologies",
    start_date: "22 mar 2021",
    end_date: "",
    is_present: true,
    description:
      "Working as a senior full stack web developer fueled by a passion for innovation, problem-solving, and the relentless pursuit.",
    job_title: "Software Engineer",
  },
  {
    company: "EasyLogics",
    start_date: "22 sep 2020",
    end_date: "21 mar 2021",
    is_present: false,
    description:
      "Working as a senior full stack web developer fueled by a passion for innovation, problem-solving, and the relentless pursuit.",
    job_title: "Full Stack Developer",
  },
];

const Jobs = () => {
  return (
    <BaseLayout
      customStyle={{
        backgroundColor: "primary.light",
        paddingTop: 3,
      }}
    >
      <Typography variant="h4" align="center">
        Jobs
      </Typography>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ justifyContent: "center", paddingLeft: 3, paddingRight: 3 }}
      >
        {data.map((job) => (
          <>
            <JobCard job={job} />
          </>
        ))}
      </Grid>
    </BaseLayout>
  );
};

export default Jobs;
