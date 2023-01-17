import React, { useState, useContext } from "react";
import {
  FaBars,
  FaTimes,
  FaRegListAlt,
  FaUsersCog,
  FaUserCircle,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/Logo.png";
import { AuthContext } from "../../../Context/UserContext";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const handleClick = () => setNav(!nav);
  const navigate = useNavigate();

  // logout
  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/login");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="fixed bg-[#7846E9] z-50 w-full h-[60px] flex justify-between items-center px-4  text-gray-300">
      <Link to="/" className="flex">
        <img style={{ width: "40px" }} src={logo} alt="logo" />
        <p className="text-2xl font-semibold text-white ml-1 mt-1">Easy Doc</p>
      </Link>

      {/* menu */}
      <ul className="hidden md:flex items-center">
        <li className="mr-5 hover:text-orange-500 transition-colors">
          <Link to="/">Home</Link>
        </li>
        <li className="mr-5 hover:text-orange-500 transition-colors">
          <Link to="/">Documentation</Link>
        </li>
        <li className="mr-5 hover:text-orange-500 transition-colors">
          <Link to="/">Community</Link>
        </li>
        <li className="mr-5 hover:text-orange-500 transition-colors">
          <Link to="/">Blog</Link>
        </li>
        <li className="mr-5 hover:text-orange-500 transition-colors">
          <Link to="/">Contact</Link>
        </li>
        {user ? (
          <li className="mr-5 hover:text-orange-500 transition-colors">
            <Link onClick={handleLogOut}>LogOut</Link>
          </li>
        ) : (
          <li className="mr-5 hover:text-orange-500 transition-colors">
            <Link to="/">Login</Link>
          </li>
        )}
        <li className="mr-5 hover:text-orange-500 transition-colors">
          <Link to="/profile">
            <FaUserCircle className="text-4xl rounded-full border-none bg-gray-700 text-white hover:ring-4 ring-indigo-400"></FaUserCircle>
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center lg:hidden"
        }
      >
        <button className="w-full flex-col"></button>
        <li className="py-6 text-4xl">
          <Link to="/">Home</Link>
        </li>
        <li className="py-6 text-4xl">
          <Link to="/">Documentation</Link>
        </li>
        <li className="py-6 text-4xl">
          <Link to="/">Community</Link>
        </li>
        <li className="py-6 text-4xl">
          <Link to="/">pages</Link>
        </li>
        <li className="py-6 text-4xl">
          <Link to="/">Blog</Link>
        </li>
        <li className="py-6 text-4xl">
          <Link to="/">Contact</Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px]  h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex ml-4 mr-4 justify-between items-center w-full text-gray-300"
              href="/"
            >
              Document <FaRegListAlt size={25} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex ml-4 mr-4 justify-between items-center w-full text-gray-300"
              href="/"
            >
              Community <FaUsersCog size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
