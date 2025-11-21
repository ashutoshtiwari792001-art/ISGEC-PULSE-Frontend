import React, { useState } from 'react'
import { Box, Button, TextField, Typography, Paper } from '@mui/material'
import api from '../services/api'
import { useAuth } from '../context/AuthContext'

export default function Login(){
  const { login } = useAuth()
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [loading,setLoading]=useState(false)
  const [error,setError]=useState('')

  async function handleSubmit(e){
    e.preventDefault(); setLoading(true); setError('')
    try{
      const res = await api.post('/auth/login',{ email, password })
      login(res.data.token)
      window.location.href = '/app'
    }catch(err){ setError(err?.response?.data?.error||err.message) }
    setLoading(false)
  }

  return (
    <div style={{display:'grid',placeItems:'center',height:'100vh',background:'var(--bg)'}}>
      <Paper elevation={3} style={{padding:28,width:420}}>
        <Typography variant="h5" style={{marginBottom:12}}>ISGEC PULSE — Login</Typography>
        <form onSubmit={handleSubmit}>
          <TextField label="Outlook Email" value={email} onChange={e=>setEmail(e.target.value)} fullWidth margin="normal" />
          <TextField label="Password" value={password} onChange={e=>setPassword(e.target.value)} fullWidth margin="normal" type="password" />
          {error && <Typography color="error" variant="body2">{error}</Typography>}
          <Box mt={2}>
            <Button variant="contained" color="primary" type="submit" fullWidth disabled={loading}>{loading? 'Signing in...' : 'Sign in'}</Button>
          </Box>
        </form>
      </Paper>
    </div>
  )
}

