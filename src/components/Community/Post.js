import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../Context/UserContext";
import { useTheme } from "../../hooks/useTheme";
import ShowPost from "./ShowPost";

const Post = ({refetch}) => {
  const { register, handleSubmit, reset, } = useForm();
  const imageHostKey = "2ed74405c9982edbe45a4ac8ae219bfb";
  const { user } = useContext(AuthContext);
  const { theme } = useTheme();

  const handlePost = (data) => {
    const image = data.file[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgeData) => {
        if (imgeData.success) {
          const userPost = {
            email: user?.email,
            name: user.displayName,
            image: user?.photoURL,
            post: data?.userPost,
            img: imgeData?.data.url,
          };
          fetch("https://easy-doc-server.vercel.app/userPost", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(userPost),
          })
            .then((res) => res.json())
            .then((postdata) => {
              toast.success("post successfuly");
              reset();
              refetch()
            });
        }
      });
  };

  return (
    <div>
      <div
        className={`${
          theme === "dark" ? "bg-[#2C303A]" : "bg-slate-50"
        } p-5 rounded-3xl mb-5`}
      >
        <h1 className="font-bold mb-5">Write you question here</h1>
        <div>
          <form onSubmit={handleSubmit(handlePost)}>
            <textarea
              className={`w-full mb-3 rounded-2xl p-2 border-2 outline-none ${theme === 'dark' ? 'bg-white': 'bg-blue-100'}`}
              name=""
              {...register("userPost", { required: "text is required" })}
              id=""
              rows="5"
              placeholder="Write you question"
            ></textarea>
            <div className="my-3">
              <input
                type="file"
                multiple="multiple"
                {...register("file", { required: "img is required" })}
              />
            </div>
            <input
              type="submit"
              value="Post"
              className="btn bg-blue-500 hover:bg-blue-400 mt-5"
            />
          </form>
        </div>
      </div>
      {/* <ShowPost
      ></ShowPost> */}
    </div>
  );
};

export default Post;
