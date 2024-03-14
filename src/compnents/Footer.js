import React from "react";
import BaseLayout from "./layouts/BaseLayout";
import {
  Box,
  Divider,
  Link,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import CopyrightIcon from "@mui/icons-material/Copyright";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

const SocialLinks = [
  {
    link: "https://www.linkedin.com/in/jayesh-kaushik-07013a1a4/",
    Icon: LinkedInIcon,
  },
  { link: "https://www.instagram.com/jayesh.kaushik/", Icon: InstagramIcon },
  { link: "https://github.com/jayeshkaushik2", Icon: GitHubIcon },
];

const Footer = () => {
  const isSmallScreen = !useMediaQuery("(max-width:600px)");
  return (
    <BaseLayout
      customStyle={{ backgroundColor: "primary.main", color: "white" }}
    >
      <Divider sx={{ backgroundColor: "textColor.dark" }} />

      <Stack
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
        padding={isSmallScreen ? 10 : 4}
        paddingTop={4}
        paddingBottom={4}
      >
        <Stack sx={{ display: "flex", flexDirection: "row" }} gap={1}>
          <CopyrightIcon sx={{ color: "textColor.light" }} />
          <Typography sx={{ color: "textColor.light" }}>
            JAYESH. 2024
          </Typography>
        </Stack>

        <Stack sx={{ display: "flex", flexDirection: "row" }} gap={2}>
          {SocialLinks?.map(({ link, Icon }) => (
            <a href={link} key={link} style={{ color: "white" }}>
              <Icon />
            </a>
          ))}
        </Stack>
      </Stack>
    </BaseLayout>
  );
};

export default Footer;
