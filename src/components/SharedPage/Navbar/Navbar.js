import React, { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/UserContext";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  // logout
  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/login");
      })
      .catch((error) => console.error(error));
  };

  const links = <>
    <li className="mr-4 transition-colors">
      <Link to="/">Home</Link>
    </li>
    <li className="mr-4 transition-colors">
      <Link to="/documentation">Documentation</Link>
    </li>
    <li className="mr-4 transition-colors">
      <Link to="/community">Community</Link>
    </li>
    <li className="mr-4 transition-colors">
      <Link to="/blog">Blog</Link>
    </li>
    <li className="mr-4 transition-colors">
      <Link to="/courses">Courses</Link>
    </li>
    {user?.uid ? (
      <>
        <li className="mr-4 transition-colors">
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li className="mr-4 transition-colors">
          <button
            className="bg-red-400 text-white font-[poppins] px-6 py-1 rounded hover:bg-red-300 duration-200"
            onClick={handleLogOut}
          >
            LogOut
          </button>
        </li>
        <li>
          <label htmlFor="profile-modal">
            <FaUserCircle className="text-5xl hover:ring-8 rounded-full ring-blue-500/30 bg-white text-blue-500 hover:cursor-pointer"></FaUserCircle>
          </label>
        </li>
      </>
    ) : (
      <li><Link to='/login' className='bg-indigo-600 text-white font-[poppins] px-6 py-2 rounded hover:bg-indigo-400 duration-200'>Login</Link></li>
    )}
  </>

  return (
    <div className='shadow-md sticky top-0 text-[1.2rem] z-[10]'>
      <div className='md:flex items-center justify-between bg-white pr-4 py-2 md:px-4'>
        <div className='flex justify-between items-center font-[poppins]'>
          <div className='flex items-center'>
            <label htmlFor='easy-drawer' className="md:hidden text-3xl hover:cursor-pointer hover:bg-slate-200 p-2 rounded-md">
              <HiMenu className=''></HiMenu>
            </label>
            <img className='w-16 h-16' src="https://static.thenounproject.com/png/4676087-200.png"></img>
            <h1 className='text-blue-500 text-3xl font-extrabold'>DOC</h1>
          </div>
          <div className="md:hidden">
            {
              user?.uid &&
              <label htmlFor="profile-modal">
                <FaUserCircle className="text-4xl hover:ring-8 rounded-full ring-blue-500/30 bg-white text-blue-500 hover:cursor-pointer"></FaUserCircle>
              </label>
            }

          </div>

        </div>
        <ul className='hidden md:flex items-center gap-4'>
          {links}
        </ul>
      </div>
    </div>

  );
};

export default Navbar;