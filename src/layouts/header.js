import React from "react";
import logo from "../images/logo.png";
const Header = () => {
  return (
    <header data-aos="fade-down" data-aos-duration="1500" className="header">
      <div className="header__logoWrapper">
        <a href="/">
          <img className="header__logo" src={logo} />
        </a>
      </div>
      <nav>
        <ul className="header__nav">
          <li className="header__navLink">My Skills</li>
          <li className="header__navLink">Projects</li>
          <li className="header__navLink">About Me</li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
