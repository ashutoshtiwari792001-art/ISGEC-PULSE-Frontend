import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import api from "../services/api";

export default function Team() {
  const [projects, setProjects] = useState([]);
  const [leaders, setLeaders] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Manager");
  const [assignedProjects, setAssignedProjects] = useState([]);
  const [reportsTo, setReportsTo] = useState("");
  const [color, setColor] = useState("#1F77B4");

  useEffect(() => {
    api.get("/api/projects").then((res) => setProjects(res.data));
    api.get("/api/users/leads").then((res) => setLeaders(res.data));
  }, []);

  const submit = async () => {
    await api.post("/api/users/create", {
      name,
      email,
      password,
      role,
      projects: assignedProjects.join(","),
      reportsTo,
      color,
    });

    alert("User created");
  };

  return (
    <div className="layout">
      <Sidebar />
      <div className="page">
        <Topbar />
        <h2>Create Team Member</h2>

        <div className="form">
          <input placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
          <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="Manager">Manager</option>
            <option value="Lead">Lead</option>
          </select>

          <label>Select Projects:</label>
          <select
            multiple
            value={assignedProjects}
            onChange={(e) =>
              setAssignedProjects([...e.target.selectedOptions].map((o) => o.value))
            }
          >
            {projects.map((p) => (
              <option value={p.name}>{p.name}</option>
            ))}
          </select>

          <label>Reports To (Lead Only):</label>
          <select value={reportsTo} onChange={(e) => setReportsTo(e.target.value)}>
            <option value="">None</option>
            {leaders.map((l) => (
              <option value={l.email}>{l.name}</option>
            ))}
          </select>

          <label>Color:</label>
          <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />

          <button onClick={submit}>Create User</button>
        </div>
      </div>
    </div>
  );
}
