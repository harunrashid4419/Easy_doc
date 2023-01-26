import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./Blog.css";

const Blog = () => {
  const blogs = useLoaderData();

  return (
    <div className="container">
      <p>This is blog</p>
      {blogs.map((blog) => (
        <div key={blog._id} className="main-blog">
          <div className="blog-section">
            <Link to={`/details/${blog._id}`}>
              <img src={blog.img} alt="blog-img" />
            </Link>
            <Link to={`/details/${blog._id}`}>
              <h2>{blog.title}</h2>
            </Link>
            <p>
              {blog.description.length > 100
                ? blog.description.slice(0, 98) + "..."
                : blog.description}
            </p>
            <div className="author-details">
              <img src={blog.author_img_url} alt="blog-img" />
              <div>
                <h4>{blog.author_name}</h4>
                <p>{blog.post_date}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
