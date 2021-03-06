import React from "react";
import aboutmeImage from "../images/aboutme.svg";
const Aboutme = (props) => {
  const { aboutmeSectionRef } = props;
  return (
    <section ref={aboutmeSectionRef} className="aboutme">
      <h2 className="heading">About Me</h2>
      <div className="aboutme__main">
        <div className="aboutme__contentWrapper">
          <p className="aboutme__content">
            If you didn't read my intro, my name is Winston Brown and am a web
            developer. I love creating beautiful and clean websites. I strive to
            give my clients the best satisfaction possible and I honestly care
            about their business's success. I fancy myself as being language
            agnostic and I love learning new technologies. Apart from web
            development I love watching anime and just chilling with friends.
          </p>
        </div>
        <div className="aboutme__imageWrapper">
          <img src={aboutmeImage} alt="About me undraw svg" />
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
