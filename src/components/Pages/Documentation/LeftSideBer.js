import React, { useState } from "react";
import { FaAngleRight, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useFetchDataQuery } from "../../../features/api/apiSlice";
import { useTheme } from "../../../hooks/useTheme";


const LeftSideBer = () => {
  const { data, isLoading } = useFetchDataQuery('/doc-data')

  const { theme } = useTheme();
  const [interviewOpen, setInterviewOpen] = useState(false);
  const [errorDocOpen, setErrorDocOpen] = useState(false);
  const [openInstallation, setOpenInstallation] = useState(false);
  const [openHooks, setOpenHooks] = useState(false);
  const [openMainConcept, setOpenMainConcept] = useState(false);
  const [openApi, setOpenApi] = useState(false);
  if (isLoading) {
    return <p>loading...</p>
  }
  console.log(data);

  return (
    // this is leftsidbar main div
    <div
      className={`${theme === "dark" ? "bg-[#2c303a54]" : "bg-gray-100"
        } md:h-screen md:border-r-4 border-gray-200 overflow-y-scroll md:sticky top-0 p-2 hidden lg:block lg:col-span-1`}
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

      {/* React Installation docs data here */}
      <ul className="space-y-2 text-[1.2rem]">
        <li
          onClick={() => setOpenInstallation(!openInstallation)}
          className="flex justify-between transition duration-700 ease-in-out cursor-pointer items-center text-[1.5rem] hover:bg-gray-300 pl-2"
        >
          Installation
          <FaAngleRight
            className={`inline text-2xl text-gray-600 ${openInstallation ? "rotate-90" : ""
              } transition delay-50`}
          ></FaAngleRight>
        </li>
        <li>
          {data &&
            data
              ?.filter((item) => item?.category === "installation")
              .map((installation) => (
                <Link
                  key={installation._id}
                  className={`pl-4 ${openInstallation ? "block" : "hidden"
                    } hover:bg-gray-300 cursor-pointer p-1`}
                  to={`/documentation/installation/${installation._id}`}
                >
                  {installation?.title}
                </Link>
              ))}
        </li>
        <li
          onClick={() => setOpenApi(!openApi)}
          className="flex justify-between transition duration-700 ease-in-out cursor-pointer items-center text-[1.5rem] hover:bg-gray-300 pl-2"
        >
          Api Reference
          <FaAngleRight
            className={`inline text-2xl text-gray-600 ${openApi ? "rotate-90" : ""
              } transition delay-50`}
          ></FaAngleRight>
        </li>
        <li>
          {data &&
            data
              ?.filter((item) => item?.category === "apireference")
              .map((api) => (
                <Link
                  key={api._id}
                  className={`pl-4 ${openApi ? "block" : "hidden"
                    } hover:bg-gray-300 cursor-pointer p-1`}
                  to={`/documentation/apireference/${api._id}`}
                >
                  {api?.title}
                </Link>
              ))}
        </li>
      </ul>
      <ul className="space-y-2 text-[1.2rem]">
        <li
          onClick={() => setOpenMainConcept(!openMainConcept)}
          className="flex justify-between transition duration-700 ease-in-out cursor-pointer items-center text-[1.5rem] hover:bg-gray-300 pl-2"
        >
          Main Concept
          <FaAngleRight
            className={`inline text-2xl text-gray-600 ${openMainConcept ? "rotate-90" : ""
              } transition delay-50`}
          ></FaAngleRight>
        </li>
        <li>
          {data &&
            data
              ?.filter((item) => item?.category === "MAIN CONCEPTS")
              .map((main) => (
                <Link
                  key={main._id}
                  className={`pl-4 ${openMainConcept ? "block" : "hidden"
                    } hover:bg-gray-300 cursor-pointer p-1`}
                  to={`/documentation/mainConcept/${main._id}`}
                >
                  {main?.title}
                </Link>
              ))}
        </li>
      </ul>

      {/* React Hooks start from here */}
      <ul className="space-y-2 text-[1.2rem]">
        <li
          onClick={() => setOpenHooks(!openHooks)}
          className="flex justify-between transition duration-700 ease-in-out cursor-pointer items-center text-[1.5rem] hover:bg-gray-300 pl-2"
        >
          Installation
          <FaAngleRight
            className={`inline text-2xl text-gray-600 ${openHooks ? "rotate-90" : ""
              } transition delay-50`}
          ></FaAngleRight>
        </li>
        <li>
          {data &&
            data
              ?.filter((item) => item?.category === "hooks")
              .map((hooks) => (
                <Link
                  key={hooks._id}
                  className={`pl-4 ${openHooks ? "block" : "hidden"
                    } hover:bg-gray-300 cursor-pointer p-1`}
                  to={`/documentation/hooks/${hooks._id}`}
                >
                  {hooks?.title}
                </Link>
              ))}
        </li>
      </ul>
      <h1 className="text-2xl font-bold text-center mt-8">Others</h1>

      {/* Interview docs data here */}
      <ul className="space-y-2 text-[1.2rem]">
        <li
          onClick={() => setInterviewOpen(!interviewOpen)}
          className="flex justify-between transition duration-700 ease-in-out cursor-pointer items-center text-[1.5rem] hover:bg-gray-300 pl-2"
        >
          Interview Question{" "}
          <FaAngleRight
            className={`inline text-2xl text-gray-600 ${interviewOpen ? "rotate-90" : ""
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
                  className={`pl-4 ${interviewOpen ? "block" : "hidden"
                    } hover:bg-gray-300 cursor-pointer p-1`}
                  to={`/documentation/interview/${interview._id}`}
                >
                  {interview?.title}
                </Link>
              ))}
        </li>
      </ul>

      {/* Error docs data here */}
      <ul className="space-y-2 text-[1.2rem]">
        <li
          onClick={() => setErrorDocOpen(!errorDocOpen)}
          className="flex justify-between transition duration-700 ease-in-out cursor-pointer items-center text-[1.5rem] hover:bg-gray-300 pl-2"
        >
          Error{" "}
          <FaAngleRight
            className={`inline text-2xl text-gray-600 ${errorDocOpen ? "rotate-90" : ""
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
                  className={`pl-4 ${errorDocOpen ? "block" : "hidden"
                    } hover:bg-gray-300 cursor-pointer p-1`}
                  to={`/documentation/error/${error._id}`}
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
