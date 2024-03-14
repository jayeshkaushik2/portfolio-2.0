import React, { useEffect, useState } from "react";
import BaseLayout from "./layouts/BaseLayout";
import {
  Avatar,
  Box,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { carouselFunc } from "../utils/functions";

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
  const isSmallScreen = !useMediaQuery("(max-width:600px)");
  const [currentCrosal, setCurrentCrosal] = useState([]);
  const [startingIdx, setStartingIdx] = useState(0);
  const [carouselRange, setCurrentCrosalRange] = useState(
    isSmallScreen ? companiesData?.length : 2
  );
  const ShowText = true;

  setInterval(() => {
    let { nextStartingIdx, data } = carouselFunc(
      companiesData,
      carouselRange,
      startingIdx
    );
    setCurrentCrosal(data);
    setStartingIdx(nextStartingIdx);
  }, 30000);

  useEffect(() => {
    let { nextStartingIdx, data } = carouselFunc(
      companiesData,
      carouselRange,
      startingIdx
    );
    setCurrentCrosal(data);
    setStartingIdx(nextStartingIdx);
  }, []);

  useEffect(() => {
    setCurrentCrosalRange(isSmallScreen ? companiesData?.length : 2);
  }, [isSmallScreen]);

  return (
    <BaseLayout
      customStyle={{ backgroundColor: "primary.main", color: "white" }}
    >
      <Stack padding={isSmallScreen ? 10 : 4}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <KeyboardArrowLeftIcon
            sx={{ fontSize: 40, color: "textColor.light" }}
          />
          {currentCrosal?.map((company, index) => (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
              key={index}
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
              {ShowText && (
                <Typography sx={{ color: "textColor.light" }}>
                  {company?.name}
                </Typography>
              )}
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
