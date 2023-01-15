import React from "react";
import layer from "../../../../assets/layers.png";
import { FaAngleRight } from "react-icons/fa";

const RecommendedTopics = () => {
  return (
    <div className="bg-bg-image bg-cover h-full w-full bg-no-repeat bg-[#FFFFFF]  max-w-[1280px] mx-auto">
      <h1 className="text-4xl text-center font-bold my-10">
        Recommended Topics
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6 pb-10">
        <div className="bg-[#FFFFFF] shadow-2xl rounded-2xl p-4">
          <img className="h-[75px] w-[75px] mb-3" src={layer} alt="" />
          <h1 className="font-bold mb-2">MAIN CONCEPTS</h1>
          <div>
            <a
              href="/"
              className="flex items-center hover:text-blue-500 hover:underline"
            >
              <FaAngleRight className="text-blue-600" /> Introducing JSX
            </a>
            <a
              href="/"
              className="flex items-center hover:text-blue-500 hover:underline"
            >
              <FaAngleRight className="text-blue-600" /> Rendering Elements
            </a>
            <a
              href="/"
              className="flex items-center hover:text-blue-500 hover:underline"
            >
              <FaAngleRight className="text-blue-600" /> Components and Props
            </a>
            <a
              href="/"
              className="flex items-center hover:text-blue-500 hover:underline"
            >
              <FaAngleRight className="text-blue-600" /> State and Lifecycle
            </a>
            <a
              href="/"
              className="flex items-center hover:text-blue-500 hover:underline"
            >
              <FaAngleRight className="text-blue-600" /> Handling Events
            </a>
            <a
              href="/"
              className="flex items-center hover:text-blue-500 hover:underline"
            >
              <FaAngleRight className="text-blue-600" /> Conditional Rendering
            </a>
          </div>
        </div>
        <div className="bg-[#FFFFFF] shadow-2xl rounded-2xl p-4">
          <img className="h-[75px] w-[75px] mb-3" src={layer} alt="" />
          <h1 className="font-bold mb-2">ADVANCED GUIDES</h1>
          <div>
            <a
              href="/"
              className="flex items-center hover:text-blue-500 hover:underline"
            >
              <FaAngleRight className="text-blue-600" /> Accessibility
            </a>
            <a
              href="/"
              className="flex items-center hover:text-blue-500 hover:underline"
            >
              <FaAngleRight className="text-blue-600" />
              Context
            </a>
            <a
              href="/"
              className="flex items-center hover:text-blue-500 hover:underline"
            >
              <FaAngleRight className="text-blue-600" /> Error Boundaries
            </a>
            <a
              href="/"
              className="flex items-center hover:text-blue-500 hover:underline"
            >
              <FaAngleRight className="text-blue-600" /> Forwarding Refs
            </a>
            <a
              href="/"
              className="flex items-center hover:text-blue-500 hover:underline"
            >
              <FaAngleRight className="text-blue-600" /> Fragments
            </a>
            <a
              href="/"
              className="flex items-center hover:text-blue-500 hover:underline"
            >
              <FaAngleRight className="text-blue-600" /> JSX In Depth
            </a>
          </div>
        </div>
        <div className="bg-[#FFFFFF] shadow-2xl rounded-2xl p-4">
          <img className="h-[75px] w-[75px] mb-3" src={layer} alt="" />
          <h1 className="font-bold mb-2">API REFERENCE</h1>
          <div>
            <a
              href="/"
              className="flex items-center hover:text-blue-500 hover:underline"
            >
              <FaAngleRight className="text-blue-600" /> ReactDOM
            </a>
            <a
              href="/"
              className="flex items-center hover:text-blue-500 hover:underline"
            >
              <FaAngleRight className="text-blue-600" /> ReactDOMClient
            </a>
            <a
              href="/"
              className="flex items-center hover:text-blue-500 hover:underline"
            >
              <FaAngleRight className="text-blue-600" /> ReactDOMServer
            </a>
            <a
              href="/"
              className="flex items-center hover:text-blue-500 hover:underline"
            >
              <FaAngleRight className="text-blue-600" /> DOM Elements
            </a>
            <a
              href="/"
              className="flex items-center hover:text-blue-500 hover:underline"
            >
              <FaAngleRight className="text-blue-600" /> SyntheticEvent
            </a>
            <a
              href="/"
              className="flex items-center hover:text-blue-500 hover:underline"
            >
              <FaAngleRight className="text-blue-600" /> Test Utilities
            </a>
          </div>
        </div>
        <div className="bg-[#FFFFFF] shadow-2xl rounded-2xl p-4">
          <img className="h-[75px] w-[75px] mb-3" src={layer} alt="" />
          <h1 className="font-bold mb-2">HOOKS</h1>
          <div>
            <a
              href="/"
              className="flex items-center hover:text-blue-500 hover:underline"
            >
              <FaAngleRight className="text-blue-600" /> Introducing Hooks
            </a>
            <a
              href="/"
              className="flex items-center hover:text-blue-500 hover:underline"
            >
              <FaAngleRight className="text-blue-600" /> Hooks at a Glance
            </a>
            <a
              href="/"
              className="flex items-center hover:text-blue-500 hover:underline"
            >
              <FaAngleRight className="text-blue-600" /> Using the State Hook
            </a>
            <a
              href="/"
              className="flex items-center hover:text-blue-500 hover:underline"
            >
              <FaAngleRight className="text-blue-600" /> Using the Effect Hook
            </a>
            <a
              href="/"
              className="flex items-center hover:text-blue-500 hover:underline"
            >
              <FaAngleRight className="text-blue-600" /> Rules of Hooks
            </a>
            <a
              href="/"
              className="flex items-center hover:text-blue-500 hover:underline"
            >
              <FaAngleRight className="text-blue-600" /> Building Your Own Hooks
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendedTopics;
