import React, { useContext } from "react";
import UserContext from "../auth/UserContext";
import { Outlet, Navigate } from "react-router-dom";

function ProtectedRoute() {
  const { currUser } = useContext(UserContext);

  return currUser ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoute;
