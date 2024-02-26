import { TextField } from "@mui/material";
import React from "react";

const CustomInput = ({
  label,
  required = false,
  type = "text",
  defaultValue = "",
  sx = {},
  id = "",
}) => {
  return (
    <TextField
      variant="standard"
      required={required}
      label={label}
      type={type}
      id={id || label}
      defaultValue={defaultValue}
      sx={{ backgroundColor: "textColor.dark", ...sx }}
      InputLabelProps={{
        sx: { color: "textColor.light", marginLeft: 1 }, // Styles for label text
      }}
    />
  );
};

export default CustomInput;
