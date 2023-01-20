import React from "react";
import pic from "../../assets/accounts.svg";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";

const ShowPost = () => {
  
  return (
    <div className="my-5 p-5 bg-slate-100">
      <div className="flex items-center mb-5">
        <img className="rounded-full w-10 h-10 mr-5" src={pic} alt="" />
        <p>User Name</p>
      </div>
      <div className="mb-5">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, earum
          ab? Dolorum consequatur omnis repellendus maxime impedit quod animi
          esse?
        </p>
      </div>
      <div>
        <hr className="border-y-1 border-slate-500 mb-5" />
        <div className="flex">
          <FaThumbsUp className=" text-black mr-5"></FaThumbsUp>
          <FaThumbsDown className=" text-black mb-5"></FaThumbsDown>
        </div>
        <hr className="border-y-1 border-slate-500 mb-5" />
      </div>
      <div>
        <input
          className="w-full rounded-2xl p-2 outline-none bg-blue-100"
          type="text"
          placeholder="Write your answer"
        />
      </div>
    </div>
  );
};

export default ShowPost;
