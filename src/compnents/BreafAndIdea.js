import React from "react";
import BaseLayout from "./layouts/BaseLayout";
import {
  Box,
  Divider,
  Slider,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";

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
  const isSmallScreen = !useMediaQuery("(max-width:600px)");
  function valuetext(value) {
    return `${value}%`;
  }
  return (
    <BaseLayout
      customStyle={{ backgroundColor: "primary.main", color: "white" }}
    >
      <Stack
        padding={isSmallScreen ? 10 : 4}
        sx={{
          display: "flex",
          flexDirection: isSmallScreen ? "row" : "column",
          justifyContent: "space-between",
        }}
      >
        <BreafAndIdeaComp isSmallScreen={isSmallScreen} />
        <AboutMeAndSkills
          skills={data?.skills}
          valuetext={valuetext}
          isSmallScreen={isSmallScreen}
        />
      </Stack>
      <Divider sx={{ backgroundColor: "textColor.dark" }} />
    </BaseLayout>
  );
};

const BreafAndIdeaComp = ({ isSmallScreen }) => (
  <Box width={isSmallScreen ? "45%" : "100%"}>
    <Typography
      color={"textColor.main"}
      variant="h4"
      fontWeight={"600"}
      paddingBottom={isSmallScreen ? 4 : 1}
    >
      Breaf & Idea
    </Typography>
    <Typography color={"textColor.light"} paddingBottom={4}>
      Loram Maintenance of Way, Inc. is a railroad maintenance equipment and
      services provider. Loram provides track maintenance services to freight,
      passenger, and transit railroads worldwide.
    </Typography>
    <Box
      sx={
        isSmallScreen
          ? {}
          : {
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              paddingBottom: 4,
            }
      }
      gap={2}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: isSmallScreen ? "35%" : "fit-content",
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
          width: isSmallScreen ? "35%" : "fit-content",
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
  </Box>
);

const AboutMeAndSkills = ({ skills, valuetext, isSmallScreen }) => (
  <Box width={isSmallScreen ? "45%" : "100%"}>
    <Typography
      color={"textColor.main"}
      variant="h4"
      fontWeight={"600"}
      paddingBottom={isSmallScreen ? 4 : 1}
    >
      I'm Using Top Leading Methods In my Work.
    </Typography>
    <Typography color={"textColor.light"} paddingBottom={isSmallScreen ? 4 : 1}>
      Loram Maintenance of Way, Inc. is a railroad maintenance equipment and
      services provider. Loram provides track maintenance services to freight,
      passenger, and transit railroads worldwide.
    </Typography>
    {Object.keys(skills).map((skill, index) => (
      <Box sx={{ width: "100%", paddingBottom: 1 }} key={index}>
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
