import React from "react";
import BaseLayout from "./layouts/BaseLayout";
import CommentIcon from "@mui/icons-material/Comment";
import {
  Avatar,
  Box,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";

const Testimonies = () => {
  const isSmallScreen = !useMediaQuery("(max-width:600px)");
  return (
    <BaseLayout
      customStyle={{ backgroundColor: "primary.main", color: "white" }}
    >
      <Stack
        sx={{
          display: "flex",
          flex: 1,
          justifyContent: "space-between",
          flexDirection: isSmallScreen ? "row" : "column",
        }}
        padding={isSmallScreen ? 10 : 4}
      >
        <TestimonialIntro isSmallScreen={isSmallScreen} />
        <Testimoniales isSmallScreen={isSmallScreen} />
      </Stack>
      <Divider sx={{ backgroundColor: "textColor.dark" }} />
    </BaseLayout>
  );
};

const TestimonialIntro = ({ isSmallScreen }) => (
  <Box sx={{ width: isSmallScreen ? "45%" : "100%" }}>
    <CommentIcon
      sx={{
        color: "secondary.main",
        fontSize: 90,
        paddingBottom: isSmallScreen ? 4 : 0,
      }}
    />
    <Typography
      color={"textColor.main"}
      variant="h4"
      fontWeight={"600"}
      sx={{ paddingBottom: 1 }}
    >
      Hey, This Is Testimonials From My Best Clients & Partners
    </Typography>
  </Box>
);

const Testimoniales = ({ isSmallScreen }) => (
  <Box
    sx={{
      width: isSmallScreen ? "45%" : "100%",
      paddingTop: isSmallScreen ? 0 : 4,
    }}
  >
    <Typography sx={{ paddingBottom: 4, color: "textColor.light" }}>
      Loram Maintenance of Way, Inc. is a railroad maintenance equipment and
      services provider. Loram provides track maintenance services to freight,
      passenger, and transit railroads worldwide,
    </Typography>
    <Box
      sx={{
        display: "flex",
        flexDrection: "row",
        justifyContent: "space-between",
        width: "fit-content",
        alignItems: "center",
        paddingBottom: 4,
      }}
    >
      <Avatar alt="" src="./assets/profile.png" sx={{ marginRight: 1 }} />
      <Box>
        <Typography variant="caption" sx={{ color: "textColor.dark" }}>
          Jayesh kaushik
        </Typography>
        <br />
        <Typography variant="caption" sx={{ color: "textColor.dark" }}>
          CEO
        </Typography>
      </Box>
    </Box>
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
      }}
    >
      <Typography color="secondary.main">2 / 3</Typography>
    </Box>
  </Box>
);

export default Testimonies;
