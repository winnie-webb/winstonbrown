import React from "react";
import githubIcon from "../images/github-icon-white.png";
const Contactme = () => {
  return (
    <section data-aos="zoom-in" data-aos-duration="1200" className="contactme">
      <div className="contactme__detailsWrapper">
        <h2 className="contactme__detailsHeading">Contact Info</h2>
        <div className="contactme__details">
          <p className="contactme__detailsContent">
            <span className="email-icon">✉ </span>
            winstonbrown872@gmail.com
          </p>

          <p className="contactme__detailsContent">
            <span className="email-icon">✆ </span>
            +1 (876) 832-2562
          </p>

          <p className="contactme__detailsContent">
            <img src={githubIcon} />
            <span> My Github</span>
          </p>
        </div>
      </div>
      <div className="contactme__formWrapper">
        <h2 className="contactme__formHeading">Contact Me</h2>
        <form className="contactme__form">
          <div className="inputWrapper">
            <label>Your Name *</label>
            <input className="form__input" required></input>
          </div>
          <div className="inputWrapper">
            <label>Your Email *</label>
            <input className="form__input" required></input>
          </div>
          <div className="inputWrapper">
            <label>Phone Number</label>
            <input className="form__input"></input>
          </div>
          <div className="inputWrapper">
            <label>Company Name</label>
            <input className="form__input"></input>
          </div>
          <div className="contactme__formMessage inputWrapper">
            <label>Message *</label>
            <textarea className="form__input" required></textarea>
          </div>
          <button type="submit" className="btn contactme__btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contactme;
