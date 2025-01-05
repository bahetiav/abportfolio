import React, { useState, useEffect } from "react";
import "./Projects.css";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => setProjects(data.filter((project) => project.isActive)))
      .catch((error) => console.error("Error loading projects:", error));
  }, []);

  return (
    <div className="main">
      <h1>Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-tile" key={index}>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.name} className="project-image" />
            </a>
            <h2>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                {project.name}
              </a>
            </h2>
            <p className="desc-style">{project.description}</p>
            <div>
            <br/>
              <hr className="desh-line"></hr>
              <label className="blink">👇 More Details </label>
              <hr className="desh-line"></hr>
              <br/>
              {project.gitPath && (
                <a href={project.gitPath} target="_blank" rel="noopener noreferrer" className="project-link">
                  <img src="Git-Icon-logo.png" alt="Git URL" className="image-icon" />
                </a>
              )}
              {project.youtube && (
                <a href={project.youtube} target="_blank" rel="noopener noreferrer" className="project-link">
                  <img src="youtube.png" alt="YouTube URL" className="image-icon" />
                </a>
              )}
              {project.medium && (
                <a href={project.medium} target="_blank" rel="noopener noreferrer" className="project-link">
                  <img src="mediumlogo.png" alt="Medium URL" className="image-icon" />
                </a>
              )}
            </div>
            <br/>
            <h5>
              {project.tag.map((tg, index) => (
                <React.Fragment key={index}>#{tg} </React.Fragment>
              ))}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;