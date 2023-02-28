import React from "react";
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
