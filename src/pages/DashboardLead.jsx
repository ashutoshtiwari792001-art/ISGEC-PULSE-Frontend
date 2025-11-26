import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import api from "../services/api";

export default function DashboardLead() {
  const [data, setData] = useState(null);

  useEffect(() => {
    api.get("/api/analytics/lead").then((res) => setData(res.data));
  }, []);

  return (
    <div className="layout">
      <Sidebar />
      <div className="page">
        <Topbar />

        <div className="cards">
          <div className="card">
            <h3>Assigned Tasks</h3>
            <h1>{data?.tasks || 0}</h1>
          </div>

          <div className="card">
            <h3>Completed</h3>
            <h1>{data?.completed || 0}</h1>
          </div>

          <div className="card">
            <h3>Pending</h3>
            <h1>{data?.pending || 0}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
