import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";
import useAdmin from "../Hook/useAdmin";
import Loader from "../Loader/Loader";

const AdminRouter = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const [isAdmin, isLoader] = useAdmin(user?.email);

  if (loader || isLoader) {
    return <Loader></Loader>;
  }
  if (!user || !isAdmin) {
    return <Navigate to="/login" replace></Navigate>;
  }
  return children;
};

export default AdminRouter;
