import React from "react";
import githubIcon from "../images/github-icon-white.png";
const Project = (props) => {
  const { imgSrc, projectTags } = props.project;
  return (
    <div data-aos="fade-up" data-aos-duration="1200" className="project">
      <div className="project__imageWrapper">
        <img src={imgSrc} alt="" />
      </div>
      <div className="project__contentWrapper">
        {/* <p className="project__content">{projectDescription}</p> */}
      </div>
      <div className="project__tags">
        {projectTags.map((tagText, index) => {
          return (
            <span key={index} className="project__tag">
              {tagText}
            </span>
          );
        })}
      </div>
      <div className="project__links">
        <div className="view-code project__link">
          <img src={githubIcon} alt="github icon light" />
          <span>View Code</span>
        </div>
        <div className="view-site project__link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-external-link"
          >
            <title>External Link</title>
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
          <span>View Site </span>
        </div>
      </div>
    </div>
  );
};

export default Project;
