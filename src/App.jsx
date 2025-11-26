import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import { useAuth } from "./context/AuthContext";

function PrivateLayout({ children }) {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="content-area">
        <Topbar />
        <div className="content-body">{children}</div>
      </div>
    </div>
  );
}

function PrivateRoute({ element }) {
  const { user } = useAuth();
  return user ? element : <Navigate to="/login" />;
}

export default function App() {
  return (
    <Routes>
      {/* Public Route */}
      <Route path="/login" element={<Login />} />

      {/* Protected Pages */}
      <Route
        path="/"
        element={
          <PrivateRoute
            element={
              <PrivateLayout>
                <Dashboard />
              </PrivateLayout>
            }
          />
        }
      />

      <Route
        path="/profile"
        element={
          <PrivateRoute
            element={
              <PrivateLayout>
                <Profile />
              </PrivateLayout>
            }
          />
        }
      />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
