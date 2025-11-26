import React, { useContext } from "react";
import { useAuth } from "../context/AuthContext";

export default function Topbar() {
  const { user, logout } = useAuth();
  return (
    <div className="topbar">
      <h2>Welcome, {user?.name}</h2>
      <div className="topbar-role">{user?.role}</div>
    </div>
  );
}
