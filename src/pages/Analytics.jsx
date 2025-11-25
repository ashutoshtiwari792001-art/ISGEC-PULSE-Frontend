// src/pages/Analytics.jsx
import React, { useEffect, useState } from "react";
import { Grid, Typography, Paper } from "@mui/material";
import api from "../services/api";
import Chart from "../components/Chart";

export default function Analytics() {
  const [data, setData] = useState(null);

  useEffect(() => {
    api
      .get("/analytics/trends")
      .then((res) => setData(res.data || {}))
      .catch(() => {});
  }, []);

  return (
    <>
      <Typography variant="h6" mb={2}>
        Analytics
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Paper className="card" sx={{ height: 320 }}>
            <Typography variant="subtitle1" mb={2}>
              Billing Trend
            </Typography>
            <Chart />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className="card">
            <Typography variant="subtitle1" mb={1}>
              Snapshot
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Total Billing: {data.totalBilling || 0}
              <br />
              Projects with zero billing: {data.zeroBilling || 0}
              <br />
              Delayed projects: {data.delayed || 0}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
