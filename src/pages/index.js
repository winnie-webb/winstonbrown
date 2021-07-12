import * as React from "react";
import { useEffect } from "react";
import Head from "../components/head";
import Hero from "../components/hero";
import Projects from "../components/projects";
import "../sass/pages/index.scss";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const homePage = () => {
  return (
    <>
      <Head></Head>
      <main>
        <article>
          <Hero></Hero>
          <Projects></Projects>
        </article>
      </main>
    </>
  );
};

export default homePage;