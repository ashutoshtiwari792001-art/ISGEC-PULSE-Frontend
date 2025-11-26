import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Billing from "./pages/Billing";
import Analytics from "./pages/Analytics";
import Profile from "./pages/Profile";

export default function App() {
  const { user } = useAuth();

  return (
    <Routes>
      {/* Public Route */}
      <Route path="/login" element={<Login />} />

      {/* Protected Routes */}
      <Route
        path="/"
        element={user ? <Dashboard /> : <Navigate to="/login" />}
      />
      <Route
        path="/projects"
        element={user ? <Projects /> : <Navigate to="/login" />}
      />
      <Route
        path="/billing"
        element={user ? <Billing /> : <Navigate to="/login" />}
      />
      <Route
        path="/analytics"
        element={user ? <Analytics /> : <Navigate to="/login" />}
      />
      <Route
        path="/profile"
        element={user ? <Profile /> : <Navigate to="/login" />}
      />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
