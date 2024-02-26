import React, { useEffect, useState } from "react";
import BaseLayout from "./layouts/BaseLayout";
import { Avatar, Box, Divider, Stack, Typography } from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import githubLogo from "./assets/github.svg"; // Import the image file
import PythonLogo from "./assets/python.svg"; // Import the image file
import DjangoLogo from "./assets/django.svg"; // Import the image file
import JavascriptLogo from "./assets/javascript.svg"; // Import the image file
import ReactLogo from "./assets/react.svg"; // Import the image file
import GitLogo from "./assets/git.svg"; // Import the image file
import { carouselFunc } from "../utils/functions";

const technologiesData = [
  { id: 1, name: "Python", image: PythonLogo },
  { id: 1, name: "Django", image: DjangoLogo },
  { id: 1, name: "JavaScript", image: JavascriptLogo },
  { id: 1, name: "React JS", image: ReactLogo },
  { id: 1, name: "Git", image: GitLogo },
  { id: 1, name: "Github", image: githubLogo },
];

const Technologies = () => {
  const [currentCrosal, setCurrentCrosal] = useState([]);
  const [startingIdx, setStartingIdx] = useState(0);
  const carouselRange = 5;
  const ShowText = true;

  setInterval(() => {
    let { nextStartingIdx, data } = carouselFunc(
      technologiesData,
      carouselRange,
      startingIdx
    );
    setCurrentCrosal(data);
    setStartingIdx(nextStartingIdx);
  }, 30000);

  useEffect(() => {
    let { nextStartingIdx, data } = carouselFunc(
      technologiesData,
      carouselRange,
      startingIdx
    );
    setCurrentCrosal(data);
    setStartingIdx(nextStartingIdx);
  }, []);

  return (
    <BaseLayout
      customStyle={{ backgroundColor: "primary.main", color: "white" }}
    >
      <Stack padding={10}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            width: "100%",
            flexWrap: "wrap",
          }}
        >
          <KeyboardArrowLeftIcon
            sx={{ fontSize: 40, color: "textColor.light" }}
          />
          {currentCrosal?.map((company) => (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {company?.image ? (
                <Avatar
                  alt={company?.name}
                  src={company?.image}
                  sx={{
                    marginBottom: 1,
                    width: 100,
                    height: 100,
                    backgroundColor: "textColor.dark",
                    color: "textColor.light",
                  }}
                />
              ) : (
                <Avatar
                  alt={company?.name}
                  sx={{
                    marginBottom: 1,
                    width: 100,
                    height: 100,
                    backgroundColor: "textColor.dark",
                    color: "textColor.light",
                  }}
                >
                  <BusinessIcon sx={{ fontSize: 60 }} />
                </Avatar>
              )}
              {ShowText && (
                <Typography sx={{ color: "textColor.light" }}>
                  {company?.name}
                </Typography>
              )}
            </Box>
          ))}
          <KeyboardArrowRightIcon
            sx={{ fontSize: 40, color: "textColor.light" }}
          />
        </Box>
      </Stack>
      <Divider sx={{ backgroundColor: "textColor.dark" }} />
    </BaseLayout>
  );
};

export default Technologies;
