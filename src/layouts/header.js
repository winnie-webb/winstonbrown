import React from "react";

const Header = () => {
  return (
    <header className="header animate__animated animate__fadeInDown">
      <div className="header__logoWrapper">
        <a href="/">
          <img
            className="header__logo"
            src="https://render.bitstrips.com/v2/cpanel/6972338-99036697696_3-s5-v1.png?transparent=1&palette=1"
          />
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
