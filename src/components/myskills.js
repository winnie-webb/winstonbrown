import React from "react";
const MySkills = (props) => {
  const { myskillsSectionRef } = props;
  return (
    <section ref={myskillsSectionRef} className="myskills">
      <h2
        data-aos="fade-right"
        data-aos-duration="1500"
        className="myskills__heading heading"
      >
        My Skills
      </h2>
      <div className="myskills__showcase">
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="skills frontend"
        >
          <h3 className="skills__heading">Frontend</h3>
          <ul className="skills__list">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JS</li>
            <li>SASS</li>
            <li>ReactJS</li>
            <li>GatsbyJS</li>
          </ul>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="skills backend"
        >
          <h3 className="skills__heading">Backend</h3>
          <ul className="skills__list">
            <li>NodeJS</li>
            <li>ExpressJS</li>
            <li>PHP</li>
            <li>Laravel</li>
            <li>EJS</li>
            <li>Graphql</li>
          </ul>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay
          className="skills other"
        >
          <h3 className="skills__heading">Tools</h3>
          <ul className="skills__list">
            <li>MongoDb</li>
            <li>MySql</li>
            <li>Git</li>
            <li>NPM</li>
            <li>VS Code</li>
            <li>Figma</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MySkills;
// Make navbar sticky
// Add delay to animations
