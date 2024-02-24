import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import BaseLayout from "./layouts/BaseLayout";
import { RoundBtn } from "./RoundBtn";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

let selectedProjects = [
  {
    title: "Finance App",
    description:
      "Loram Maintenance of Way, Inc. is a railroad maintenance equipment and services provider. Loram provides track maintenance services to freight, passenger, and transit railroads worldwide.",
    images: [
      {
        id: 1,
        image:
          "https://superdevresources.com/wp-content/uploads/2021/08/Task-Manager-Dark-UI-by-Vadim.jpg",
      },
    ],
  },
  {
    title: "Finance App",
    description:
      "Loram Maintenance of Way, Inc. is a railroad maintenance equipment and services provider. Loram provides track maintenance services to freight, passenger, and transit railroads worldwide.",
    images: [
      {
        id: 1,
        image:
          "https://superdevresources.com/wp-content/uploads/2021/08/Task-Manager-Dark-UI-by-Vadim.jpg",
      },
    ],
  },
  {
    title: "Finance App",
    description:
      "Loram Maintenance of Way, Inc. is a railroad maintenance equipment and services provider. Loram provides track maintenance services to freight, passenger, and transit railroads worldwide.",
    images: [
      {
        id: 1,
        image:
          "https://superdevresources.com/wp-content/uploads/2021/08/Task-Manager-Dark-UI-by-Vadim.jpg",
      },
    ],
  },
];

const SelectedProjects = () => {
  return (
    <BaseLayout
      customStyle={{ backgroundColor: "primary.main", color: "white" }}
    >
      <Stack padding={10}>
        <Grid container spacing={{ xs: 4, md: 4 }} columns={{ md: 12 }}>
          <Grid item xs={2} sm={4} md={4} key={1}>
            <SelectedProjectIntro />
          </Grid>
          <ProjectUi selectedProjects={selectedProjects} />
        </Grid>
      </Stack>
      <Divider sx={{ backgroundColor: "textColor.dark" }} />
    </BaseLayout>
  );
};

const SelectedProjectIntro = () => (
  <>
    <Typography color={"textColor.light"} sx={{ paddingBottom: 1 }}>
      Portfolio
    </Typography>
    <Typography
      color={"textColor.main"}
      variant="h4"
      fontWeight={"600"}
      sx={{ paddingBottom: 1 }}
    >
      All Creative works, <br /> Selected Projets
    </Typography>
    <Typography color={"textColor.light"} sx={{ paddingBottom: 2 }}>
      Loram Maintenance of Way, Inc. is a railroad maintenance equipment and
      services provider. Loram provides track maintenance services to freight,
      passenger, and transit railroads worldwide,
    </Typography>
    <RoundBtn
      btnText={"Explore More"}
      Icon={ArrowForwardRoundedIcon}
      AlignIcon="right"
      sx={{ marginTop: 4 }}
    />
  </>
);

const ProjectUi = ({ selectedProjects }) => (
  <>
    {selectedProjects.map((project) => (
      <Grid item xs={2} sm={4} md={4}>
        <Box
          sx={{
            backgroundImage: `url(${project?.images[0].image})`,
            backgroundSize: "cover",
            Width: "100%",
            height: 350,
            boxShadow: "0px 20px 30px 0px  black inset",
            padding: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "baseline",
            }}
          >
            <Box>
              <Typography fontWeight={"600"} variant="h6" paddingBottom={2}>
                {project?.title}
              </Typography>
              <RoundBtn
                btnText={"Show More"}
                sx={{
                  backgroundColor: "textColor.dark",
                  borderRadius: 0,
                  color: "white",
                  fontWeight: "400",
                  "&:hover": {
                    backgroundColor: "textColor.dark",
                  },
                }}
              />
            </Box>
            <Typography color={"textColor.light"}>Branding Product</Typography>
          </Box>
        </Box>
      </Grid>
    ))}
  </>
);

export default SelectedProjects;
