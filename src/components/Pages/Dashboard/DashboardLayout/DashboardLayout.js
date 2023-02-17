import React, { useContext, useState } from "react";
import Navbar from "../../../SharedPage/Navbar/Navbar";
import Footer from "../../../SharedPage/Footer/Footer";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../../../../Hook/useAdmin";
import { AuthContext } from "../../../../Context/UserContext";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [open, setOpen] = useState(true);
  return (
    <div className="w-full">
      <Navbar></Navbar>
      <section className="flex md:w-4/5 lg:w-full w-4/5">
        <div
          className={`bg-violet-500 min-h-screen ${
            open ? "md:w-72 lg:w-72 w-12" : "lg:w-72 md:w-72 w-12"
          } duration-500 text-gray-100 px-4`}
        >
          <div className="mt-8 flex flex-col gap-4 relative">
            {isAdmin && <Link to="/dashboard/users">All User</Link>}
            <Link to="/dashboard/addReview">Add Review</Link>
            <Link to="/dashboard/addBlog">Add Blog</Link>
          </div>
        </div>
        <div className="text-xl w-full text-gray-900 font-semibold border-violet-200">
          <Outlet></Outlet>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default DashboardLayout;
