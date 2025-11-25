
// src/components/Sidebar.jsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import WorkIcon from "@mui/icons-material/Work";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import PersonIcon from "@mui/icons-material/Person";

const menuItems = [
  { label: "Dashboard", icon: <DashboardIcon fontSize="small" />, path: "/app" },
  { label: "Projects", icon: <WorkIcon fontSize="small" />, path: "/app/projects" },
  { label: "Billing", icon: <ReceiptLongIcon fontSize="small" />, path: "/app/billing" },
  { label: "Analytics", icon: <QueryStatsIcon fontSize="small" />, path: "/app/analytics" },
  { label: "Profile", icon: <PersonIcon fontSize="small" />, path: "/app/profile" },
];

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <img src="/src/assets/logo.png" alt="ISGEC" className="sidebar-logo" />
        <div className="sidebar-title">ISGEC PULSE</div>
      </div>
      <nav className="sidebar-menu">
        {menuItems.map((item) => {
          const active = location.pathname === item.path;
          return (
            <div
              key={item.path}
              className={`menu-item ${active ? "menu-item-active" : ""}`}
              onClick={() => navigate(item.path)}
            >
              {item.icon}
              <span>{item.label}</span>
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
