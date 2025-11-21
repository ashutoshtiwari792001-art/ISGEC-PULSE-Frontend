import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import api from '../services/api'
import { Typography, Grid } from '@mui/material'
import Chart from '../components/Chart'

export default function Dashboard(){
  const [summary,setSummary]=useState({})
  useEffect(()=>{
    api.get('/analytics/summary').then(r=>setSummary(r.data)).catch(()=>{})
  },[])

  return (
    <div className="app-shell">
      <Sidebar />
      <div className="main">
        <div className="header">
          <Typography variant="h6">ISGEC PULSE</Typography>
          <div>Welcome</div>
        </div>
        <Grid container spacing={2} style={{marginTop:12}}>
          <Grid item xs={12} md={4}><div className="card"> <Typography variant="h6">Total Billing</Typography> <Typography variant="h4">{summary.totalBilling||0}</Typography></div></Grid>
          <Grid item xs={12} md={4}><div className="card"> <Typography variant="h6">Active Projects</Typography> <Typography variant="h4">{summary.projects||0}</Typography></div></Grid>
          <Grid item xs={12} md={4}><div className="card"> <Typography variant="h6">At Risk</Typography> <Typography variant="h4" color="error">{summary.atRisk||0}</Typography></div></Grid>

          <Grid item xs={12} md={8}><div className="card" style={{height:350}}><Chart/></div></Grid>
          <Grid item xs={12} md={4}><div className="card">Quick Actions (Add Project / Add Billing)</div></Grid>
        </Grid>
      </div>
    </div>
  )
}

