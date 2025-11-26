import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Topbar() {
  const { user } = useContext(AuthContext);

  return (
    <div className="topbar">
      <h2>Welcome, {user?.name}</h2>
      <div className="topbar-role">{user?.role}</div>
    </div>
  );
}
