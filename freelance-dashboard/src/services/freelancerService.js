import initialData from "../data/freelancerProjects.json";

const KEY = "freelancer_projects";

export function getAssignedProjects() {
  const saved = localStorage.getItem(KEY);

  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) {
        return parsed;
      }
    } catch (e) {
      console.error("LocalStorage parse error", e);
    }
  }

  // 🔥 FALLBACK (guaranteed)
  const fallback = Array.isArray(initialData)
    ? initialData
    : [
        {
          id: "p1",
          title: "Client Website Revamp",
          status: "pending",
          tasks: []
        }
      ];

  localStorage.setItem(KEY, JSON.stringify(fallback));
  return fallback;
}

export function saveProjects(projects) {
  if (Array.isArray(projects)) {
    localStorage.setItem(KEY, JSON.stringify(projects));
  }
}
