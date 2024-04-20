import { useSelector } from "react-redux";
import { getIsAuthenticated } from "../features/user/userSlice";
import { Navigate } from "react-router-dom";

function ProtectRoute({ children }) {
  const isAuthenticated = useSelector(getIsAuthenticated);
  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

export default ProtectRoute;
