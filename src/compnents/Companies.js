import React from "react";
import BaseLayout from "./layouts/BaseLayout";
import { Avatar, Box, Divider, Stack, Typography } from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const companiesData = [
  {
    id: 1,
    name: "Sigroo Technologies",
    image: "https://git.sigroo.com/assets/img/logo.svg",
    link: "https://sigroo.com/",
  },
  { id: 1, name: "EasyLogics", image: "", link: "" },
];

const Companies = () => {
  return (
    <BaseLayout
      customStyle={{ backgroundColor: "primary.main", color: "white" }}
    >
      <Stack padding={10}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <KeyboardArrowLeftIcon
            sx={{ fontSize: 40, color: "textColor.light" }}
          />
          {companiesData?.map((company) => (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {company?.image ? (
                <Avatar
                  alt={company?.name}
                  src={company?.image}
                  sx={{ marginBottom: 1, width: 100, height: 100 }}
                />
              ) : (
                <Avatar
                  alt={company?.name}
                  sx={{
                    marginBottom: 1,
                    width: 100,
                    height: 100,
                    backgroundColor: "textColor.dark",
                    color: "textColor.light",
                  }}
                >
                  <BusinessIcon sx={{ fontSize: 60 }} />
                </Avatar>
              )}
              <Typography sx={{ color: "textColor.light" }}>
                {company?.name}
              </Typography>
            </Box>
          ))}
          <KeyboardArrowRightIcon
            sx={{ fontSize: 40, color: "textColor.light" }}
          />
        </Box>
      </Stack>
      <Divider sx={{ backgroundColor: "textColor.dark" }} />
    </BaseLayout>
  );
};

export default Companies;
