import React, { useState } from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  // Mock Project Data
  const projectData = [
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
            {
              step_name: "Set Up Development Environment",
              completed: true,
            },
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
            {
              step_name: "Set Up Development Environment",
              completed: true,
            },
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

  // State to manage selected project and dark mode
  const [selectedProject, setSelectedProject] = useState<number>(0);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // Function to calculate completed steps
  const calculateCompletedSteps = (steps: { completed: boolean }[]) => {
    return steps.filter(step => step.completed).length;
  };

  const COLORS = ['#0088FE', '#FF8042'];

  // Toggle dark mode
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`container ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <h1 className="text-center mt-4">Software Project Status Management</h1>

      {/* Dark Mode Toggle Button */}
      <div className="text-right">
        <button className="btn btn-secondary mb-3" onClick={toggleDarkMode}>
          {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      </div>

      {/* Tab Navigation for Projects */}
      <ul className={`nav nav-tabs ${darkMode ? 'bg-secondary' : ''}`}>
        {projectData.map((project, index) => (
          <li className="nav-item" key={project.id}>
            <button
              className={`nav-link ${selectedProject === index ? 'active' : ''} ${darkMode ? 'bg-dark text-light' : ''}`}
              onClick={() => setSelectedProject(index)}
            >
              {project.name}
            </button>
          </li>
        ))}
      </ul>

      {/* Project Dashboard */}
      <div className="mt-4">
        <h2>{projectData[selectedProject].name} - SDLC Stages</h2>
        
        {projectData[selectedProject].stages.map((stage, stageIndex) => (
          <div key={stageIndex} className={`card mt-3 ${darkMode ? 'bg-dark text-light' : ''}`} style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <div className="card-body">
              <h5 className="card-title">{stage.name}</h5>
              <div className="row">
                {stage.steps.map((step, stepIndex) => (
                  <div className="col-12 col-md-4" key={stepIndex}>
                    <p className={step.completed ? 'text-success' : 'text-danger'}>
                      {step.step_name} - {step.completed ? 'Completed' : 'Pending'}
                    </p>
                  </div>
                ))}
              </div>

              {/* Pie Chart to show completed vs pending steps */}
              <PieChart width={200} height={200}>
                <Pie
                  data={[
                    { name: 'Completed', value: calculateCompletedSteps(stage.steps) },
                    { name: 'Pending', value: stage.steps.length - calculateCompletedSteps(stage.steps) },
                  ]}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label
                  dataKey="value"
                >
                  {[
                    { name: 'Completed', value: calculateCompletedSteps(stage.steps) },
                    { name: 'Pending', value: stage.steps.length - calculateCompletedSteps(stage.steps) },
                  ].map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
