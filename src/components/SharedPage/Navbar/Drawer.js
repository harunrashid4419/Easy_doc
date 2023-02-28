import React from "react";
import { useContext } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../../Context/UserContext";
import { useGetDocDataQuery } from "../../../features/api/docApi";
import DashboardRoutes from "../../Pages/Dashboard/DashboardRoutes";
import DocRoutes from "../../Pages/Documentation/DocRoutes";

const Drawer = () => {
  const { pathname } = useLocation();
  const { user } = useContext(AuthContext);
  const { data, isLoading } = useGetDocDataQuery();
  const links =
    <>
      <Link to="/">Home</Link>
      <Link to="/documentation">Documentation</Link>
      <Link to="/community">Community</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/courses">Courses</Link>
      {user?.uid ?
        <>
          <Link to="/dashboard">Dashboard</Link>
        </>
        :
        <Link to="/login">Login</Link>
      }
    </>

  if (isLoading) {
    return <p>Loading</p>;
  }

  return (
    <div className="drawer lg:hidden absolute z-10">
      <input id="easy-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side">
        <label htmlFor="easy-drawer" className="drawer-overlay"></label>
        <ul className="w-72 md:w-80 bg-base-100  p-2">

          <div>
            {
              pathname.includes("/documentation") &&
              <>
                <li className="bg-gray-700 text-slate-100 w-full flex items-center gap-4 p-2 mb-4">
                  <FaArrowLeft></FaArrowLeft>
                  <Link to='/' >back to the main menu</Link>
                </li>

                <DocRoutes data={data}></DocRoutes>
              </>

            }
          </div>


          <div>
            {
              pathname.includes('/dashboard') &&
              <>
                <li className="bg-gray-700 text-slate-100 w-full flex items-center gap-4 p-2 mb-4">
                  <FaArrowLeft></FaArrowLeft>
                  <Link to='/' >back to the main menu</Link>
                </li>
                <DashboardRoutes></DashboardRoutes>
              </>
            }
          </div>


          <div className="grid space-y-4">
            {
              (!pathname.includes('/documentation') && !pathname.includes('/dashboard')) &&
              links
            }
          </div>

        </ul>

      </div>
    </div>
  );
};

export default Drawer;
