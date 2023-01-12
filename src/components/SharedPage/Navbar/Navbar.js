import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed  z-50 w-full h-[60px] flex justify-between items-center px-4  text-gray-300'>
      <div>
        <p className='text-2xl font-semibold text-white'>Easy Doc</p> 
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li className='mr-4'>
          <Link to='/'>Home</Link>
        </li>
        <li className='mr-4'>
        <Link to='/'>Documentation</Link>
        </li>
        <li className='mr-4'>
        <Link to='/'>Community</Link>
        </li>
        <li className='mr-4'>
        <Link to='/'>pages</Link>
        </li>
        <li className='mr-4'>
        <Link to='/'>Blog</Link>
        </li>
        <li className='mr-4'>
        <Link to='/'>Contact</Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
        <Link to='/'>Home</Link>
        </li>
        <li className='py-6 text-4xl'>
        <Link to='/'>Documentation</Link>
        </li>
        <li className='py-6 text-4xl'>
        <Link to='/'>Community</Link>
        </li>
        <li className='py-6 text-4xl'>
        <Link to='/'>pages</Link>
        </li>
        <li className='py-6 text-4xl'>
        <Link to='/'>Blog</Link>
        </li>
        <li className='py-6 text-4xl'>
        <Link to='/'>Contact</Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;