import React from "react";
import { useParams } from "react-router-dom";

export default function Project({ match }) {
  const project = projects.find((p) => p.id === match.params.id);
  return (
    <div>
      <h1>{project.name}</h1>
    </div>
  );
}
