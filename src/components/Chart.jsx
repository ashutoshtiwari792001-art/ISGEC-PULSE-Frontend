import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

const sample = [{ month:'Jan', amount:4000 },{month:'Feb',amount:5200},{month:'Mar',amount:6200},{month:'Apr',amount:4800}]
const pie = [{name:'A', value:400},{name:'B', value:300},{name:'C',value:300}]
const COLORS = ['#0088FE', '#00C49F', '#FFBB28']

export default function Chart(){
  return (
    <div style={{display:'flex',gap:12,height:'100%'}}>
      <div style={{flex:1}}>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={sample}><XAxis dataKey="month"/><YAxis/><Tooltip/><Line type="monotone" dataKey="amount" stroke="#003366" strokeWidth={3}/></LineChart>
        </ResponsiveContainer>
      </div>
      <div style={{width:200}}>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart><Pie data={pie} dataKey="value" innerRadius={40} outerRadius={80} label>{pie.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}</Pie></PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

