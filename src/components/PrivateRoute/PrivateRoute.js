import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const auth = useAuth();
  // const location=useLocation();

  // if (auth) {
  //   return <Navigate to="/login" state={{ from: location }} replace />;
  // }

  // return children;

  return auth ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
