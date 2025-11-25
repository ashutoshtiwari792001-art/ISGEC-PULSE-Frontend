// src/App.jsx
import React from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Billing from "./pages/Billing";
import Analytics from "./pages/Analytics";
import Profile from "./pages/Profile";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

const PrivateLayout = () => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/" replace />;

  return (
    <div className="app-shell">
      <Sidebar />
      <div className="main">
        <Topbar />
        <div className="main-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<PrivateLayout />}>
        <Route path="/app" element={<Dashboard />} />
        <Route path="/app/projects" element={<Projects />} />
        <Route path="/app/billing" element={<Billing />} />
        <Route path="/app/analytics" element={<Analytics />} />
        <Route path="/app/profile" element={<Profile />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
