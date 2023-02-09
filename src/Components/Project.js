import React from "react";

export default function Project({ match }) {
  const project = projects.find((p) => p.id === match.params.id);
  return <div>Project</div>;
}
