import { useState } from "react";
import { ChevronDown } from "lucide-react";
import './Features.css'
const features = [
  {
    id: "FT-001",
    name: "User Authentication",
    description: "Handles login, signup, and secure access.",
    scope: [
      "User registration with email and password validation",
      "Login and logout functionality",
      "JWT-based authentication handling",
      "Password reset and forgot password support",
    ],
  },
  {
    id: "FT-002",
    name: "Project Management",
    description: "Manage and track user projects efficiently.",
    scope: [
      "Create, update, and delete projects",
      "Assign users to projects",
      "Track project status and progress",
      "View project analytics and summaries",
    ],
  },
  {
    id: "FT-003",
    name: "Product Backlog",
    description: "Organize and prioritize backlog items.",
    scope: [
      "Create product backlog items",
      "Assign priority and status",
      "Link backlog to projects",
      "Track completion and updates",
    ],
  },
];

export default function LandingPage() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="feature-page">
  <div className="feature-card">
    <h2 className="feature-title">Feature List</h2>
    <p className="feature-subtitle">
      Explore features and their functional scope
    </p>

    <div className="feature-header">
      <div>ID</div>
      <div>Name</div>
      <div>Description</div>
      <div></div>
    </div>

    {features.map((feature) => (
      <div key={feature.id}>
        <div
          className="feature-row"
          onClick={() => toggle(feature.id)}
        >
          <div className="feature-id">{feature.id}</div>
          <div className="feature-name">{feature.name}</div>
          <div className="feature-desc">{feature.description}</div>
          <div className="feature-arrow">
            <ChevronDown
              className={openId === feature.id ? "rotate" : ""}
            />
          </div>
        </div>

        {openId === feature.id && (
          <div className="feature-accordion">
            <div className="feature-accordion-title">
              Functional Scope
            </div>
            <ul>
              {feature.scope.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="feature-divider"></div>
      </div>
    ))}
  </div>
</div>

  );
}
