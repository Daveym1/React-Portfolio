import React from "react";
import { useParams, Link } from "react-router-dom";
import projects from "../data/projects.json";

export default function Project() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  if (!project) {
    return <div>Project not found</div>;
  }
  return (
    <div>
      <Link to="/projects">Go back to projects</Link>
      <h1>{project.name}</h1>
      <p>{project.longDescription}</p>
    </div>
  );
}
