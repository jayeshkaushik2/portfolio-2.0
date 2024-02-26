import React from "react";
import BaseLayout from "./layouts/BaseLayout";
import { Box, Divider, Slider, Stack, Typography } from "@mui/material";

const data = {
  title: "Breaf & Idea",
  description:
    "Loram Maintenance of Way, Inc. is a railroad maintenance equipment and services provider. Loram provides track maintenance services to freight, passenger, and transit railroads worldwide.",
  title2: "I'm Using Top Leading Methods In my Work.",
  description2:
    "Loram Maintenance of Way, Inc. is a railroad maintenance equipment and services provider. Loram provides track maintenance services to freight, passenger, and transit railroads worldwide.",
  completed_projects: 32,
  total_projects: 35,
  total_customers: 31,
  skills: {
    // skills value range is 0 to 100 it is in percentage
    Python: 89,
    Django: 75,
    "React js": 70,
  },
};

const BreafAndIdea = () => {
  function valuetext(value) {
    return `${value}%`;
  }
  return (
    <BaseLayout
      customStyle={{ backgroundColor: "primary.main", color: "white" }}
    >
      <Stack
        padding={10}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <BreafAndIdeaComp />
        <AboutMeAndSkills skills={data?.skills} valuetext={valuetext} />
      </Stack>
      <Divider sx={{ backgroundColor: "textColor.dark" }} />
    </BaseLayout>
  );
};

const BreafAndIdeaComp = () => (
  <Box width={"45%"}>
    <Typography
      color={"textColor.main"}
      variant="h4"
      fontWeight={"600"}
      paddingBottom={4}
    >
      Breaf & Idea
    </Typography>
    <Typography color={"textColor.light"} paddingBottom={4}>
      Loram Maintenance of Way, Inc. is a railroad maintenance equipment and
      services provider. Loram provides track maintenance services to freight,
      passenger, and transit railroads worldwide.
    </Typography>
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "35%",
        justifyContent: "space-between",
      }}
    >
      <Typography
        color={"secondary.main"}
        variant="h2"
        fontWeight={"600"}
        fontStyle={"oblique"}
      >
        21
      </Typography>
      <Typography color={"textColor.light"} fontStyle={"oblique"}>
        COMPLETE <br /> PROJECTS
      </Typography>
    </Box>
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "35%",
        justifyContent: "space-between",
      }}
    >
      <Typography
        color={"secondary.main"}
        variant="h2"
        fontWeight={"600"}
        fontStyle={"oblique"}
      >
        32
      </Typography>
      <Typography color={"textColor.light"} fontStyle={"oblique"}>
        SATISFIED <br /> CUSTOMERS
      </Typography>
    </Box>
  </Box>
);

const AboutMeAndSkills = ({ skills, valuetext }) => (
  <Box width={"45%"}>
    <Typography
      color={"textColor.main"}
      variant="h4"
      fontWeight={"600"}
      paddingBottom={4}
    >
      I'm Using Top Leading Methods In my Work.
    </Typography>
    <Typography color={"textColor.light"} paddingBottom={4}>
      Loram Maintenance of Way, Inc. is a railroad maintenance equipment and
      services provider. Loram provides track maintenance services to freight,
      passenger, and transit railroads worldwide.
    </Typography>
    {Object.keys(skills).map((skill) => (
      <Box sx={{ width: "100%", paddingBottom: 1 }}>
        <Typography sx={{ fontWeight: 500 }}>{skill}</Typography>
        <Slider
          size="small"
          defaultValue={skills[skill]}
          aria-label="Small"
          valueLabelDisplay="on"
          valueLabelFormat={valuetext}
          disabled
          sx={{
            color: "secondary.main",
            "& .MuiSlider-thumb": {
              backgroundColor: "transparent",
              height: 0,
            },
            "& .MuiSlider-valueLabelOpen": {
              background: "transparent",
              fontSize: 14,
              padding: 0,
              color: "textColor.light",
            },
            "&.Mui-disabled": {
              color: "secondary.main",
            },
          }}
        />
      </Box>
    ))}
  </Box>
);

export default BreafAndIdea;