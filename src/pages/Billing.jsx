import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import api from "../services/api";

export default function Billing() {
  const [projectId, setProjectId] = useState("");
  const [amount, setAmount] = useState("");

  const submit = async () => {
    await api.post("/api/billing", { projectId, amount });
    alert("Billing recorded");
  };

  return (
    <div className="layout">
      <Sidebar />
      <div className="page">
        <Topbar />
        <h2>Add Billing</h2>

        <input
          type="text"
          placeholder="Project ID"
          value={projectId}
          onChange={(e) => setProjectId(e.target.value)}
        />

        <input
          type="number"
          placeholder="Amount (₹)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <button onClick={submit}>Submit Billing</button>
      </div>
    </div>
  );
}
