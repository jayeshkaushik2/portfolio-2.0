import React from "react";
import BaseLayout from "../compnents/layouts/BaseLayout";
import Header from "../compnents/Header";
import Jobs from "./Jobs";
import Projects from "./projects";
import { Divider } from "@mui/material";
import Educations from "./Educations";
import IntroHeader from "../compnents/IntroHeader";
import Specialization from "../compnents/Specialization";
import Experience from "../compnents/Experience";

const Home = () => {
  return (
    <BaseLayout>
      <IntroHeader />
      <Specialization />
      <Experience />
      {/* <Header /> */}
      {/* <Jobs />
      <Divider />
      <Projects />
      <Educations /> */}
    </BaseLayout>
  );
};

export default Home;
