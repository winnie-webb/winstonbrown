import React, { useEffect, useRef } from "react";
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
  const projectsSectionRef = useRef();
  const myskillsSectionRef = useRef();
  const aboutmeSectionRef = useRef();
  const contactmeSectionRef = useRef();
  const refs = {
    projectsSectionRef,
    myskillsSectionRef,
    aboutmeSectionRef,
    contactmeSectionRef,
  };
  return (
    <>
      <Head></Head>
      <Header refs={refs}></Header>
      <main>
        <article>
          <Hero></Hero>
          <Projects projectsSectionRef={projectsSectionRef}></Projects>
          <MySkills myskillsSectionRef={myskillsSectionRef}></MySkills>
          <Aboutme aboutmeSectionRef={aboutmeSectionRef}></Aboutme>
          <Contactme contactmeSectionRef={contactmeSectionRef}></Contactme>
        </article>
      </main>
    </>
  );
};

export default HomePage;
