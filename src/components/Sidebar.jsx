import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  Dashboard,
  BarChart,
  ListAlt,
  Payments,
  Person,
  Logout,
} from "@mui/icons-material";
import logo from "../assets/logo.png";

export default function Sidebar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const menu = [
    { name: "Dashboard", icon: <Dashboard />, path: "/dashboard" },
    { name: "Projects", icon: <ListAlt />, path: "/projects" },
    { name: "Billing", icon: <Payments />, path: "/billing" },
    { name: "Analytics", icon: <BarChart />, path: "/analytics" },
    { name: "Profile", icon: <Person />, path: "/profile" },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src={logo} className="sidebar-logo" />
        <h2>ISGEC PULSE</h2>
      </div>

      <div className="sidebar-menu">
        {menu.map((item) => (
          <div
            key={item.name}
            className="sidebar-item"
            onClick={() => navigate(item.path)}
          >
            {item.icon}
            <span>{item.name}</span>
          </div>
        ))}
      </div>

      <div className="sidebar-footer" onClick={() => logout()}>
        <Logout />
        <span>Logout</span>
      </div>
    </div>
  );
}
