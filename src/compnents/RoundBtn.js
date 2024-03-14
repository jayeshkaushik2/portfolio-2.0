import { Button, IconButton } from "@mui/material";
import React from "react";

export const RoundBtn = ({
  btnText,
  Icon,
  AlignIcon,
  disabled = false,
  sx = {},
}) => {
  return (
    <Button
      variant="contained"
      disabled={disabled}
      sx={{
        backgroundColor: "secondary.main",
        color: "black",
        fontWeight: "bold",
        borderRadius: 10,
        "&:hover": {
          backgroundColor: "secondary.dark",
        },
        ...sx,
      }}
    >
      {AlignIcon === "left" && Icon && <Icon />}
      {btnText}
      {AlignIcon === "right" && Icon && <Icon />}
    </Button>
  );
};
