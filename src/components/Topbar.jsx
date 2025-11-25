// src/components/Topbar.jsx
import React from "react";
import { useAuth } from "../context/AuthContext";
import { Button } from "@mui/material";

export default function Topbar() {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    window.location.href = "/";
  };

  return (
    <header className="header">
      <div className="header-title">ISGEC PULSE — Control Panel</div>
      <div className="header-right">
        <span className="header-user">
          {user?.email || "User"}
        </span>
        <Button variant="outlined" size="small" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </header>
  );
}
