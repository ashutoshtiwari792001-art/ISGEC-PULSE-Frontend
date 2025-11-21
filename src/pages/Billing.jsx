import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import api from '../services/api'
import { Typography, Button, TextField } from '@mui/material'

export default function Billing(){
  const [projectId,setProjectId]=useState('')
  const [amount,setAmount]=useState('')
  const submit = async ()=>{ 
    try{
      await api.post('/billing',{ projectId, amount })
      alert('Billing recorded')
      setProjectId(''); setAmount('')
    }catch(e){ alert('Error: '+(e?.response?.data?.error||e.message)) }
  }
  return (
    <div className="app-shell">
      <Sidebar />
      <div className="main">
        <div className="header"><Typography variant="h6">Billing</Typography></div>
        <div style={{marginTop:12}}>
          <div className="card">
            <TextField label="Project ID" value={projectId} onChange={e=>setProjectId(e.target.value)} fullWidth margin="normal"/>
            <TextField label="Amount" value={amount} onChange={e=>setAmount(e.target.value)} fullWidth margin="normal"/>
            <Button variant="contained" onClick={submit}>Add Billing</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

