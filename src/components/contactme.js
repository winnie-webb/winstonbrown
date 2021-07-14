import React from "react";
import githubIcon from "../images/github-icon-white.webp";
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
          <a
            className="github-link"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/winnie-webb"
          >
            <p className="contactme__detailsContent">
              <img src={githubIcon} alt="github icon" />
              <span> My Github</span>
            </p>
          </a>
        </div>
      </div>
      <div className="contactme__formWrapper">
        <h2 className="contactme__formHeading">Contact Me</h2>
        <form className="contactme__form">
          <div className="inputWrapper">
            <label htmlFor="name">Your Name *</label>
            <input
              id="name"
              name="name"
              className="form__input"
              required
            ></input>
          </div>
          <div className="inputWrapper">
            <label htmlFor="name">Your Email *</label>
            <input
              id="name"
              name="email"
              className="form__input"
              required
            ></input>
          </div>
          <div className="inputWrapper">
            <label htmlFor="phone-number">Phone Number</label>
            <input
              id="phone-number"
              name="phone-number"
              className="form__input"
            ></input>
          </div>
          <div className="inputWrapper">
            <label htmlFor="company-name">Company Name</label>
            <input
              id="company-name"
              name="company-name"
              className="form__input"
            ></input>
          </div>
          <div className="contactme__formMessage inputWrapper">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              className="form__input"
              required
            ></textarea>
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
