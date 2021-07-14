import React, { useEffect } from "react";
import Head from "../components/head";
import Header from "../layouts/header";
import Hero from "../components/hero";
import Projects from "../components/projects";
import MySkills from "../components/myskills";
import Aboutme from "../components/aboutme";
import Contactme from "../components/contactme";
import "../sass/pages/index.scss";
import AOS from "aos";
import "aos/dist/aos.css";
const HomePage = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <Head></Head>
      <Header></Header>
      <main>
        <article>
          <Hero></Hero>
          <Projects></Projects>
          <MySkills></MySkills>
          <Aboutme></Aboutme>
          <Contactme></Contactme>
        </article>
      </main>
    </>
  );
};

export default HomePage;
