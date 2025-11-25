// src/pages/Profile.jsx
import React from "react";
import { Typography, Paper } from "@mui/material";
import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { user } = useAuth();

  return (
    <>
      <Typography variant="h6" mb={2}>
        Profile
      </Typography>
      <Paper className="card">
        <Typography variant="subtitle1" mb={1}>
          Logged in as
        </Typography>
        <Typography variant="body1">{user?.email}</Typography>
        <Typography variant="body2" color="text.secondary" mt={2}>
          This is a minimal profile screen. You can extend this with role,
          department, phone number, permissions, etc. later.
        </Typography>
      </Paper>
    </>
  );
}
