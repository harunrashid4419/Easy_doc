import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import animation from "../../assets/teamwork.json";
import { useTheme } from "../../hooks/useTheme";

const Banner = () => {
  const { theme } = useTheme();
  return (
    <div>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 items-center mt-24  bg-neutral-content mb-5 px-5">
        <div>
          <h1 className="text-4xl font-bold mb-5">
            Communities for your favorite technologies
          </h1>
          <p
            className={`${
              theme === "dark" ? "text-[#ffffff94]" : "text-[6b707f]"
            }`}
          >
            Collectives helps you find trusted answers faster, engage with
            products experts, and share knowledge around the technologies you
            use most.
          </p>
        </div>

        <div>
          <Player
            src={animation}
            className="h-72 w-full"
            loop
            autoplay
          ></Player>
        </div>
      </div>
    </div>
  );
};

export default Banner;
