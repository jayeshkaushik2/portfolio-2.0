import { Box, Grid, Link, Typography } from "@mui/material";
import React from "react";

const JobCard = ({ job }) => {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        minHeight: "17rem",
        maxHeight: "17rem",
        minWidth: "24rem",
        maxWidth: "20rem",
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
          {job?.company}
        </Typography>

        <Typography
          sx={{
            color: "textSecondary.main",
          }}
          m={2}
          align="center"
          variant="h6"
        >
          {job?.job_title}
        </Typography>

        <Typography
          sx={{
            color: "textSecondary.dark",
          }}
          m={1}
          align="center"
        >
          {job?.description}{" "}
          <Link
            variant="body2"
            sx={{
              color: "textPrimary.main",
            }}
            href="https://google.com"
          >
            Learn More
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
          {job?.start_date} - {job?.is_present ? "Present" : job?.end_date}
        </Typography>
      </Box>
    </Box>
  );
};

export default JobCard;
