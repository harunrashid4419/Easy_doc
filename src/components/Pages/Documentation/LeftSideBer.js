import React, { useState } from "react";
import { FaAngleRight, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useTheme } from "../../../hooks/useTheme";

const LeftSideBer = () => {
  const { theme } = useTheme();
  const [interviewOpen, setInterviewOpen] = useState(false);
  const [errorDocOpen, setErrorDocOpen] = useState(false);
  const [installation, setInstallation] = useState(false);
  const { data, loading } = useFetch(
    "https://easy-doc-server.vercel.app/doc-data"
  );
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    // this is leftsidbar main div
    <div
      className={`${
        theme === "dark" ? "bg-[#2c303a54]" : "bg-gray-100"
      } md:h-screen md:border-r-4 border-gray-200 overflow-y-scroll md:sticky top-0 p-2 hidden md:block md:col-span-3 lg:col-span-1`}
    >
      <div className="divider text-gray-500">Menu</div>
      <div className="relative">
        <input
          className="w-full border-2 mb-4 pl-16 p-2 rounded"
          type="text"
          placeholder="Quick Search"
        />
        <FaSearch className="absolute top-3 left-4 w-10 text-slate-400"></FaSearch>
      </div>
      <h1 className="text-2xl font-bold text-center">React</h1>
      <ul className="space-y-2 text-[1.2rem]">
        <li
          onClick={() => setInstallation(!installation)}
          className="flex justify-between transition duration-700 ease-in-out cursor-pointer items-center text-[1.5rem] hover:bg-gray-300 pl-2"
        >
          Installation
          <FaAngleRight
            className={`inline text-2xl text-gray-600 ${
              installation ? "rotate-90" : ""
            } transition delay-50`}
          ></FaAngleRight>
        </li>
        <li>
          {data &&
            data
              ?.filter((item) => item?.category === "installation")
              .map((error) => (
                <Link
                  key={error._id}
                  className={`pl-4 ${
                    installation ? "block" : "hidden"
                  } hover:bg-gray-300 cursor-pointer p-1`}
                  to={`/documentation/${error?.id}`}
                >
                  {error?.title}
                </Link>
              ))}
        </li>
      </ul>
      <h1 className="text-2xl font-bold text-center mt-8">Others</h1>
      <ul className="space-y-2 text-[1.2rem]">
        <li
          onClick={() => setInterviewOpen(!interviewOpen)}
          className="flex justify-between transition duration-700 ease-in-out cursor-pointer items-center text-[1.5rem] hover:bg-gray-300 pl-2"
        >
          Interview Question{" "}
          <FaAngleRight
            className={`inline text-2xl text-gray-600 ${
              interviewOpen ? "rotate-90" : ""
            } transition delay-50`}
          ></FaAngleRight>
        </li>
        <li>
          {data &&
            data
              .filter((item) => item?.category === "interview")
              .map((interview) => (
                <Link
                  key={interview._id}
                  className={`pl-4 ${
                    interviewOpen ? "block" : "hidden"
                  } hover:bg-gray-300 cursor-pointer p-1`}
                  to={`/documentation/${interview?.id}`}
                >
                  {interview?.title}
                </Link>
              ))}
        </li>
      </ul>
      <ul className="space-y-2 text-[1.2rem]">
        <li
          onClick={() => setErrorDocOpen(!errorDocOpen)}
          className="flex justify-between transition duration-700 ease-in-out cursor-pointer items-center text-[1.5rem] hover:bg-gray-300 pl-2"
        >
          Error{" "}
          <FaAngleRight
            className={`inline text-2xl text-gray-600 ${
              errorDocOpen ? "rotate-90" : ""
            } transition delay-50`}
          ></FaAngleRight>
        </li>
        <li>
          {data &&
            data
              .filter((item) => item?.category === "error")
              .map((error) => (
                <Link
                  key={error._id}
                  className={`pl-4 ${
                    errorDocOpen ? "block" : "hidden"
                  } hover:bg-gray-300 cursor-pointer p-1`}
                  to={`/documentation/${error?.id}`}
                >
                  {error?.title}
                </Link>
               
              ))}
        </li>
      </ul>
    </div>
  );
};

export default LeftSideBer;
