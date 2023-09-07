import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Skip from "../components/Skip";
import Main from "../components/Main";
import Intro from "../pages/Intro";
import Skill from "../pages/Skill";
import Site from "../pages/Site";
import Port from "../pages/Port";
import Contact from "../pages/Contact";

const Home = () => {
  return (
    <>
      <Skip />
      <Header />
      <Main>
        <Intro />
        <Skill />
        <Site />
        <Port />
        <Contact />
      </Main>
      <Footer />
    </>
  );
};

export default Home;
