import React from "react";
import { useParams, Link } from "react-router-dom";
import projects from "../data/projects.json";
import { Card } from "react-bootstrap";

export default function Project() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  if (!project) {
    return <div>Project not found</div>;
  }
  return (
    <div className="projectCard">
      {/* <Link to="/projects">Go back to projects</Link>
      <h1>{project.name}</h1>
      <p>{project.longDescription}</p> */}

      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={project.image}
          className="card-img-top"
          alt={`${project.name} screenshot`}
          style={{ height: "200px", width: "100%" }}
          key={project.id}
        />
        <Card.Body>
          <Card.Title>{project.name}</Card.Title>
          <Card.Text>{project.longDescription}</Card.Text>
        </Card.Body>

        <Card.Body>
          <Card.Link href={project.githubRepo}>GitHub Repo</Card.Link>
          <Card.Link href={project.liveLink}>Live Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}
