import { Box, Link, Typography } from "@mui/material";
import React from "react";

const EducationCard = ({ education }) => {
  return (
    <Box
      sx={{
        backgroundColor: "secondary.main",
        boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1)",
        minHeight: "10rem",
        maxHeight: "fit-content",
        width: "90%",
        minWidth: "15rem",
        margin: 3,
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
          {education?.school_name}
        </Typography>

        <Typography
          sx={{
            color: "textSecondary.main",
          }}
          m={2}
          align="center"
          variant="h6"
        >
          {education?.course}
        </Typography>

        <Typography
          sx={{
            color: "textSecondary.dark",
          }}
          m={1}
          align="center"
        >
          {education?.field}{" "}
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
          {education?.start_date} -{" "}
          {education?.is_present ? "Present" : education?.end_date}
        </Typography>
      </Box>
    </Box>
  );
};

export default EducationCard;
