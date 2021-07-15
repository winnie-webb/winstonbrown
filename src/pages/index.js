import React, { useEffect, useRef } from "react";
import Head from "../components/head";
import Header from "../layouts/header";
import Hero from "../components/hero";
import Projects from "../components/projects";
import MySkills from "../components/myskills";
import Aboutme from "../components/aboutme";
import Contactme from "../components/contactme";
import Footer from "../layouts/footer";
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
  const heroSectionRef = useRef();
  const refs = {
    projectsSectionRef,
    myskillsSectionRef,
    aboutmeSectionRef,
    contactmeSectionRef,
    heroSectionRef,
  };
  return (
    <>
      <Head></Head>
      <Header refs={refs}></Header>
      <main>
        <article>
          <Hero heroSectionRef={heroSectionRef}></Hero>
          <Projects projectsSectionRef={projectsSectionRef}></Projects>
          <MySkills myskillsSectionRef={myskillsSectionRef}></MySkills>
          <Aboutme aboutmeSectionRef={aboutmeSectionRef}></Aboutme>
          <Contactme contactmeSectionRef={contactmeSectionRef}></Contactme>
        </article>
        <Footer></Footer>
      </main>
    </>
  );
};

export default HomePage;
