import React from "react";
import { useForm } from "react-hook-form";


const Post = () => {
  const { register, handleSubmit} = useForm();
  const imgKey = "2ed74405c9982edbe45a4ac8ae219bfb";
  
  const handlePost = data =>{
    const message = data.message;
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data.display_url, message)
      });
  }
  
  return (
    <div>
      <div className="bg-slate-50 p-5 rounded-3xl mb-5">
        <h1 className="font-bold mb-5">Write you question here</h1>
        <div>
          <form onSubmit={handleSubmit(handlePost)}>
            <textarea
              className="w-full mb-3 rounded-2xl p-2 border-2 outline-none bg-blue-100"
              name=""
              {...register("message")}
              id=""
              rows="3"
              placeholder="Write you question"
            ></textarea>
            <hr className="border-y-1 border-slate-500 mb-5" />
            <input type="file" {...register("image")} accept="image/*" id="img" name="image" className="" />
            <hr className="border-y-1 border-slate-500 mt-5" />
          <input type="submit" value="Post" className="btn bg-blue-500 hover:bg-blue-400 mt-5" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Post;
