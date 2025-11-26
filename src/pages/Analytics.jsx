import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import api from "../services/api";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer
} from "recharts";

export default function Analytics() {
  const [data, setData] = useState(null);

  useEffect(() => {
    api.get("/api/analytics/full").then((res) => setData(res.data));
  }, []);

  return (
    <div className="layout">
      <Sidebar />
      <div className="page">
        <Topbar />
        <h2>Analytics Overview</h2>

        <div className="chart-card">
          <h3>Monthly Billing Trend</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={data?.billingTrend || []}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line dataKey="amount" stroke="#003366" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3>Project Status Distribution</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={data?.projectStatus || []}
                dataKey="value"
                outerRadius={80}
                label
              >
                {(data?.projectStatus || []).map((e, i) => (
                  <Cell key={i} fill={e.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
