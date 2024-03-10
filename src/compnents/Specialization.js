import React from "react";
import BaseLayout from "./layouts/BaseLayout";
import { Box, Divider, Stack, Typography, useMediaQuery } from "@mui/material";
import SpecializationSkills from "./SpecializationSkills";

const Specialization = () => {
  const isSmallScreen = !useMediaQuery("(max-width:600px)");
  let specializationSkillsData = [
    {
      id: 1,
      skill: "Python",
      description:
        "Loram Maintenance of Way, Inc. is a railroad maintenance equipment and services provider. Loram provides track maintenance services to freight, passenger, and transit railroads worldwide",
    },
    {
      id: 2,
      skill: "Django",
      description:
        "Loram Maintenance of Way, Inc. is a railroad maintenance equipment and services provider. Loram provides track maintenance services to freight, passenger, and transit railroads worldwide",
    },
    {
      id: 3,
      skill: "Web development",
      description:
        "Loram Maintenance of Way, Inc. is a railroad maintenance equipment and services provider. Loram provides track maintenance services to freight, passenger, and transit railroads worldwide",
    },
    {
      id: 4,
      skill: "Machine learning",
      description:
        "Loram Maintenance of Way, Inc. is a railroad maintenance equipment and services provider. Loram provides track maintenance services to freight, passenger, and transit railroads worldwide",
    },
  ];

  return (
    <BaseLayout
      customStyle={{ backgroundColor: "primary.main", color: "white" }}
    >
      <Stack
        padding={isSmallScreen ? 10 : 4}
        sx={
          isSmallScreen
            ? { display: "flex", flexDirection: "row" }
            : {
                display: "flex",
                flexDirection: "column",
              }
        }
      >
        <Box
          width={"100%"}
          paddingBottom={isSmallScreen ? 0 : 4}
          justifyContent={"center"}
        >
          <Box>
            <Typography
              color={"secondary.main"}
              variant="h1"
              fontWeight={"510"}
              fontSize={200}
              fontStyle={"oblique"}
            >
              2+
            </Typography>
            <Typography
              color={"textColor.light"}
              variant="h6"
              fontStyle={"oblique"}
            >
              Years of
            </Typography>
            <Typography
              color={"textColor.light"}
              variant="h6"
              fontStyle={"oblique"}
            >
              Working
            </Typography>
            <Typography
              color={"textColor.light"}
              variant="h6"
              fontStyle={"oblique"}
            >
              Experience
            </Typography>
          </Box>
        </Box>
        <Box width={isSmallScreen ? "70%" : "100%"}>
          <Skills specializationSkillsData={specializationSkillsData} />
        </Box>
      </Stack>
      <Divider sx={{ backgroundColor: "textColor.dark" }} />
    </BaseLayout>
  );
};

const Skills = ({ specializationSkillsData }) => (
  <>
    <Typography color={"textColor.light"} paddingBottom={2}>
      My Specialization
    </Typography>
    <Typography
      color={"textColor.main"}
      variant="h4"
      paddingBottom={4}
      fontWeight={"600"}
    >
      Full Stack maestro in Python-Django/React, crafting code with finesse,
      Content creator extraordinaire, weaving narratives with prowess, I bring
      digital dreams to life.
    </Typography>
    <Box>
      <SpecializationSkills skills={specializationSkillsData} />
    </Box>
  </>
);

export default Specialization;
