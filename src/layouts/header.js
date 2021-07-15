import React from "react";
import logo from "../images/logo.png";
const Header = (props) => {
  const {
    projectsSectionRef,
    myskillsSectionRef,
    aboutmeSectionRef,
    contactmeSectionRef,
  } = props.refs;
  return (
    <header data-aos="fade-down" data-aos-duration="1500" className="header">
      <div className="header__logoWrapper">
        <a href="/">
          <img alt="Black Bitmoji" className="header__logo" src={logo} />
        </a>
      </div>
      <nav>
        <ul className="header__nav">
          <li
            onClick={() => {
              projectsSectionRef.current.scrollIntoView({ behavior: "smooth" });
            }}
            className="header__navLink"
          >
            Projects
          </li>
          <li
            onClick={() => {
              myskillsSectionRef.current.scrollIntoView({ behavior: "smooth" });
            }}
            className="header__navLink"
          >
            My Skills
          </li>
          <li
            onClick={() => {
              aboutmeSectionRef.current.scrollIntoView({ behavior: "smooth" });
            }}
            className="header__navLink"
          >
            About Me
          </li>
          <li
            onClick={() => {
              contactmeSectionRef.current.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="header__navLink"
          >
            Contact Me
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
