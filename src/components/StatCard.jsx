// src/components/StatCard.jsx
import React from "react";

export default function StatCard({ label, value, caption }) {
  return (
    <div className="card stat-card">
      <div className="stat-label">{label}</div>
      <div className="stat-value">{value}</div>
      {caption && <div className="stat-caption">{caption}</div>}
    </div>
  );
}
