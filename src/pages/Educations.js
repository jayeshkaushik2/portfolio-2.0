import React from "react";
import BaseLayout from "../compnents/layouts/BaseLayout";
import { Box, Typography } from "@mui/material";
import EducationCard from "../compnents/EducationCard";

const data = [
  {
    school_name: "Sat Kabir institute of technologies and management",
    course: "B.tech",
    field: "Computer science",
    start_date: "1 jun 2019",
    end_date: "",
    is_present: true,
  },
  {
    school_name: "Marigold public sr. sec. school",
    course: "12th",
    field: "Non medical science",
    start_date: "1 jun 2018",
    end_date: "1 mar 2019",
    is_present: false,
  },
];

const Educations = () => {
  return (
    <BaseLayout
      customStyle={{
        paddingTop: 3,
        color: "black",
      }}
    >
      <Typography variant="h4" align="center" color="textPrimary.main">
        Education
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        {data?.map((education) => (
          <EducationCard education={education} />
        ))}
      </Box>
    </BaseLayout>
  );
};

export default Educations;
