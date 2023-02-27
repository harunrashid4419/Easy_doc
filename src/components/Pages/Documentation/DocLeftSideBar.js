import React from "react";
import { FaSearch } from "react-icons/fa";
import { useGetDocDataQuery } from "../../../features/api/docApi";
import { useTheme } from "../../../hooks/useTheme";
import DocRoutes from "./DocRoutes";

const DocLeftSideBer = () => {
  const { theme } = useTheme();
  const { data, isLoading } = useGetDocDataQuery();
  console.log(data);
  if (isLoading) {
    return <p>loading...</p>;
  }

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
      <DocRoutes data={data}></DocRoutes>
    </div>
  );
};

export default DocLeftSideBer;
