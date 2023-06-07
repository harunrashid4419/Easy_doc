import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../../../hooks/useTheme";
import "./PremiumPage.css";
import subscribtion from "../../../../assets/subscribe-banner.json";

const PremiumPage = () => {
  const { theme } = useTheme();
  return (
    <div className="container my-28">
      <h2 className="text-center text-3xl font-bold mb-4">Get on-time support </h2>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 items-center pt-8  bg-neutral-content mb-5 px-5">
        <div>
          <Player
            src={subscribtion}
            className="h-72 w-full"
            loop
            autoplay
          ></Player>
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-5">
            Subscribe Our Innovation And Get On-time Support.
          </h1>
          <p
            className={`${
              theme === "dark" ? "text-[#ffffff94]" : "text-[6b707f]"
            }`}
          >
            with <strong>2.99$</strong> subscription fee to get premium access. it
            will help you get an on-time problem solution. It helps for
            potential work with live chat.
          </p>
          <Link to={`/payment`}>
            <button className="btn mt-4 border-none" style={{backgroundColor:'#355BC0'}}>
              subscribe
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PremiumPage;
