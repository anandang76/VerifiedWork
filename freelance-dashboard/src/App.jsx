import { Routes, Route } from "react-router-dom";
import FreelancerDashboard from "./pages/freelancer/FreelancerDashboard";
import ProjectDetails from "./pages/freelancer/ProjectDetails";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<FreelancerDashboard />} />
      <Route path="/project/:id" element={<ProjectDetails />} />
    </Routes>
  );
}
