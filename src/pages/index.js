import * as React from "react";
import Head from "../components/head";
import Hero from "../components/hero";
import "../sass/pages/index.scss";
const homePage = () => {
  return (
    <>
      <Head></Head>
      <main>
        <article>
          <Hero></Hero>
        </article>
      </main>
    </>
  );
};

export default homePage;
