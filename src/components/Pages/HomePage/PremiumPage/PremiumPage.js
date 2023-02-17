import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../../../hooks/useTheme";
import "./PremiumPage.css";
import subscribtion from '../../../../assets/subscribe-banner.json'

const PremiumPage = () => {

  const { theme } = useTheme();
  return (
    <div className="container">
       <h2 className="text-center text-3xl font-bold">Get on-time support </h2>
              <div className="grid md:grid-cols-2 sm:grid-cols-1 items-center pt-16  bg-neutral-content mb-5 px-5">
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
        subscribe our innovation and get on-time support.
          </h1>
          <p className={`${theme === 'dark' ? 'text-[#ffffff94]' : 'text-[6b707f]'}`}>
          with <strong>2$</strong> subscription fee to get premium access. it will help you get an on-time problem solution. It helps for potential work with live chat.
          </p>
          <button className="btn mt-4 btn-secondary bg-purple-600 border-none">subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default PremiumPage;
