import React, { useState, useContext } from "react";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/Logo.png";
import { AuthContext } from "../../../Context/UserContext";
import { useTheme } from "../../../hooks/useTheme";
import ThemeToggle from "../../ThemeToggle/ThemeToggle";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const handleClick = () => setNav(!nav);
  const navigate = useNavigate();
  const { theme } = useTheme();

  // logout
  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/login");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className={`${theme === 'dark' ? 'bg-black' : 'bg-[#7846E9]'} w-full`}>
      <div className="sticky container top-0 z-50 w-full h-[60px] flex justify-between items-center px-4  text-gray-300">
        <Link to="/" className="flex">
          <img style={{ width: "40px" }} src={logo} alt="logo" />
          <p className="text-2xl font-semibold text-white ml-1 mt-1">
            Easy Doc
          </p>
        </Link>

        {/* menu */}
        <ul className="hidden md:flex items-center">
          <li className="mr-5 mt-2">
            <ThemeToggle />
          </li>
          <li className="mr-5 hover:text-orange-500 transition-colors">
            <Link to="/">Home</Link>
          </li>
          <li className="mr-5 hover:text-orange-500 transition-colors">
            <Link to="/documentation">Doc</Link>
          </li>
          <li className="mr-5 hover:text-orange-500 transition-colors">
            <Link to="/community">Community</Link>
          </li>
          <li className="mr-5 hover:text-orange-500 transition-colors">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="mr-5 hover:text-orange-500 transition-colors">
            <Link to="/">Contact</Link>
          </li>
          {user?.uid ? (
            <>
              <li className="mr-5 hover:text-orange-500 transition-colors">
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li className="mr-5 hover:text-orange-500 transition-colors">
                <button
                  className="btn btn-warning btn-xs md:btn-sm"
                  onClick={handleLogOut}
                >
                  LogOut
                </button>
              </li>

              <li>
                <label htmlFor="profile-modal">
                  <FaUserCircle className="text-4xl hover:ring-4 rounded-full ring-slate-300 bg-slate-500 text-slate-400 hover:cursor-pointer"></FaUserCircle>
                </label>
              </li>
            </>
          ) : (
            <li className="mr-5 hover:text-orange-500 transition-colors">
              <Link to="/login">Login</Link>
            </li>
          )}
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
          <li className="py-6 text-4xl">
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
// import React, { useContext, useReducer, useState } from 'react';
// import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';
// import { Link, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../../Context/UserContext';

// const initialState = '';
// const reducer = (state, action) => {
//   switch (action) {
//     case 'open':
//       return 'open';
//     case 'close':
//       return 'close';
//     default:
//       return state;
//   }
// }
// const Navbar = () => {
//   const { user, logOut } = useContext(AuthContext);
//   const navigate = useNavigate();
//   // logout
//   const handleLogOut = () => {
//     logOut()
//       .then(() => {
//         navigate("/login");
//       })
//       .catch((error) => console.error(error));
//   };


//   const routes = <>
//     <Link to='/' className='font-semibold hover:text-red-500'>Home</Link>
//     <Link to='/documentation' className='font-semibold hover:text-red-500'>Docs</Link>
//     <Link to='/community' className='font-semibold hover:text-red-500'>Community</Link>
//     <Link to='/blog' className='font-semibold hover:text-red-500'>Blogs</Link>
//     {
//       user?.uid
//         ?
//         <>
//           <button
//             className="btn btn-warning btn-xs md:btn-sm"
//             onClick={handleLogOut}
//           >
//             LogOut
//           </button>

//         </>
//         :
//         <>
//           <Link className='btn mr-4 hover:bg-blue-600 bg-blue-700 sm:btn-sm align-middle' to='/login'>Login</Link>
//           {/* <Link className='btn btn-outline sm:btn-sm md:btn-md rounded' to='/register'>SignUp</Link> */}
//         </>
//     }
//   </>

//   const [toggole, dispatch] = useReducer(reducer, initialState);
//   console.log(toggole);
//   return (


//     // <div>
//     //   {
//     //     toggole === 'open' ?

//     //       <FaTimes
//     //         onClick={() => dispatch('close')}
//     //         className='md:hidden cursor-pointer'
//     //       ></FaTimes>
//     //       :
//     //       <FaBars
//     //         onClick={() => dispatch('open')}
//     //         className='md:hidden cursor-pointer'
//     //       ></FaBars>
//     //   }
//     //   <ul className={`${toggole === 'open' ? 'block' : 'hidden'} md:hidden`}>
//     //     <li className='grid' onClick={() => dispatch('close')}>
//     //       {routes}
//     //     </li>
//     //   </ul>
//     // </div>


//     <div className='flex justify-between'>
//       <div className="flex items-center">

//         <img className='h-10' src="https://static.thenounproject.com/png/4139689-200.png" alt="" />
//         <Link to='/' className='font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-t from-purple-500 to-pink-600'>DOC</Link>
//       </div>


//       <ul className="hidden md:flex items-center gap-x-4">

//         {routes}

//         {
//           user?.uid && <label htmlFor="profile-modal">
//             <FaUserCircle className="text-4xl hover:ring-4 rounded-full ring-slate-300  text-slate-400 hover:cursor-pointer"></FaUserCircle>
//           </label>
//         }

//       </ul>
//     </div>

//   );
// };

// export default Navbar;
