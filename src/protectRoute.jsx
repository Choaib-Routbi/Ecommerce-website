import { Navigate } from "react-router-dom";
import { useAuth } from "./userContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) return <Navigate to={"/login"} replace />;
  return children;
};

export default ProtectedRoute;
