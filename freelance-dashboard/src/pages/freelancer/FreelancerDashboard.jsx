import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAssignedProjects,
  saveProjects
} from "../../services/freelancerService";

export default function FreelancerDashboard() {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

 useEffect(() => {
  const data = getAssignedProjects();
  setProjects(Array.isArray(data) ? data : []);
}, []);


  const updateStatus = (projectId, status) => {
    setProjects(prev => {
      const updated = prev.map(project =>
        project.id === projectId
          ? { ...project, status }
          : project
      );
      saveProjects(updated);
      return updated;
    });
  };

  const getTotalTime = tasks => {
    const total = tasks.reduce(
      (sum, t) => sum + (t.timeSpent || 0),
      0
    );
    const m = Math.floor(total / 60);
    const s = total % 60;
    return `${m}m ${s}s`;
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">
        My Projects
      </h1>

      {projects.map(project => (
        <div
          key={project.id}
          className={`p-4 shadow mb-4 rounded ${
            project.status === "declined"
              ? "bg-gray-100 text-gray-400"
              : "bg-white"
          }`}
        >
          <h2 className="font-medium text-lg">
            {project.title}
          </h2>

          <p className="text-sm text-gray-600 mt-1">
            Total Time: {getTotalTime(project.tasks)}
          </p>

          {/* 🔥 ACTION AREA */}
          <div className="mt-3">
            {project.status === "pending" && (
              <div className="flex gap-2">
                <button
                  onClick={() =>
                    updateStatus(project.id, "accepted")
                  }
                  className="px-3 py-1 text-sm bg-indigo-600 text-white rounded"
                >
                  Accept
                </button>

                <button
                  onClick={() =>
                    updateStatus(project.id, "declined")
                  }
                  className="px-3 py-1 text-sm border rounded"
                >
                  Decline
                </button>
              </div>
            )}

            {project.status === "accepted" && (
              <button
                onClick={() =>
                  navigate(`/project/${project.id}`)
                }
                className="mt-2 text-sm text-indigo-600 hover:underline"
              >
                Open Project →
              </button>
            )}

            {project.status === "declined" && (
              <p className="mt-2 text-sm italic">
                Project Declined
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
