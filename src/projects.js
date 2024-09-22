export const project = [
  {
    id: 1,
    name: "Project A",
    stages: [
      {
        name: "Requirement Gathering",
        steps: [
          { step_name: "Identify Stakeholders", completed: true },
          { step_name: "Collect Requirements", completed: true },
          { step_name: "Analyze Requirements", completed: true },
          { step_name: "Create Requirement Document", completed: false },
          { step_name: "Review and Approve", completed: false },
        ],
      },
      {
        name: "Design",
        steps: [
          { step_name: "Create System Design", completed: true },
          { step_name: "Design UI Mockups", completed: false },
          { step_name: "Database Design", completed: false },
          { step_name: "Review Design", completed: false },
          { step_name: "Approval", completed: false },
        ],
      },
      {
        name: "Development",
        steps: [
          { step_name: "Set Up Development Environment", completed: true },
          { step_name: "Write Code", completed: true },
          { step_name: "Code Review", completed: false },
          { step_name: "Fix Bugs", completed: false },
          { step_name: "Integrate Modules", completed: false },
        ],
      },
      {
        name: "Testing",
        steps: [
          { step_name: "Unit Testing", completed: true },
          { step_name: "Integration Testing", completed: true },
          { step_name: "System Testing", completed: false },
          { step_name: "User Acceptance Testing", completed: false },
          { step_name: "Bug Fixes", completed: false },
        ],
      },
      {
        name: "Deployment",
        steps: [
          { step_name: "Prepare Deployment Plan", completed: false },
          { step_name: "Set Up Server", completed: false },
          { step_name: "Deploy to Staging", completed: false },
          { step_name: "Smoke Testing", completed: false },
          { step_name: "Final Deployment", completed: false },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Project B",
    stages: [
      {
        name: "Requirement Gathering",
        steps: [
          { step_name: "Identify Stakeholders", completed: true },
          { step_name: "Collect Requirements", completed: true },
          { step_name: "Analyze Requirements", completed: true },
          { step_name: "Create Requirement Document", completed: true },
          { step_name: "Review and Approve", completed: false },
        ],
      },
      {
        name: "Design",
        steps: [
          { step_name: "Create System Design", completed: true },
          { step_name: "Design UI Mockups", completed: true },
          { step_name: "Database Design", completed: false },
          { step_name: "Review Design", completed: false },
          { step_name: "Approval", completed: false },
        ],
      },
      {
        name: "Development",
        steps: [
          { step_name: "Set Up Development Environment", completed: true },
          { step_name: "Write Code", completed: false },
          { step_name: "Code Review", completed: false },
          { step_name: "Fix Bugs", completed: false },
          { step_name: "Integrate Modules", completed: false },
        ],
      },
      {
        name: "Testing",
        steps: [
          { step_name: "Unit Testing", completed: true },
          { step_name: "Integration Testing", completed: false },
          { step_name: "System Testing", completed: false },
          { step_name: "User Acceptance Testing", completed: false },
          { step_name: "Bug Fixes", completed: false },
        ],
      },
      {
        name: "Deployment",
        steps: [
          { step_name: "Prepare Deployment Plan", completed: false },
          { step_name: "Set Up Server", completed: false },
          { step_name: "Deploy to Staging", completed: false },
          { step_name: "Smoke Testing", completed: false },
          { step_name: "Final Deployment", completed: false },
        ],
      },
    ],
  },
];
