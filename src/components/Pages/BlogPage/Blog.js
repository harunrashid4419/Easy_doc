import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./Blog.css";
import { FaUserAlt } from "react-icons/fa";

const Blog = () => {
  const blogs = useLoaderData();

  return (
    <div className="container">
      <div className="main-blog">
        {blogs.map((blog) => (
          <div key={blog._id}>
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
                {blog.author_img_url ? (
                  <img src={blog.author_img_url} alt="blog-img" />
                ) : (
                  <FaUserAlt className="img_user" />
                )}
                <div>
                  <h4>{blog.author_name}</h4>
                  <p>{blog.post_date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
