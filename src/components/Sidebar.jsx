import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import {
  Dashboard,
  People,
  Assessment,
  AccountTree,
  MonetizationOn,
  Logout,
  Person,
  Workspaces
} from "@mui/icons-material";

export default function Sidebar() {
  const nav = useNavigate();
  const { user, logout } = useContext(AuthContext);

  const role = user?.role;

  return (
    <div className="sidebar">
      <div className="sidebar-title">ISGEC PULSE</div>

      <div className="menu">
        <div className="menu-item" onClick={() => nav("/dashboard")}>
          <Dashboard /> Dashboard
        </div>

        <div className="menu-item" onClick={() => nav("/projects")}>
          <Workspaces /> Projects
        </div>

        {(role === "Admin" || role === "Manager") && (
          <div className="menu-item" onClick={() => nav("/billing")}>
            <MonetizationOn /> Billing
          </div>
        )}

        <div className="menu-item" onClick={() => nav("/analytics")}>
          <Assessment /> Analytics
        </div>

        {role === "Admin" && (
          <div className="menu-item" onClick={() => nav("/team")}>
            <People /> Team Management
          </div>
        )}

        {role === "Lead" && (
          <div className="menu-item" onClick={() => nav("/tasks")}>
            <AccountTree /> Tasks
          </div>
        )}

        <div className="menu-item" onClick={() => nav("/profile")}>
          <Person /> Profile
        </div>

        <div className="menu-item logout" onClick={logout}>
          <Logout /> Logout
        </div>
      </div>
    </div>
  );
}
