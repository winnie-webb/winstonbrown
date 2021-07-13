import * as React from "react";
import Head from "../components/head";
import Header from "../layouts/header";
import Hero from "../components/hero";
import Projects from "../components/projects";
import MySkills from "../components/myskills";
import "../sass/pages/index.scss";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const homePage = () => {
  return (
    <>
      <Head></Head>
      <Header></Header>
      <main>
        <article>
          <Hero></Hero>
          <Projects></Projects>
          <MySkills></MySkills>
        </article>
      </main>
    </>
  );
};

export default homePage;
