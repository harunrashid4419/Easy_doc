import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import {
  FaCommentDots,
  FaLongArrowAltDown,
  FaLongArrowAltUp,
  FaUserAlt,
} from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";

import { AuthContext } from "../../Context/UserContext";
import { useTheme } from "../../hooks/useTheme";

function ShowSinglePost({ singlePost }) {
  const { image, img, name, post, _id } = singlePost;
  const { register, handleSubmit, reset } = useForm();
  const [commentBox, setCommentBox] = useState("hidden");
  const { user } = useContext(AuthContext);
  const { theme } = useTheme();

  const handlecomment = (data) => {
    const userComment = {
      userComment: data?.comment,
      postId: _id,
      userName: user?.displayName,
      userPhoto: user?.photoURL,
    };
    console.log(userComment);
    fetch("https://easy-doc-server.vercel.app/userComment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userComment),
    })
      .then((res) => res.json())
      .then((postdata) => {
        console.log(postdata);
        toast.success("post successfuly");
        reset();
      });
  };

  const { data: userComment = [] } = useQuery({
    queryKey: ["allUserComment", _id],
    queryFn: async () => {
      const res = await fetch(
        `https://easy-doc-server.vercel.app/allUserComment/${_id}`
      );
      const data = await res.json();
      return data;
    },
  });

  const handleComment = () => {
    if (commentBox === "hidden") {
      setCommentBox("visible");
    } else {
      setCommentBox("hidden");
    }
  };

  return (
    <div>
      <div
        className={`my-5 p-5 ${
          theme === "dark" ? "bg-[#2C303A]" : "bg-slate-100"
        }`}
      >
        <div className="flex items-center mb-5">
          {image ? (
            <img className="rounded-full w-10 h-10 mr-5" src={image} alt="" />
          ) : (
            <FaUserAlt className="w-10 h-10 mr-5 text-primary" />
          )}
          <span className="font-bold text-primary">{name}</span>
        </div>
        <div className="mb-5">
          <p className="mb-5 text-primary">{post}</p>
          <img className="w-1/2 m-auto" src={img} alt="imgloading.." />
        </div>
        <div className="mt-9">
          <hr className="border-y-1 border-slate-500 mb-5" />
        </div>
        {/* Comment section */}
        <div className={`gap-1 sm:gap-5 ${commentBox}`}>
          <FaCommentDots
            onClick={handleComment}
            className="cursor-pointer mb-5"
            size={30}
            color="green"
          />
          {userComment.map((allcomment) => (
            <div key={allcomment._id} className="mb-5 bg-white rounded-2xl p-5">
              <div className="flex items-center text-black">
                {/* whoever answer will show his picture here */}
                {allcomment?.userPhoto ? (
                  <img
                    className="rounded-full w-10 h-10 mr-5"
                    src={allcomment?.userPhoto}
                    alt=""
                  />
                ) : (
                  <FaUserAlt className="w-10 h-10 mr-5" />
                )}

                {/* whoever answer will show his name here */}
                <p className="font-bold text-black">{allcomment?.userName}</p>
              </div>
              <p className="text-black  p-2  mt-5">{allcomment.userComment}</p>
              <div className="flex mt-2 p-2 pb-5">
                <button className="inline-block">
                  <FaLongArrowAltUp className=" text-blue-600 mr-1"></FaLongArrowAltUp>
                </button>
                <button className="inline-block">
                  <FaLongArrowAltDown className=" text-blue-600"></FaLongArrowAltDown>
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* commentsectionEnd */}
        <FaCommentDots
          onClick={handleComment}
          className="cursor-pointer"
          size={30}
          color="green"
        />
        Add comment
        <form
          onSubmit={handleSubmit(handlecomment)}
          className={`gap-1 sm:gap-5 ${commentBox}`}
        >
          <div className="flex gap-1">
            <input
              type="text"
              placeholder="Type here"
              {...register("comment", { required: "comment is required" })}
              className="input input-sm sm:input-md input-bordered w-full rounded-badge"
            />
            <button
              className="btn btn-sm sm:btn-md btn-primary rounded-badge text-base-100"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ShowSinglePost;
