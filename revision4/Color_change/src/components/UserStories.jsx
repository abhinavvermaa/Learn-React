import { useState } from "react";
import "./UserStories.css";

const userStories = [
  {
    id: "US-001",
    type: "Development",
    epic: "EPIC-AUTH-LOGIN",
    title: "User Login with JWT Authentication",
    description:
      "Implement secure user login using email/password with JWT-based session management",
    acceptanceCriteria: [
      "User can log in with valid credentials",
      "Invalid credentials return HTTP 401",
      "Access and refresh tokens are generated",
    ],
    tasks: [
      {
        title: "Design Login API Contract",
        acceptanceCriteria: [
          "OpenAPI schema published",
          "Error codes documented",
        ],
        subTasks: [
          {
            title: "Define POST /auth/login schema",
            acceptanceCriteria: [
              "Email & password validation rules defined",
              "Response includes access & refresh tokens",
            ],
          },
          {
            title: "Standardize error response",
            acceptanceCriteria: [
              "Error format consistent across services",
              "Examples added in documentation",
            ],
          },
        ],
      },
      {
        title: "Implement Login Backend Logic",
        acceptanceCriteria: [
          "Credentials validated securely",
          "JWT tokens generated correctly",
        ],
        subTasks: [
          {
            title: "Validate user credentials",
            acceptanceCriteria: [
              "Password hashing verified",
              "Inactive users blocked",
            ],
          },
          {
            title: "Generate JWT tokens",
            acceptanceCriteria: [
              "Access token expiry set",
              "Refresh token stored securely",
            ],
          },
        ],
      },
    ],
  },

  {
    id: "US-002",
    type: "Development",
    epic: "EPIC-USER-MGMT",
    title: "User Management Module",
    description: "Enable admin users to manage application users",
    acceptanceCriteria: [
      "Admin can create users",
      "Admin can deactivate users",
      "Roles can be assigned",
    ],
    tasks: [
      {
        title: "Create User APIs",
        acceptanceCriteria: [
          "User creation endpoint available",
          "Input validation enforced",
        ],
        subTasks: [
          {
            title: "Validate user input",
            acceptanceCriteria: [
              "Email uniqueness checked",
              "Required fields enforced",
            ],
          },
          {
            title: "Persist user to database",
            acceptanceCriteria: [
              "User saved successfully",
              "Default role assigned",
            ],
          },
        ],
      },
      {
        title: "Deactivate User Feature",
        acceptanceCriteria: ["User status updated", "Deactivated user blocked"],
        subTasks: [
          {
            title: "Update user status",
            acceptanceCriteria: [
              "Status changed to inactive",
              "Audit log updated",
            ],
          },
          {
            title: "Restrict login access",
            acceptanceCriteria: [
              "Inactive users cannot log in",
              "Proper error returned",
            ],
          },
        ],
      },
    ],
  },

  {
    id: "US-003",
    type: "Enhancement",
    epic: "EPIC-PROJECTS",
    title: "Project Management",
    description: "Allow users to create and manage projects",
    acceptanceCriteria: ["Projects can be created", "Users can be assigned"],
    tasks: [
      {
        title: "Create Project APIs",
        acceptanceCriteria: [
          "Project creation supported",
          "Owner assigned automatically",
        ],
        subTasks: [
          {
            title: "Validate project input",
            acceptanceCriteria: [
              "Project name required",
              "Duplicate names handled",
            ],
          },
          {
            title: "Save project data",
            acceptanceCriteria: [
              "Project stored in DB",
              "Owner relationship created",
            ],
          },
        ],
      },
      {
        title: "Assign Users to Project",
        acceptanceCriteria: ["Users can be added", "Only owner can assign"],
        subTasks: [
          {
            title: "Add user-project mapping",
            acceptanceCriteria: [
              "Multiple users supported",
              "Duplicate assignment avoided",
            ],
          },
          {
            title: "Permission validation",
            acceptanceCriteria: [
              "Only owner allowed",
              "Unauthorized access blocked",
            ],
          },
        ],
      },
    ],
  },

  {
    id: "US-004",
    type: "Enhancement",
    epic: "EPIC-NOTIFICATIONS",
    title: "Notification System",
    description: "Notify users about system and project events",
    acceptanceCriteria: [
      "In-app notifications supported",
      "Notifications can be marked read",
    ],
    tasks: [
      {
        title: "In-App Notification Service",
        acceptanceCriteria: ["Notifications stored", "Unread count maintained"],
        subTasks: [
          {
            title: "Save notifications",
            acceptanceCriteria: [
              "Stored in database",
              "User mapping maintained",
            ],
          },
          {
            title: "Mark as read",
            acceptanceCriteria: ["Read status updated", "Unread count reduced"],
          },
        ],
      },
      {
        title: "Email Notifications",
        acceptanceCriteria: [
          "Emails sent for critical events",
          "Templates standardized",
        ],
        subTasks: [
          {
            title: "Create email templates",
            acceptanceCriteria: [
              "Reusable templates created",
              "Branding applied",
            ],
          },
          {
            title: "Send notification emails",
            acceptanceCriteria: [
              "Emails triggered correctly",
              "Failures logged",
            ],
          },
        ],
      },
    ],
  },

  {
    id: "US-005",
    type: "Development",
    epic: "EPIC-REPORTS",
    title: "Reporting Module",
    description: "Generate reports for admin users",
    acceptanceCriteria: ["Reports visible in dashboard", "Export supported"],
    tasks: [
      {
        title: "Generate Summary Reports",
        acceptanceCriteria: [
          "Data aggregated correctly",
          "Reports load efficiently",
        ],
        subTasks: [
          {
            title: "Fetch report data",
            acceptanceCriteria: [
              "Correct filters applied",
              "Large data handled",
            ],
          },
          {
            title: "Render report view",
            acceptanceCriteria: [
              "Charts rendered correctly",
              "Pagination supported",
            ],
          },
        ],
      },
      {
        title: "Export Reports",
        acceptanceCriteria: ["Export to CSV", "Export to PDF"],
        subTasks: [
          {
            title: "Generate CSV file",
            acceptanceCriteria: [
              "Headers included",
              "Data formatted correctly",
            ],
          },
          {
            title: "Generate PDF file",
            acceptanceCriteria: ["Layout readable", "Download triggered"],
          },
        ],
      },
    ],
  },
];

