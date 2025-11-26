import { Navigate } from "react-router-dom";

export default function RoleBasedRoute({ children, allowed }) {
  const role = JSON.parse(localStorage.getItem("role"));
  if (!allowed.includes(role)) return <Navigate to="/dashboard" />;
  return children;
}
