import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import api from '../services/api'
import { Typography } from '@mui/material'
import Chart from '../components/Chart'

export default function Analytics(){
  const [data,setData]=useState(null)
  useEffect(()=>{ api.get('/analytics/trends').then(r=>setData(r.data)).catch(()=>{}) },[])
  return (
    <div className="app-shell">
      <Sidebar />
      <div className="main">
        <div className="header"><Typography variant="h6">Analytics</Typography></div>
        <div style={{marginTop:12}}>
          <div className="card" style={{padding:12}}>
            <Chart />
          </div>
        </div>
      </div>
    </div>
  )
}

