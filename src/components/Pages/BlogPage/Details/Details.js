import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import "./Detalis.css";

const Details = () => {
  const pageUrl = useLocation().pathname;
  const id = pageUrl.split("/details/")[1];

  const { data: blogDetails = [] } = useQuery({
    queryKey: ["blogDetails"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/blog/${id}`);
      const data = await res.json();
      return data;
    },
  });

  const {
    title,
    post_date,
    img,
    author_img_url,
    description,
    structure,
    structure_explain,
    first_title,
    first_pera,
    second_title,
    second_pera,
  } = blogDetails;

  return (
    <div className="container">
      <div className="main-blog-details">
        <div className="top-header">
          <p>{post_date}</p>
          <div className="share-icon">
            <Link>
              <FaFacebookF />
            </Link>
            <Link>
              <FaTwitter />
            </Link>
            <Link>
              <FaLinkedinIn />
            </Link>
            <Link>
              <FaPinterestP />
            </Link>
          </div>
        </div>
        <h3>{title}</h3>
        <div className="author-details">
          <div className="flex items-center">
            <div>
              <img src={author_img_url} alt="author-img" />
            </div>
          </div>
          <div className="author-content">
            <p>
              I write and curate content for Bluehost. I hope this blog post is
              helpful.
            </p>
            <p>
              Are you looking at creating a blog, website or an online store?
              Bluehost has something for everyone.
            </p>
          </div>
        </div>
        <img src={img} alt="blog-img" />
        <p>{description}</p>
        <h5>{structure}</h5>
        <p>{structure_explain}</p>
        <h5>{first_title}</h5>
        <p>{first_pera}</p>
        <h5>{second_title}</h5>
        <p>{second_pera}</p>
      </div>
    </div>
  );
};

export default Details;
