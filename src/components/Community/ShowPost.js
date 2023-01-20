import React from "react";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";

const ShowPost = () => {

  const { data: allpost = [] } = useQuery({
    queryKey: ["post"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/allUserPost");
      const data = await res.json();
      return data;
    },
  });
  
  return (
    <div>
      {allpost.map((postDatails) => (
        <div key={postDatails._id} className="my-5 p-5 bg-slate-100">
          <div className="flex items-center mb-5">
            <img className="rounded-full w-10 h-10 mr-5" src={postDatails?.image} alt="" />
            <p>{postDatails?.name}</p>
          </div>
          <div className="mb-5">
            <p className="mb-5">{postDatails?.post}</p>
            <img src={postDatails?.img} alt="imgloading.." />
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
      ))}
    </div>
  );
};

export default ShowPost;
