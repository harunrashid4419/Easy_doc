import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
  FaUserAlt,
} from "react-icons/fa";
import "./Detalis.css";
import { AuthContext } from "../../../../Context/UserContext";
import { toast } from "react-hot-toast";

const Details = () => {
  const pageUrl = useLocation().pathname;
  const id = pageUrl.split("/details/")[1];
  const { user } = useContext(AuthContext);

  const { data: blogDetails = [] } = useQuery({
    queryKey: ["blogDetails"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/blog/${id}`);
      const data = await res.json();
      return data;
    },
  });

  const { data: comments = [], refetch } = useQuery({
    queryKey: ["comment", blogDetails],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/comment/${_id}`);
      const data = await res.json();
      return data;
    },
  });
  console.log(comments);
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
    _id,
  } = blogDetails;

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    const message = event.target.message.value;
    commentAddToDatabase(
      message,
      user?.displayName,
      user?.email,
      user?.photoURL,
      _id
    );
  };

  const commentAddToDatabase = (message, displayName, email, photoURL, id) => {
    const commentInfo = { message, displayName, email, photoURL, id };
    fetch("http://localhost:5000/comment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(commentInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Comment Successfully post");
          refetch();
        }
      });
  };

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
        <div className="comment-section">
          <h2>Comment</h2>
          <form onSubmit={handleCommentSubmit}>
            {user ? (
              <>
                <textarea
                  className="textarea textarea-info"
                  placeholder="Type a comment"
                  name="message"
                ></textarea>
                <input className="btn btn-wide" type="submit" value="Submit" />
              </>
            ) : (
              <p>If you want to comment on a blog, please <Link className="text-green-400 text-2xl" to='/login'>LogIn</Link> or <Link className="text-green-400 text-2xl" to='/register'>SignUp</Link></p>
            )}
          </form>
        </div>
        <div>
          <div className="comment-section">
            {comments.map((singleComment) => (
              <div className="flex mb-5">
                {singleComment?.photoURL ? (
                  <img
                    className="comment-img"
                    src={singleComment?.photoURL}
                    alt="userImg"
                  />
                ) : (
                  <FaUserAlt className="comment-user" />
                )}
                <div className="ml-5 p-3 rounded-xl border-2">
                  <h6 className="m-0">{singleComment?.displayName}</h6>
                  <span>{singleComment.message}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