export default function UserStories() {
  const [selectedStory, setSelectedStory] = useState(null);

  return (
    <div className="story-page">
      <div className="page-header">
    <h1>User Stories</h1>
    <p>Browse and review all user stories with tasks and subtasks</p>
  </div>
      {/* STORY LIST */}
      <div className="story-list">
        {userStories.map((story) => (
          <div
            key={story.id}
            className="story-card"
            onClick={() => setSelectedStory(story)}
          >
            <span className="story-type">{story.type}</span>
            <h3>{story.title}</h3>
            <p>{story.description}</p>
            <span className="story-epic">{story.epic}</span>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedStory && (
        <div className="modal-overlay" onClick={() => setSelectedStory(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setSelectedStory(null)}
            >
              ✕
            </button>

            <h2>{selectedStory.title}</h2>
            <p className="modal-desc">{selectedStory.description}</p>

            <section>
              <h4>Acceptance Criteria</h4>
              <ul>
                {selectedStory.acceptanceCriteria.map((ac, i) => (
                  <li key={i}>{ac}</li>
                ))}
              </ul>
            </section>

            <section>
              <h4>Tasks</h4>

              {selectedStory.tasks.map((task, taskIndex) => (
                <div key={taskIndex} className="modal-task">
                  <h5>
                    Task {taskIndex + 1}: {task.title}
                  </h5>

                  <strong>Task Acceptance Criteria</strong>
                  <ul>
                    {task.acceptanceCriteria.map((ac, j) => (
                      <li key={j}>{ac}</li>
                    ))}
                  </ul>

                  <strong>Sub-Tasks</strong>
                  {task.subTasks.map((sub, subIndex) => (
                    <div key={subIndex} className="modal-subtask">
                      <span className="subtask-title">
                        Subtask {taskIndex + 1}.{subIndex + 1}: {sub.title}
                      </span>

                      <ul>
                        {sub.acceptanceCriteria.map((ac, x) => (
                          <li key={x}>{ac}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ))}
            </section>
          </div>
        </div>
      )}
    </div>
  );
}
