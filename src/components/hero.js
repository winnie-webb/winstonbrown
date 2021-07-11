import React, { useEffect } from "react";
import Header from "../layouts/header";

// Libraries
import TypeIt from "typeit";
const Hero = () => {
  // Run typing animation for heading
  useEffect(() => {
    new TypeIt("h1", {
      strings: ["Hey am Winston Brown.", "I build cool websites."],
      speed: 60,
      waitUntilVisible: true,
    }).go();
  });

  return (
    <section className="hero">
      <Header></Header>
      <div className="hero__contentWrapper">
        <h1 data-aos="fade-right" className="hero__heading"></h1>
        <button className="projects-view btn hero__btn">See projects</button>
      </div>
    </section>
  );
};
export default Hero;
