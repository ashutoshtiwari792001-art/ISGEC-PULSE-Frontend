
// src/pages/Login.jsx
import React, { useState } from "react";
import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
  Alert,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("isgecpulse@outlook.com");
  const [password, setPassword] = useState("Ashuwari_007");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await api.post("/auth/login", { email, password });
      login(res.data.token);
      navigate("/app");
    } catch (err) {
      const msg =
        err?.response?.data?.error ||
        err?.message ||
        "Login failed. Please try again.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box className="login-page">
      <Paper elevation={3} className="login-card">
        <Typography variant="h5" mb={1}>
          ISGEC PULSE — Login
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={3}>
          Use your ISGEC Outlook email to sign in.
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Outlook Email"
            type="email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {error}
            </Alert>
          )}

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 3 }}
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign In"}
          </Button>
        </form>
      </Paper>
    </Box>
  );
}
