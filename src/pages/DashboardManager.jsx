import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import api from "../services/api";

export default function DashboardManager() {
  const [data, setData] = useState(null);

  useEffect(() => {
    api.get("/api/analytics/manager").then((res) => setData(res.data));
  }, []);

  return (
    <div className="layout">
      <Sidebar />
      <div className="page">
        <Topbar />

        <div className="cards">
          <div className="card">
            <h3>Assigned Projects</h3>
            <h1>{data?.projects || 0}</h1>
          </div>

          <div className="card">
            <h3>Billing Submitted</h3>
            <h1>₹{data?.billing || 0}</h1>
          </div>

          <div className="card">
            <h3>Pending Tasks</h3>
            <h1>{data?.pendingTasks || 0}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
