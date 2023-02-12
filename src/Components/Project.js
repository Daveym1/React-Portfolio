import React from "react";
import { useParams } from "react-router-dom";
import projects from "../data/projects.json";

import { FaGithub, FaLink } from "react-icons/fa";

export default function Project() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  if (!project) {
    return <div>Project not found</div>;
  }
  return (
    <div className="card mb-3 mx-auto">
      <img src={project.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{project.name}</h5>
        <p className="card-text">{project.longDescription}</p>
        <div className="projectButtons">
          <a href={project.githubRepo} target="_blank" rel="noreferrer">
            <button type="button" className="btn btn-outline-dark">
              <FaGithub size={40} />
              GitHub Repo
            </button>
          </a>
          <a href={project.liveLink} target="_blank" rel="noreferrer">
            <button type="button" className="btn btn-outline-dark">
              <FaLink size={40} />
              Live App
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
