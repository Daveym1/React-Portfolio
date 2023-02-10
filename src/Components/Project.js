import React from "react";
import { useParams } from "react-router-dom";
import projects from "../data/projects.json";

export default function Project() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  if (!project) {
    return <div>Project not found</div>;
  }
  return (
    <div>
      <h1>{project.name}</h1>
    </div>
  );
}
