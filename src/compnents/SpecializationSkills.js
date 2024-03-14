import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const SpecializationSkills = ({ skills = [] }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container gap={5}>
        {skills?.map((skill, index) => {
          return (
            <Grid item xs={5} key={index}>
              <Typography
                variant="h6"
                color={"textColor.main"}
                fontWeight={"600"}
                paddingBottom={2}
              >
                {skill?.skill}
              </Typography>
              <Typography color={"textColor.light"}>
                {skill?.description}
              </Typography>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default SpecializationSkills;
