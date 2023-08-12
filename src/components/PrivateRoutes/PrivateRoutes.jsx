import { Navigate, Outlet } from "react-router-dom";

function PrivateRoutes() {
  let jwt = localStorage.getItem("jwt");
  return jwt ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoutes;
