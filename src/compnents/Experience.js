import React from "react";
import BaseLayout from "./layouts/BaseLayout";
import { Box, Divider, Stack, Typography } from "@mui/material";
import { RoundBtn } from "./RoundBtn";

const Experience = () => {
  return (
    <BaseLayout
      customStyle={{ backgroundColor: "primary.main", color: "white" }}
    >
      <Stack padding={10}>
        <Box
          sx={{
            width: "100%",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            flex: 1,
          }}
        >
          <Typography color={"textColor.main"} variant="h4" fontWeight={"600"}>
            My Experience
          </Typography>
          <RoundBtn
            btnText={"Download CV"}
            //   Icon={PlayArrowRoundedIcon}
            AlignIcon="left"
            sx={{ marginTop: 4 }}
          />
          <ExperienceRow />
          <ExperienceRow />
          <ExperienceRow />
        </Box>
      </Stack>
      <Divider sx={{ backgroundColor: "textColor.dark" }} />
    </BaseLayout>
  );
};

const ExperienceRow = () => (
  <>
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        paddingTop: 10,
        paddingBottom: 5,
      }}
    >
      <Box width={"33%"}>
        <Typography color={"textColor.light"}>2017-present</Typography>
        <Typography sx={{ color: "secondary.main" }}>Youtube</Typography>
      </Box>
      <Box width={"33%"}>
        <Typography fontWeight={"600"}>Senior UX/UI Designer</Typography>
      </Box>
      <Box width={"33%"}>
        <Typography color={"textColor.light"}>
          Loram delivers on the promise of truly targeted, agile and data-driven
          solutions, offering unsurpassed efficiency, predictability and return
          on your maintenance investment.
        </Typography>
      </Box>
    </Box>
    <Divider sx={{ backgroundColor: "textColor.dark", width: "100%" }} />
  </>
);

export default Experience;
