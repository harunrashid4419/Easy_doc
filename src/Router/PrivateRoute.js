import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";
import Loader from "../Loader/Loader";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const location = useLocation();

  if (loader) {
    return <Loader></Loader>;
  }
  if (!user) {
    return <Navigate to="/login" state={{ form: location }} replace></Navigate>;
  }
  return children;
};

export default PrivateRoute;
