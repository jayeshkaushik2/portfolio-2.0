import React from "react";
import BaseLayout from "./layouts/BaseLayout";
import CommentIcon from "@mui/icons-material/Comment";
import { Avatar, Box, Divider, Stack, Typography } from "@mui/material";
import { RoundBtn } from "./RoundBtn";
import CustomInput from "./CustomInput";

const Contact = () => {
  return (
    <BaseLayout
      customStyle={{ backgroundColor: "primary.main", color: "white" }}
    >
      <Stack
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
        padding={10}
      >
        <ContactDetails />
        <ContactForm />
      </Stack>
      <Divider sx={{ backgroundColor: "textColor.dark" }} />
    </BaseLayout>
  );
};

const ContactDetails = () => (
  <Box sx={{ width: "45%" }}>
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

const ContactForm = () => (
  <Box
    sx={{
      width: "45%",
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
