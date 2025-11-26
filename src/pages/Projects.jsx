import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import api from "../services/api";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get("/api/projects").then((res) => setProjects(res.data));
  }, []);

  return (
    <div className="layout">
      <Sidebar />
      <div className="page">
        <Topbar />
        <h2>Projects</h2>

        <div className="list">
          {projects.map((p, i) => (
            <div key={i} className="list-item">
              <h3>{p.name}</h3>
              <p>Manager: {p.manager}</p>
              <p>Status: {p.status}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
