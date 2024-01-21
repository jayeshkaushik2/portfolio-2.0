import { Box } from "@mui/material";
import React from "react";

const BaseLayout = ({ children, customStyle = {} }) => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        height: "100%",
        width: "100%",
        color: "white",
        ...customStyle,
      }}
    >
      {children}
    </Box>
  );
};

export default BaseLayout;
