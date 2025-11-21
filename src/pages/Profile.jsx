import React from 'react'
import Sidebar from '../components/Sidebar'
import { Typography } from '@mui/material'

export default function Profile(){
  return (
    <div className="app-shell">
      <Sidebar />
      <div className="main">
        <div className="header"><Typography variant="h6">Profile</Typography></div>
        <div style={{marginTop:12}}>
          <div className="card">Profile details and settings here</div>
        </div>
      </div>
    </div>
  )
}

