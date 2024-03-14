import React from "react";
import BaseLayout from "./layouts/BaseLayout";
import CommentIcon from "@mui/icons-material/Comment";
import {
  Avatar,
  Box,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { RoundBtn } from "./RoundBtn";
import CustomInput from "./CustomInput";

const Contact = () => {
  const isSmallScreen = !useMediaQuery("(max-width:600px)");
  return (
    <BaseLayout
      customStyle={{ backgroundColor: "primary.main", color: "white" }}
    >
      <Stack
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: isSmallScreen ? "row" : "column",
        }}
        padding={isSmallScreen ? 10 : 4}
      >
        <ContactDetails isSmallScreen={isSmallScreen} />
        <ContactForm isSmallScreen={isSmallScreen} />
      </Stack>
      <Divider sx={{ backgroundColor: "textColor.dark" }} />
    </BaseLayout>
  );
};

const ContactDetails = ({ isSmallScreen }) => (
  <Box sx={{ width: isSmallScreen ? "45%" : "100%" }}>
    <Typography
      color={"textColor.main"}
      variant="h4"
      fontWeight={"600"}
      sx={{ paddingBottom: 1 }}
    >
      Contact
    </Typography>
    <Typography color={"textColor.light"} sx={{ paddingBottom: 4 }}>
      Loram Maintenance of Way, Inc. is a railroad maintenance equipment and
      services provider. Loram provides track maintenance services to freight,
      passenger.
    </Typography>
    <Typography
      color={"textColor.main"}
      variant="h6"
      fontWeight={"600"}
      sx={{ paddingBottom: 4 }}
    >
      Mungeshpur, Delhi, 110039
    </Typography>
    <Typography
      color={"textColor.main"}
      variant="h6"
      fontWeight={"600"}
      sx={{ paddingBottom: 4 }}
    >
      909090xxxex
    </Typography>
    <Typography
      color={"textColor.main"}
      variant="h6"
      fontWeight={"600"}
      sx={{ paddingBottom: 4 }}
    >
      testgmail@gmail.com
    </Typography>
  </Box>
);

const ContactForm = ({ isSmallScreen }) => (
  <Box
    sx={{
      width: isSmallScreen ? "45%" : "100%",
    }}
  >
    <Typography
      color={"textColor.main"}
      variant="h4"
      fontWeight={"600"}
      sx={{ paddingBottom: 4 }}
    >
      Let's Grab A Coffee And Jump On Conversion Chat With Me.
    </Typography>
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: 4,
        width: "100%",
      }}
    >
      <CustomInput label={"Your name"} required={true} sx={{ width: "45%" }} />
      <CustomInput label={"Your email"} required={true} sx={{ width: "45%" }} />
    </Box>
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: 4,
        width: "100%",
      }}
    >
      <CustomInput label={"Category"} required={true} sx={{ width: "45%" }} />
      <CustomInput
        label={"$20 - $1000"}
        required={true}
        sx={{ width: "45%" }}
      />
    </Box>
    <CustomInput
      label={"Your message"}
      required={true}
      sx={{ width: "100%" }}
    />
    <RoundBtn btnText={"CONTACT ME"} sx={{ marginTop: 4 }} />
  </Box>
);

export default Contact;
