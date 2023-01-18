import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import animation from "../../assets/teamwork.json";

const Community = () => {
  return (
    <div className="max-w-[1280px] mx-auto">
      <div className="grid md:grid-cols-2 sm:grid-cols-1 items-center  bg-slate-100 pt-16 px-5 mb-5">
        <div>
          <h1 className="text-4xl font-bold mb-5">
            Communities for your favorite technologies
          </h1>
          <p>
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
      <div className="bg-slate-50 p-5 rounded-3xl mb-5">
        <h1 className="font-bold mb-5">Write you question here</h1>
        <div>
          <textarea
            className="w-full mb-3 p-2 border-2 outline-none rounded-3xl"
            name=""
            id=""
            rows="2"
            placeholder="Write you question"
          ></textarea>
          <hr className="border-y-1 border-slate-500" />
          <div className="mt-3 flex flex-col justify-center items-center mb-3">
            <label
              htmlFor="img"
              className="btn bg-blue-500 text-white border-0 hover:bg-blue-400"
            >
              Upload
            </label>
            <input type="file" id="img" name="image" className="hidden" />
          </div>
          <hr className="border-y-1 border-slate-500 mb-3" />
          <button className="btn bg-blue-500 hover:bg-blue-400 flex">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Community;
