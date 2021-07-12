import React from "react";
import projectsObject from "./projects-objects";
import Project from "./project";
const Projects = () => {
  const { etrackyProject, tonyartsProject, btProject, jettProject } =
    projectsObject;
  return (
    <section className="projects">
      <h2 className="projects__heading">Projects</h2>
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
