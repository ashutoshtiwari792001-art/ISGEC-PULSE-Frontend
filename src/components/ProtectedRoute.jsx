import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { useAuth } from "../context/AuthContext";
const { user, logout } = useAuth();

export default function ProtectedRoute({ children }) {
  const { user, logout } = useAuth();
  if (!user) return <Navigate to="/" replace />;
  return children;
}
