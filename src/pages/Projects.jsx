import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import api from '../services/api'
import { Typography, Button } from '@mui/material'

export default function Projects(){
  const [projects,setProjects]=useState([])
  useEffect(()=>{ api.get('/projects').then(r=>setProjects(r.data)).catch(()=>{}) },[])
  return (
    <div className="app-shell">
      <Sidebar />
      <div className="main">
        <div className="header"><Typography variant="h6">Projects</Typography></div>
        <div style={{marginTop:12}}>
          <div className="card">
            <Button variant="contained">Add Project</Button>
            <div style={{marginTop:12}}>
              {projects.map(p=> <div key={p.id} style={{padding:8,borderBottom:'1px solid #eee'}}>{p.name} — {p.pmId}</div>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

