import React from "react";

function ProjectCard({ project }) {
  console.log(project.image);
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={project.image}
        className="card-img-top"
        alt={`${project.name} screenshot`}
        style={{ height: "200px", width: "100%" }}
      />
      <div className="card-body">
        <h5 className="card-title">{project.name}</h5>
        <p className="card-text">{project.description}</p>
        <a href={`/project/${project.id}`} className="btn btn-primary">
          More info
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
