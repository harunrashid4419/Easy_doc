import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../../Context/UserContext";
import "./AddBlog.css";

const AddBlog = () => {
  const { user } = useContext(AuthContext);
  const imageHostKey = "2ed74405c9982edbe45a4ac8ae219bfb";
  const handleBlogSubmit = (e) => {
    e.preventDefault();
    const clear = e.target;
    const title = e.target.title.value;
    const description = e.target.description.value;
    const structure = e.target.structure.value;
    const structure_explain = e.target.structure_explain.value;
    const first_title = e.target.first_title.value;
    const first_pera = e.target.first_pera.value;
    const date = new Date();
    const image = e.target.img.files[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        addToDatabase(
          title,
          data.data.display_url,
          description,
          structure,
          structure_explain,
          first_title,
          first_pera,
          user?.email,
          user?.photoURL,
          user?.displayName,
          date,
          clear
        );
      });
  };

  const addToDatabase = (
    title,
    img,
    description,
    structure,
    structure_explain,
    first_title,
    first_pera,
    email,
    author_img_url,
    author_name,
    post_date,
    clear
  ) => {
    const blogPost = {
      title,
      img,
      description,
      structure,
      structure_explain,
      first_title,
      first_pera,
      email,
      author_img_url,
      author_name,
      post_date
    };
    fetch("https://easy-doc-server.vercel.app/blog", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(blogPost),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Post Successfully");
          clear.reset();
        }
      });
  };

  return (
    <div className="add-blog-section bg-neutral-content">
      <h2>Add a Blog</h2>
      <form onSubmit={handleBlogSubmit}>
        <div className="form-control w-full mb-5">
          <label className="label">
            <span className="label-text">
              Blog Title <span className="text-red-400">*</span>
            </span>
          </label>
          <input
            type="text"
            placeholder="Title"
            className="input input-bordered w-full"
            name="title"
            required
          />
        </div>
        <div className="form-control w-full mb-5">
          <label className="label">
            <span className="label-text">
              Description <span className="text-red-400">*</span>
            </span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            placeholder="Description"
            name="description"
            required
          ></textarea>
        </div>
        <div className="form-control w-full mb-5">
          <label className="label">
            <span className="label-text">Structure</span>
          </label>
          <input
            type="text"
            placeholder="Title"
            className="input input-bordered w-full"
            name="structure"
          />
        </div>
        <div className="form-control w-full mb-5">
          <label className="label">
            <span className="label-text">Structure explain</span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            placeholder="Type Here"
            name="structure_explain"
          ></textarea>
        </div>
        <div className="form-control w-full mb-5">
          <label className="label">
            <span className="label-text">Second Title (optional)</span>
          </label>
          <input
            type="text"
            placeholder="Title"
            className="input input-bordered w-full"
            name="first_title"
          />
        </div>
        <div className="form-control w-full mb-5">
          <label className="label">
            <span className="label-text">Second Description (optional)</span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            placeholder="Type Here"
            name="first_pera"
          ></textarea>
        </div>
        <input type="file" name="img" required /> <br />
        <input type="submit" className="post-btn" value="Submit Blog" />
      </form>
    </div>
  );
};

export default AddBlog;
