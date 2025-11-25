
// src/pages/Billing.jsx
import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Box,
  Alert,
  Paper,
} from "@mui/material";
import api from "../services/api";

export default function Billing() {
  const [projectId, setProjectId] = useState("");
  const [amount, setAmount] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  const submit = async () => {
    setMsg("");
    setError("");
    try {
      await api.post("/billing", { projectId, amount: Number(amount) });
      setMsg("Billing recorded successfully.");
      setProjectId("");
      setAmount("");
    } catch (err) {
      setError(
        err?.response?.data?.error || "Failed to record billing. Try again."
      );
    }
  };

  return (
    <>
      <Typography variant="h6" mb={2}>
        Billing
      </Typography>
      <Paper className="card">
        <Box display="flex" flexDirection="column" gap={2}>
          <TextField
            label="Project ID"
            value={projectId}
            onChange={(e) => setProjectId(e.target.value)}
            fullWidth
          />
          <TextField
            label="Amount (₹)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            fullWidth
          />
          <Box>
            <Button variant="contained" onClick={submit}>
              Add Billing
            </Button>
          </Box>
          {msg && <Alert severity="success">{msg}</Alert>}
          {error && <Alert severity="error">{error}</Alert>}
        </Box>
      </Paper>
    </>
  );
}
