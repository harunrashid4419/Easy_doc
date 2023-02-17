import React from "react";
import { toast } from "react-hot-toast";
import { FaCheck } from "react-icons/fa";
import { VscChromeClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { useTheme } from "../../../../hooks/useTheme";
import "./PremiumPage.css";

const PremiumPage = () => {
  const price = 2.99;
  const FreeUserClick = () => {
    toast.success("You are now Free User!");
  };
  const { theme } = useTheme();
  return (
    <div className="container">
      <h2 className="text-center mt-5 text-4xl">Premium option</h2>
      <p className="text-center italic mt-1 text-sm mb-8">If you want to talk with us, Please buy the premium option.</p>
      <div className="premium-section">
        <div
          className={`premium ${
            theme === "dark" ? "bg-neutral-content" : "bg-gray-400"
          }`}
        >
          <h2>Free</h2>
          <div className="price text-base-100">
            <h1>$0</h1>
            <p>Per Month</p>
          </div>
          <div className="premium-action">
            <p className="flex">
              <FaCheck className="mt-1 mr-1" /> Problem Sloveing
            </p>
            <p className="flex">
              <FaCheck className="mt-1 mr-1" /> Documentation
            </p>
            <p className="flex">
              <FaCheck className="mt-1 mr-1" /> Interview Questions
            </p>
            <p className="flex">
              <FaCheck className="mt-1 mr-1" /> Blog
            </p>
            <p className="flex">
              <VscChromeClose className="mt-1 mr-1" /> Live Chat
            </p>
          </div>
          <div className="text-center mt-5">
            <button
              onClick={FreeUserClick}
              className={`${
                theme === "dark" ? "bg-white" : "bg-[#355BC0]"
              } text-base-100`}
            >
              Buy Now
            </button>
          </div>
        </div>
        <div
          className={`premium ${
            theme === "dark" ? "bg-neutral-content" : "bg-gray-400"
          }`}
        >
          <h2>Premium</h2>
          <div className="price text-base-100">
            <h1>${price}</h1>
            <p>Per Month</p>
          </div>
          <div className="premium-action">
            <p className="flex">
              <FaCheck className="mt-1 mr-1" /> Problem Sloveing
            </p>
            <p className="flex">
              <FaCheck className="mt-1 mr-1" /> Documentation
            </p>
            <p className="flex">
              <FaCheck className="mt-1 mr-1" /> Interview Questions
            </p>
            <p className="flex">
              <FaCheck className="mt-1 mr-1" /> Blog
            </p>
            <p className="flex">
              <FaCheck className="mt-1 mr-1" /> Live Chat
            </p>
          </div>
          <div className="text-center mt-5">
            <Link price={price} to={`/payment`}>
              <button
                className={`${
                  theme === "dark" ? "bg-white" : "bg-[#355BC0]"
                } text-base-100`}
              >
                Buy Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumPage;
