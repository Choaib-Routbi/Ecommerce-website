import { Navigate } from "react-router-dom";
import { useAuth } from "./userContext";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading){
    return <div style={{fontSize:"2rem", margin:"auto"}}> loading ... </div>
  }
  if (!user) {
    return <Navigate to={"/login"} replace />;
  } 
  return children;
};

export default ProtectedRoute;
