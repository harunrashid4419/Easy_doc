import React from "react";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";

const ShowPost = () => {
  const { data: allpost = [], refetch } = useQuery({
    queryKey: ["post"],
    queryFn: async () => {
      const res = await fetch("https://easy-doc-server.vercel.app/allUserPost");
      const data = await res.json();
      return data;
    },
  });

  return (
    <div>
      {allpost.map((postDatails) => (
        <div key={postDatails._id} className="my-5 p-5 bg-slate-100">
          <div className="flex items-center mb-5">
            <img
              className="rounded-full w-10 h-10 mr-5"
              src={postDatails?.image}
              alt=""
            />
            <p className="font-bold text-black">{postDatails?.name}</p>
          </div>
          <div className="mb-5">
            <p className="mb-5">{postDatails?.post}</p>
            <img
              className="w-1/2 m-auto"
              src={postDatails?.img}
              alt="imgloading.."
            />
          </div>
          <div>
            <hr className="border-y-1 border-slate-500 mb-5" />
            <div className="flex">
              <FaThumbsUp className=" text-blue-600 mr-5"></FaThumbsUp>
              <FaThumbsDown className=" text-blue-600 mb-5"></FaThumbsDown>
            </div>
            <hr className="border-y-1 border-slate-500 mb-5" />
          </div>
          {/* Comment section */}
          <div className="mb-5 bg-white rounded-2xl">
            <div className="flex items-center">
              {/* whoever answer will show his picture here */}
              <img
                className="rounded-full w-10 h-10 mr-5"
                src={postDatails?.image}
                alt=""
              />
              {/* whoever answer will show his name here */}
              <p className="font-bold text-black">{postDatails?.name}</p>
            </div>
            <p className="text-black  p-2 ">
              Here will show the answer. this will show based on conditional
              rendering. if in this post has any answer.
            </p>
            <div className="flex mt-2 p-2">
              <FaThumbsUp className=" text-blue-600 mr-5"></FaThumbsUp>
              <FaThumbsDown className=" text-blue-600 mb-5"></FaThumbsDown>
            </div>
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
