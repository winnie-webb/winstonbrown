import React from "react";
import githubIcon from "../images/github-icon-white.png";
import viewSiteIcon from "../images/view-site.svg";
const Project = (props) => {
  const {
    imgSrc,
    projectTags,
    projectDescription,
    projectGithubLink,
    projectSiteLink,
  } = props.project;
  return (
    <div className="project">
      <div className="project__imageWrapper">
        <img src={imgSrc} alt="Screenshot of project" />
        <div className="project__description">
          <p className="project__content">{projectDescription}</p>
        </div>
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
        <a href={projectGithubLink} target="_blank">
          <div className="view-code project__link">
            <img src={githubIcon} alt="github icon light" />
            <span>View Code</span>
          </div>
        </a>
        <a href={projectSiteLink} target="_blank">
          <div className="view-site project__link">
            <img alt="live icon" src={viewSiteIcon} />
            <span>View Site </span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Project;
