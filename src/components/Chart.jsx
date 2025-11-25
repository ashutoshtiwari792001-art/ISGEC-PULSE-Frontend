// src/components/Chart.jsx
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const sample = [
  { month: "Jan", amount: 120 },
  { month: "Feb", amount: 180 },
  { month: "Mar", amount: 160 },
  { month: "Apr", amount: 220 },
  { month: "May", amount: 210 },
  { month: "Jun", amount: 260 },
];

export default function Chart() {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <LineChart data={sample}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="amount"
          stroke="#0055a4"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
