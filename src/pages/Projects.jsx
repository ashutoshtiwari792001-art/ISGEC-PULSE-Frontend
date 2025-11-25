
// src/pages/Projects.jsx
import React, { useEffect, useState } from "react";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import api from "../services/api";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api
      .get("/projects")
      .then((res) => setProjects(res.data || []))
      .catch(() => {});
  }, []);

  return (
    <>
      <Typography variant="h6" mb={2}>
        Projects
      </Typography>
      <Paper className="card">
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Project ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>PM</TableCell>
              <TableCell>Status</TableCell>
              <TableCell align="right">Billing (₹)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {projects.map((p) => (
              <TableRow key={p.id}>
                <TableCell>{p.id}</TableCell>
                <TableCell>{p.name}</TableCell>
                <TableCell>{p.pmId}</TableCell>
                <TableCell>{p.status || "—"}</TableCell>
                <TableCell align="right">
                  {p.billing != null ? p.billing : "—"}
                </TableCell>
              </TableRow>
            ))}
            {projects.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  No projects found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Paper>
    </>
  );
}
