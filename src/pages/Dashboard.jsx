
// src/pages/Dashboard.jsx
import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import api from "../services/api";
import StatCard from "../components/StatCard";
import Chart from "../components/Chart";

export default function Dashboard() {
  const [summary, setSummary] = useState({
    totalBilling: 0,
    activeProjects: 0,
    atRisk: 0,
  });

  useEffect(() => {
    api
      .get("/analytics/summary")
      .then((res) => {
        setSummary({
          totalBilling: res.data.totalBilling || 0,
          activeProjects: res.data.projects || 0,
          atRisk: res.data.atRisk || 0,
        });
      })
      .catch(() => {});
  }, []);

  return (
    <>
      <Typography variant="h6" mb={2}>
        Overview
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <StatCard
            label="Total Billing"
            value={`₹ ${summary.totalBilling}`}
            caption="All projects (till date)"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <StatCard
            label="Active Projects"
            value={summary.activeProjects}
            caption="Running this month"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <StatCard
            label="At Risk"
            value={summary.atRisk}
            caption="Need PM attention"
          />
        </Grid>

        <Grid item xs={12} md={8}>
          <div className="card" style={{ height: 320 }}>
            <Typography variant="subtitle1" mb={2}>
              Monthly Billing Trend
            </Typography>
            <Chart />
          </div>
        </Grid>

        <Grid item xs={12} md={4}>
          <div className="card">
            <Typography variant="subtitle1" mb={1}>
              Quick Notes
            </Typography>
            <Typography variant="body2" color="text.secondary">
              • Monitor projects with low billing this month. <br />
              • Follow up with PMs on delayed billing. <br />
              • Use Analytics tab for deeper trends.
            </Typography>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
