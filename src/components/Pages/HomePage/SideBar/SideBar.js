import React from "react";
import { FaRegListAlt, FaUsersCog } from "react-icons/fa";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="hidden fixed lg:flex flex-col top-[35%] left-0">
      <ul>
        <Link to="/documentation">
          <li className="w-[160px]  h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <span
              className="flex ml-4 mr-4 justify-between items-center w-full text-gray-300"
              href="/"
            >
              Document <FaRegListAlt size={25} />
            </span>
          </li>
        </Link>
        <Link to="/community">
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <span
              className="flex ml-4 mr-4 justify-between items-center w-full text-gray-300"
              href="/"
            >
              Community <FaUsersCog size={30} />
            </span>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default SideBar;
