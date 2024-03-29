import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import Navigation from "./Navigation";
import BaseLayout from "./layouts/BaseLayout";
import BackgroundImage from "./assets/background.jpg";
import ProfileImage from "./assets/profile.png";
import { RoundBtn } from "./RoundBtn";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";

const IntroHeader = () => {
  const isLargeScreen = !useMediaQuery("(max-width:600px)");

  return (
    <BaseLayout customStyle={{ color: "white" }}>
      <Box
        sx={{
          backgroundImage: `url(${BackgroundImage})`,
        }}
      >
        <Navigation />
        <Stack
          sx={
            isLargeScreen
              ? {
                  flexDirection: "row",
                  padding: 3,
                  paddingLeft: 10,
                  paddingRight: 10,
                  paddingBottom: 0,
                }
              : {
                  flexDirection: "column",
                  paddingLeft: 4,
                  paddingRight: 4,
                  paddingBottom: 0,
                }
          }
        >
          <Box sx={{ width: "100%" }}>
            <Typography variant="h6" color={"textColor.light"}>
              Full Stack Developer
            </Typography>
            <Typography variant="h1" fontWeight={"510"}>
              Hello,
            </Typography>
            <Typography variant="h1" fontWeight={"510"}>
              I'm Jayesh
            </Typography>
            <Typography variant="h1" fontWeight={"510"}>
              Kaushik.
            </Typography>
            <RoundBtn
              btnText={"See Resume"}
              Icon={PlayArrowRoundedIcon}
              AlignIcon="left"
              sx={{ marginTop: 4 }}
            />
          </Box>
          <Box>
            <img
              src={`${ProfileImage}`}
              style={
                isLargeScreen
                  ? { minHeight: 100, maxHeight: 600 }
                  : { width: "-webkit-fill-available" }
              }
            />
          </Box>
        </Stack>
      </Box>
    </BaseLayout>
  );
};

export default IntroHeader;
