import { Box } from "@mui/material";
import React from "react";

const BaseLayout = ({ children, customStyle = {} }) => {
  return (
    <Box
      sx={{
        backgroundColor: "transparent",
        height: "100%",
        width: "100%",
        ...customStyle,
      }}
    >
      {children}
    </Box>
  );
};

export default BaseLayout;
