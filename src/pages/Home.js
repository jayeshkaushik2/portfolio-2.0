import React from "react";
import BaseLayout from "../compnents/layouts/BaseLayout";
import Header from "../compnents/Header";
import Jobs from "./Jobs";
import Projects from "./projects";
import { Divider } from "@mui/material";
import Educations from "./Educations";

const Home = () => {
  return (
    <BaseLayout>
      <Header />
      <Jobs />
      <Divider />
      <Projects />
      <Educations />
    </BaseLayout>
  );
};

export default Home;
