import React from "react";
import BaseLayout from "../compnents/layouts/BaseLayout";
import Header from "../compnents/Header";
import Jobs from "./Jobs";
import Projects from "./projects";
import { Divider, Typography } from "@mui/material";
import Educations from "./Educations";
import IntroHeader from "../compnents/IntroHeader";
import Specialization from "../compnents/Specialization";
import Experience from "../compnents/Experience";
import BreafAndIdea from "../compnents/BreafAndIdea";
import SelectedProjects from "../compnents/SelectedProjects";
import Testimonies from "../compnents/Testimonies";
import Companies from "../compnents/Companies";
import Technologies from "../compnents/Technologies";
import Contact from "../compnents/Contact";
import Footer from "../compnents/Footer";

const Home = () => {
  return (
    <BaseLayout>
      <IntroHeader />
      <Specialization />
      <Experience />
      <BreafAndIdea />
      <SelectedProjects />
      <Testimonies />
      <Companies />
      <Technologies />
      <Contact />
      <Footer />
    </BaseLayout>
  );
};

export default Home;
