import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import DashboardAdmin from "./pages/DashboardAdmin";
import DashboardManager from "./pages/DashboardManager";
import DashboardLead from "./pages/DashboardLead";

import Projects from "./pages/Projects";
import Billing from "./pages/Billing";
import Analytics from "./pages/Analytics";
import Team from "./pages/Team";
import Tasks from "./pages/Tasks";
import Profile from "./pages/Profile";

import { AuthContext } from "./context/AuthContext";

export default function App() {
  const { user } = useContext(AuthContext);

  const Protected = ({ children }) => {
    if (!user) return <Navigate to="/" />;
    return children;
  };

  const getDashboard = () => {
    if (user?.role === "Admin") return <DashboardAdmin />;
    if (user?.role === "Manager") return <DashboardManager />;
    if (user?.role === "Lead") return <DashboardLead />;
    return <Navigate to="/" />;
  };

  return (
    <Routes>
      {/* PUBLIC ROUTE */}
      <Route path="/" element={<Login />} />

      {/* PROTECTED ROUTES */}
      <Route
        path="/dashboard"
        element={
          <Protected>
            {getDashboard()}
          </Protected>
        }
      />

      <Route
        path="/projects"
        element={
          <Protected>
            <Projects />
          </Protected>
        }
      />

      <Route
        path="/billing"
        element={
          <Protected>
            {user?.role !== "Lead" ? <Billing /> : <Navigate to="/dashboard" />}
          </Protected>
        }
      />

      <Route
        path="/analytics"
        element={
          <Protected>
            <Analytics />
          </Protected>
        }
      />

      <Route
        path="/team"
        element={
          <Protected>
            {user?.role === "Admin" ? <Team /> : <Navigate to="/dashboard" />}
          </Protected>
        }
      />

      <Route
        path="/tasks"
        element={
          <Protected>
            {user?.role === "Lead" ? <Tasks /> : <Navigate to="/dashboard" />}
          </Protected>
        }
      />

      <Route
        path="/profile"
        element={
          <Protected>
            <Profile />
          </Protected>
        }
      />

      {/* FALLBACK */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
