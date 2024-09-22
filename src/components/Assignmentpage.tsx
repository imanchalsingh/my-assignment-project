import React, { useEffect, useMemo, useState } from "react";
import { useSpring, animated } from "react-spring";
import { Card, Progress, Input } from "reactstrap";

interface Step {
  step_name: string;
  completed: boolean;
}

interface Stage {
  name: string;
  steps: Step[];
}

interface Project {
  id: number;
  name: string;
  stages: Stage[];
}

const InteractiveElement = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const mockData = {
      projects: [
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
      ],
    };
    setProjects(mockData.projects);
    setSelectedProject(mockData.projects[0]);
  }, []);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) =>
      project.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [projects, searchTerm]);

  const handleProjectSelect = (project: Project) => {
    setSelectedProject(project);
  };

  const getStageProgress = (stage: Stage) => {
    const completedSteps = stage.steps.filter(
      (step) => step.completed
    ).length;
    return (completedSteps / stage.steps.length) * 100;
  };

  const springProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 500 },
  });

  return (
    <animated.div style={springProps} className="p-4 bg-light min-vh-100">
      <h1 className="h3 mb-4 text-center text-primary">
        Software Project Status Dashboard
      </h1>

      <div className="mb-4">
        <Input
          type="text"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="row mb-4">
        {filteredProjects.map((project) => (
          <div key={project.id} className={`col-md-4 mb-4`}>
            <Card
              className={`cursor-pointer border ${
                selectedProject?.id === project.id ? "border-primary" : ""
              }`}
              onClick={() => handleProjectSelect(project)}
            >
              <div className="card-header d-flex align-items-center">
                <h5 className="mb-0">{project.name}</h5>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Total Stages: {project.stages.length}
                </p>
              </div>
            </Card>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="bg-white rounded shadow p-4">
          <h2 className="h5 mb-4 text-center">
            {selectedProject.name} - Progress
          </h2>
          <div className="mb-4">
            {selectedProject.stages.map((stage, index) => (
              <div key={index} className="bg-light p-3 rounded mb-4">
                <h3 className="h6">{stage.name}</h3>
                <Progress value={getStageProgress(stage)} className="mb-2" />
                <div className="list-group">
                  {stage.steps.map((step, stepIndex) => (
                    <div
                      key={stepIndex}
                      className={`list-group-item d-flex justify-content-between align-items-center ${
                        step.completed
                          ? "bg-success text-white"
                          : "bg-danger text-white"
                      }`}
                    >
                      <span>{step.step_name}</span>
                      {step.completed ? (
                        <i className="fas fa-check-circle text-white"></i>
                      ) : (
                        <i className="fas fa-times-circle text-white"></i>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </animated.div>
  );
};

export default InteractiveElement;
