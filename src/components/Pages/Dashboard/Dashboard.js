import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../../Context/UserContext";
import useAdmin from "../../../Hook/useAdmin";
import { useTheme } from "../../../hooks/useTheme";
import DashboardLeftSide from "./DashboardLeftSide";
import DashboardRightSide from "./DashboardRightSide";

const Dashboard = () => {

  return (
    <div className='grid grid-cols-1 lg:grid-cols-4 gap-y-4 m-2'>
      <DashboardLeftSide></DashboardLeftSide>
      <DashboardRightSide></DashboardRightSide>
    </div>
  );
};

export default Dashboard;
