import React from "react";
import projects from "../data/projects.json";
import ProjectCard from "./ProjectCard";

export default function ProjectsPage() {
  return (
    <div className="container">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
