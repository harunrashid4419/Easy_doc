import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../../Context/UserContext";
import useAdmin from "../../../Hook/useAdmin";
import { useTheme } from "../../../hooks/useTheme";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const { theme } = useTheme();
  return (
    <div className="">
      <div className="drawer drawer-mobile container">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul
            className={`menu p-2 mt-1 w-80 text-base-content ${
              theme === "dark" ? "bg-[#2C303A]" : "bg-gray-100"
            }`}
          >
            {isAdmin && (
              <>
                <Link className="mb-2 border-b-black" to="/dashboard/users">
                  All User
                </Link>
                <Link className="mb-2" to="/dashboard/paymentUsers">
                  All Payment User
                </Link>
              </>
            )}
            <Link className="mb-2" to="/dashboard/addReview">
              Add Review
            </Link>
            <Link className="mb-2" to="/dashboard/addBlog">
              Add Blog
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;