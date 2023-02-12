import React from "react";
import { FaCheck } from "react-icons/fa";
import { VscChromeClose } from "react-icons/vsc";
import "./PremiumPage.css";

const PremiumPage = () => {
  return (
    <div className="container">
      <div className="premium-section">
        <div className="premium bg-gray-400">
          <h2>Free</h2>
          <div className="price text-base-100">
            <h1>$0</h1>
            <p>Per Month</p>
          </div>
          <div className="premium-action">
            <p className="flex"><FaCheck className="mt-1 mr-1" /> Problem Sloveing</p>
            <p className="flex"><FaCheck className="mt-1 mr-1" /> Documentation</p>
            <p className="flex"><FaCheck className="mt-1 mr-1" /> Interview Questions</p>
            <p className="flex"><FaCheck className="mt-1 mr-1" /> Blog</p>
            <p className="flex"><VscChromeClose className="mt-1 mr-1" /> Live Chat</p>
          </div>
          <div className="text-center mt-5">
            <button className="text-base-100">Buy Now</button>
          </div>
        </div>
        <div className="premium bg-gray-400">
          <h2>Premium</h2>
          <div className="price text-base-100">
            <h1>$2.99</h1>
            <p>Per Month</p>
          </div>
          <div className="premium-action">
            <p className="flex"><FaCheck className="mt-1 mr-1" /> Problem Sloveing</p>
            <p className="flex"><FaCheck className="mt-1 mr-1" /> Documentation</p>
            <p className="flex"><FaCheck className="mt-1 mr-1" /> Interview Questions</p>
            <p className="flex"><FaCheck className="mt-1 mr-1" /> Blog</p>
            <p className="flex"><FaCheck className="mt-1 mr-1" /> Live Chat</p>
          </div>
          <div className="text-center mt-5">
            <button className="text-base-100">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumPage;
