import React from "react";
import BaseLayout from "./layouts/BaseLayout";
import { Box, Divider, Grid, Link, Typography } from "@mui/material";
import NavigationHeader from "./NavigationHeader";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const Header = () => {
  return (
    <BaseLayout>
      <Box
        sx={{
          backgroundColor: "primary.dark",
          minHeight: "fit-content",
        }}
      >
        <NavigationHeader />
        <Grid
          container
          sx={{
            justifyContent: "space-between",
            paddingLeft: 3,
            paddingRight: 3,
            height: "100%",
            alignItems: "center",
          }}
        >
          <Grid item xs={12} md={4}>
            <NameSection />
          </Grid>
          <Grid item xs={12} md={4}>
            <ImageSection />
          </Grid>
          <Grid item xs={12} md={4}>
            <IntroSection />
          </Grid>
        </Grid>
      </Box>
    </BaseLayout>
  );
};

const NameSection = () => (
  <Box>
    <Box
      sx={{
        width: "fit-content",
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: "25rem",
        paddingTop: 3,
        paddingBottom: 3,
      }}
    >
      <Typography variant="h2" sx={{ fontSize: "4rem" }}>
        Jayesh
        <br />
        Kaushik <Brightness1Icon sx={{ color: "textPrimary.main" }} />
      </Typography>
      <Divider sx={{ backgroundColor: "textPrimary.main", width: "30%" }} />
      <Box id="social-links" sx={{ paddingTop: 1 }}>
        {/* linkedin and instagram */}
        <Link
          variant="body2"
          sx={{ color: "textSecondary.main" }}
          href="https://google.com"
        >
          LinkedIn
        </Link>{" "}
        |{" "}
        <Link
          variant="body2"
          sx={{ color: "textSecondary.main" }}
          href="https://google.com"
        >
          Instagram
        </Link>
      </Box>

      <Box id="social-links" sx={{ paddingTop: 0.5 }}>
        {/* github and leetcode */}
        <Link
          variant="body2"
          sx={{ color: "textSecondary.main" }}
          href="https://google.com"
        >
          Github
        </Link>{" "}
        |{" "}
        <Link
          variant="body2"
          sx={{ color: "textSecondary.main" }}
          href="https://google.com"
        >
          Leetcode
        </Link>
      </Box>
    </Box>
  </Box>
);

const ImageSection = () => (
  <Box
    sx={{
      width: "fit-content",
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: "25rem",
    }}
  >
    <img
      src="https://c4.wallpaperflare.com/wallpaper/949/368/996/robert-downey-jr-smoking-photoshoot-wallpaper-preview.jpg"
      alt="profileImage"
      loading="lazy"
      width={"100%"}
    />
  </Box>
);

const IntroSection = () => (
  <Box>
    <Box
      sx={{
        width: "fit-content",
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: "25rem",
        paddingTop: 3,
        paddingBottom: 3,
      }}
    >
      <Typography sx={{ color: "textPrimary.main" }}>INTRODUCTION</Typography>
      <Typography variant="h4">Software Engineer,</Typography>
      <Typography variant="h4">Full Stack web</Typography>
      <Typography variant="h4">Developer</Typography>
      <Typography variant="body2" sx={{ color: "textSecondary.dark" }}>
        We are fueled by a passion for innovation, problem-solving, and the
        relentless pursuit of excellence in the digital realm. Our lead
        full-stack developer, Jayesh Kaushik, spearheads our technical
        initiatives with a diverse skill set and a commitment to delivering.
      </Typography>
      <Link
        variant="body2"
        sx={{ color: "textPrimary.main" }}
        href="https://google.com"
      >
        Learn More
      </Link>
    </Box>
  </Box>
);

export default Header;
