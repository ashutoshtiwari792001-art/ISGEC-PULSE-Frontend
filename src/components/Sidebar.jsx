import React from 'react'
import { useNavigate } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home'
import InventoryIcon from '@mui/icons-material/Inventory2'
import ReceiptIcon from '@mui/icons-material/Receipt'
import InsightsIcon from '@mui/icons-material/Analytics'
import AccountIcon from '@mui/icons-material/AccountCircle'

export default function Sidebar(){
  const nav = useNavigate()
  return (
    <div className="sidebar">
      <div style={{marginBottom:18}}>
        <img src="/src/assets/logo.png" alt="ISGEC" style={{width:160}}/>
      </div>
      <div className="menu-item" onClick={()=>nav('/app')}><HomeIcon/> Home</div>
      <div className="menu-item" onClick={()=>nav('/projects')}><InventoryIcon/> Projects</div>
      <div className="menu-item" onClick={()=>nav('/billing')}><ReceiptIcon/> Billing</div>
      <div className="menu-item" onClick={()=>nav('/analytics')}><InsightsIcon/> Analytics</div>
      <div className="menu-item" onClick={()=>nav('/profile')}><AccountIcon/> Profile</div>
    </div>
  )
}

