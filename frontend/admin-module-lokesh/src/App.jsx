import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// AUTH
import Login from "./auth/Login";
import Signup from "./auth/Signup";

// HOME (MAIN ENTRY)
import Home from "./pages/home/Home";

// LAYOUTS
import AdminLayout from "./layouts/AdminLayout";
import ClientLayout from "./layouts/ClientLayout";

// ADMIN PAGES
import AdminDashboard from "./pages/admin/AdminDashboard";
import Projects from "./pages/admin/Projects";

// CLIENT PAGES
import ClientDashboard from "./pages/client/ClientDashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ROOT → LOGIN */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* AUTH ROUTES */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* MAIN ENTRY (ROLE BASED) */}
        <Route path="/home" element={<Home />} />

        {/* ADMIN ROUTES */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="projects" element={<Projects />} />
        </Route>

        {/* CLIENT ROUTES */}
        <Route path="/client" element={<ClientLayout />}>
          <Route path="dashboard" element={<ClientDashboard />} />
        </Route>

        {/* FALLBACK */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}
