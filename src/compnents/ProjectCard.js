import { Box, CardMedia, Grid, Link, Typography } from "@mui/material";
import React from "react";

const ProjectCart = ({ project }) => {
  return (
    <Box
      sx={{
        backgroundColor: "secondary.main",
        minHeight: "17rem",
        maxHeight: "33rem",
        minWidth: "24rem",
        maxWidth: "28rem",
        borderRadius: "5%",
        boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1)",
        margin: 3,
        transition: "transform 0.3s ease-out",
        "&:hover": {
          cursor: "pointer",
          transform: "scale(1.05)",
        },
      }}
    >
      <CardMedia
        sx={{ height: 300, borderRadius: "5%" }}
        image="https://64.media.tumblr.com/de44e84b2898c6ec3fa3f00c729feb29/tumblr_o9s8b3kKwH1s13tcmo1_540.gif"
        title="green iguana"
      />
      <Box
        sx={{
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            color: "textPrimary.main",
          }}
          m={1.5}
          align="center"
          variant="h5"
        >
          {project?.name}
        </Typography>

        {/* <Typography
          sx={{
            color: "textSecondary.main",
          }}
          m={2}
          align="center"
          variant="h6"
        >
          {project?.tools[0]}
        </Typography> */}

        <Typography
          sx={{
            color: "textSecondary.dark",
          }}
          m={1}
          align="center"
        >
          {project?.description}{" "}
          <Link
            variant="body2"
            sx={{
              color: "textPrimary.main",
            }}
            href="https://google.com"
          >
            View Details
          </Link>
        </Typography>
      </Box>
      <Box>
        <Typography
          sx={{
            color: "textSecondary.dark",
            fontSize: 12,
          }}
          m={1}
          align="center"
        >
          {project?.start_date} -{" "}
          {project?.is_present ? "Present" : project?.end_date}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProjectCart;
