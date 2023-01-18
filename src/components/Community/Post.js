import React from "react";

const Post = () => {
  return (
    <div>
      <div className="bg-slate-50 p-5 rounded-3xl mb-5">
        <h1 className="font-bold mb-5">Write you question here</h1>
        <div>
          <textarea
            className="w-full mb-3 rounded-2xl p-2 border-2 outline-none"
            name=""
            id=""
            rows="2"
            placeholder="Write you question"
          ></textarea>
          <hr className="border-y-1 border-slate-500" />
          <div className="mt-3 flex flex-col justify-center items-center">
            <label
              htmlFor="img"
              className="btn bg-blue-500 mb-5 text-white border-0 hover:bg-blue-400"
            >
              Upload
            </label>
            <input type="file" id="img" name="image" className="hidden" />
          </div>
          <hr className="border-y-1 border-slate-500" />
          <button className="btn bg-blue-500 hover:bg-blue-400 mt-5">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
