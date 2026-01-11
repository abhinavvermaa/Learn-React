import React from "react";
import "./UserProjects.css";

const projects = [
  { id: 1, name: "Project Alpha", backlog: 12, status: "Completed" },
  { id: 2, name: "Project Beta", backlog: 8, status: "Pending" },
  { id: 3, name: "Project Gamma", backlog: 15, status: "Completed" },
  { id: 4, name: "Project Delta", backlog: 5, status: "Pending" },
  { id: 5, name: "Project Omega", backlog: 10, status: "Completed" },
];

export default function UserProjects() {
  return (
    <div className="up-page">
      <h1 className="up-title">User Projects</h1>
      <p className="up-subtitle">Overview of all assigned projects</p>

      <div className="up-grid">
        {projects.map((project) => (
          <div key={project.id} className="up-card">
            <h3 className="project-name">{project.name}</h3>

            <p className="backlog">
              Product Backlog: <strong>{project.backlog}</strong>
            </p>

            <span
              className={`status ${
                project.status.toLowerCase() === "completed"
                  ? "completed"
                  : "pending"
              }`}
            >
              {project.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
