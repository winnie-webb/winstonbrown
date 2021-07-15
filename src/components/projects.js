import React from "react";
import projectsObject from "./projects-objects";
import Project from "./project";
const Projects = (props) => {
  const { projectsSectionRef } = props;
  const { etrackyProject, tonyartsProject, btProject, jettProject } =
    projectsObject;
  return (
    <section ref={projectsSectionRef} className="projects">
      <h2
        data-aos="fade-right"
        data-aos-duration="1000"
        className="projects__heading heading"
      >
        Projects
      </h2>
      <div className="projects-showcase">
        <Project project={etrackyProject}></Project>
        <Project project={tonyartsProject}></Project>
        <Project project={btProject}></Project>
        <Project project={jettProject}></Project>
      </div>
    </section>
  );
};

export default Projects;
