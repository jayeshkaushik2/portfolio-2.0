import React from "react";
import BaseLayout from "../compnents/layouts/BaseLayout";
import Header from "../compnents/Header";
import Jobs from "./Jobs";
import Projects from "./projects";
import { Divider } from "@mui/material";

const Home = () => {
  return (
    <BaseLayout>
      <Header />
      <Jobs />
      <Divider />
      <Projects />
    </BaseLayout>
  );
};

export default Home;
