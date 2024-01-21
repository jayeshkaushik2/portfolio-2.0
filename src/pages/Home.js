import React from "react";
import BaseLayout from "../compnents/layouts/BaseLayout";
import Header from "../compnents/Header";
import Jobs from "./Jobs";

const Home = () => {
  return (
    <BaseLayout>
      <Header />
      <Jobs />
      Home
    </BaseLayout>
  );
};

export default Home;
