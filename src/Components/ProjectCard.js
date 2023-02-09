import React from "react";
import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={project.image}
        className="card-img-top"
        alt={`${project.name} screenshot`}
        style={{ height: "200px", width: "100%" }}
        key={project.id}
      />
      <div className="card-body">
        <h5 className="card-title">{project.name}</h5>
        <p className="card-text">{project.description}</p>
        <Link to={`/project/${project.id}`} className="btn btn-primary">
          More info
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
