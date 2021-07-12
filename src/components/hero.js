import React, { useEffect } from "react";
import Header from "../layouts/header";

// Libraries
import TypeIt from "typeit";
const Hero = () => {
  // Run typing animation for heading
  useEffect(() => {
    new TypeIt(".hero__heading", {
      strings: ["I'm Winston Brown,", "Web developer"],
      speed: 60,
    }).go();
    new TypeIt(".hero__content", {
      strings: [
        "My name is Winston Brown, I will build your website from scratch",
        "using any technology of your choosing. I am always open",
        " to learn new technologies and I just get things done...",
      ],
      speed: 20,
    }).go();
  });

  return (
    <section className="hero">
      <Header></Header>
      <div className="hero__contentWrapper">
        <h1 className="hero__heading"></h1>
        <p className="hero__content"></p>
        <button className="projects-view btn hero__btn">See projects</button>
      </div>
      <div className="bubble__wrapper">
        <div
          data-aos="fade-down"
          data-aos-duration="1500"
          className="bubble jshine"
        ></div>
        <div
          data-aos="fade-right"
          data-aos-duration="1500"
          className="bubble sublime"
        ></div>
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="bubble timber"
        ></div>
      </div>
    </section>
  );
};
export default Hero;
