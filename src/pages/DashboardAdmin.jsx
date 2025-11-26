import React, { useEffect, useState } from "react";
import api from "../services/api";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer
} from "recharts";

export default function DashboardAdmin() {
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    api.get("/api/analytics/summary").then((res) => setSummary(res.data));
  }, []);

  const COLORS = ["#1F77B4", "#FF7F0E", "#2CA02C", "#D62728"];

  return (
    <div className="layout">
      <Sidebar />
      <div className="page">
        <Topbar />

        <div className="cards">
          <div className="card">
            <h3>Total Projects</h3>
            <h1>{summary?.projects || 0}</h1>
          </div>
          <div className="card">
            <h3>Total Billing</h3>
            <h1>₹{summary?.billing || 0}</h1>
          </div>
          <div className="card">
            <h3>Projects At Risk</h3>
            <h1 className="risk">{summary?.risk || 0}</h1>
          </div>
        </div>

        <div className="chart-row">
          <div className="chart-card">
            <h3>Monthly Billing Trend</h3>

            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={summary?.billingTrend || []}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="amount" stroke="#003366" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="chart-card">
            <h3>Project Status</h3>

            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={summary?.projectStatus || []}
                  dataKey="value"
                  outerRadius={80}
                  label
                >
                  {summary?.projectStatus?.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
