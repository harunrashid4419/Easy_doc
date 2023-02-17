import React, { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/UserContext";
import ThemeToggle from "../../ThemeToggle/ThemeToggle";

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

  const links = (
    <>
      <li className="mr-4 transition-colors">
        <ThemeToggle></ThemeToggle>
      </li>
      <li className="mr-4 transition-colors">
        <Link to="/documentation">Docs</Link>
      </li>
      {user?.uid && (
        <li className="mr-4 transition-colors">
          <Link to="/community">Community</Link>
        </li>
      )}
      <li className="mr-4 transition-colors">
        <Link to="/blog">Blog</Link>
      </li>
      <li className="mr-4 transition-colors">
        <Link to="/courses">Courses</Link>
      </li>
      <li className="mr-4 transition-colors">
        <Link to="/quiz">Quiz</Link>
      </li>
      <li className="mr-4 transition-colors">
        <Link to="/contact">Contact</Link>
      </li>
      {user?.uid ? (
        <>
          <li className="mr-4 transition-colors">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <label htmlFor="profile-modal">
              <FaUserCircle className="text-5xl hover:ring-8 rounded-full ring-blue-500/30 bg-white text-blue-500 hover:cursor-pointer"></FaUserCircle>
            </label>
          </li>
        </>
      ) : (
        <li>
          <Link
            to="/login"
            className="bg-indigo-600 text-white font-[poppins] px-6 py-2 rounded hover:bg-indigo-400 duration-200"
          >
            Login
          </Link>
        </li>
      )}
    </>
  );

  return (
    <div className="shadow-md sticky bg-base-100 top-0 z-[10] py-2 text-[1.5rem] px-2">
      <div className="flex justify-between items-center font-[poppins]">
        <div className="flex items-center">
          <label
            htmlFor="easy-drawer"
            className="lg:hidden text-3xl hover:cursor-pointer hover:bg-slate-200 p-2 rounded-md"
          >
            <HiMenu></HiMenu>
          </label>
          <Link className="flex items-center" to="/">
            <img
              className="w-10 h-10"
              alt=""
              src="https://static.thenounproject.com/png/4676087-200.png"
            ></img>
            <h1 className="text-blue-500 text-xl font-extrabold">EASY DOC</h1>
          </Link>
        </div>
        <div className="lg:hidden flex gap-3">
          <ThemeToggle></ThemeToggle>
          {user?.uid && (
            <label htmlFor="profile-modal">
              <FaUserCircle className="text-4xl hover:ring-8 rounded-full ring-blue-500/30 bg-white text-blue-500 hover:cursor-pointer"></FaUserCircle>
            </label>
          )}
        </div>
        <ul className="hidden lg:flex shrink-1 items-center gap-4">{links}</ul>
      </div>
    </div>
  );
};

export default Navbar;
