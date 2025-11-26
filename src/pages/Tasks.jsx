import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import api from "../services/api";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    api.get("/api/tasks").then((res) => setTasks(res.data));
  }, []);

  return (
    <div className="layout">
      <Sidebar />
      <div className="page">
        <Topbar />
        <h2>My Tasks</h2>

        <div className="list">
          {tasks.map((t, i) => (
            <div key={i} className="list-item">
              <h3>{t.title}</h3>
              <p>Status: {t.status}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
