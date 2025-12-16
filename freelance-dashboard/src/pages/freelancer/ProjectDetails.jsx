import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  getAssignedProjects,
  saveProjects
} from "../../services/freelancerService";
import TaskItem from "../../components/TaskItem";

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const projects = getAssignedProjects();
    const found = projects.find(p => p.id === id);
    setProject(found);
  }, [id]);

  const updateTask = (projectId, updatedTask) => {
    const all = getAssignedProjects();

    const updatedProjects = all.map(project =>
      project.id === projectId
        ? {
            ...project,
            tasks: project.tasks.map(task =>
              task.id === updatedTask.id ? updatedTask : task
            )
          }
        : project
    );

    saveProjects(updatedProjects);
    setProject(updatedProjects.find(p => p.id === projectId));
  };

  if (!project) {
    return <p className="p-6">Loading...</p>;
  }

  return (
    <div className="p-6">
      {/* 🔙 BACK BUTTON */}
      <button
        onClick={() => navigate("/")}
        className="mb-4 text-sm text-indigo-600 hover:underline"
      >
        ← Back to Dashboard
      </button>

      <h1 className="text-xl font-semibold mb-4">
        {project.title}
      </h1>

      {project.tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          projectId={project.id}
          onTaskUpdate={updateTask}
        />
      ))}
    </div>
  );
}
