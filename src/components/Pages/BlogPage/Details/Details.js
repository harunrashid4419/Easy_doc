import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
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
import { useTheme } from "../../../../hooks/useTheme";
import Loader from "../../../../Loader/Loader";
import { useGetDocCategoryQuery } from "../../../../features/api/docApi";
import useTitle from "../../../../Hook/useTitle";

const Details = () => {
  const { id } = useParams();
  useTitle('Blog Details');
  // const pageUrl = useLocation().pathname;
  // const id = pageUrl.split("/details/")[1];
  const { user } = useContext(AuthContext);
  const { theme } = useTheme();
  const { data: blogDetails, isLoading } = useGetDocCategoryQuery(`/blog/${id}`);

  // const { data: blogDetails = [] } = useQuery({
  //   queryKey: ["blogDetails"],
  //   queryFn: async () => {
  //     const res = await fetch(`https://easy-doc-server.vercel.app/blog/${id}`);
  //     const data = await res.json();
  //     return data;
  //   },
  // });
  const { data: comments = [], refetch } = useQuery({
    queryKey: ["comment", blogDetails],
    queryFn: async () => {
      const res = await fetch(
        `https://easy-doc-server.vercel.app/comment/${_id}`
      );
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return Loader;
  }
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
    const clear = event.target;
    commentAddToDatabase(
      message,
      user?.displayName,
      user?.email,
      user?.photoURL,
      _id,
      clear
    );
  };

  const commentAddToDatabase = (
    message,
    displayName,
    email,
    photoURL,
    id,
    clear
  ) => {
    const commentInfo = { message, displayName, email, photoURL, id };
    fetch("https://easy-doc-server.vercel.app/comment", {
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
          clear.reset();
        }
      });
  };

  return (
    <div className="container">
      <div className="main-blog-details">
        <div className="top-header">
          <p className="text-base-content">{post_date.slice(0, 10)}</p>
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
        <h3 className="text-base-content">{title}</h3>
        <div className="author-details">
          <div className="flex items-center">
            <div>
              {author_img_url ? (
                <img src={author_img_url} alt="blog-img" />
              ) : (
                <FaUserAlt className="img_user" />
              )}
            </div>
          </div>
          <div
            className={`author-content ${theme === "dark" ? "bg-[#2C303A]" : "bg-[#F4F6F8]"
              }`}
          >
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
        <p className="text-primary">{description}</p>
        <h5 className="text-base-content">{structure}</h5>
        <p className="text-base-content">{structure_explain}</p>
        <h5 className="text-base-content">{first_title}</h5>
        <p className="text-primary">{first_pera}</p>
        <h5 className="text-base-content">{second_title}</h5>
        <p className="text-primary">{second_pera}</p>
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
              <p>
                If you want to comment on a blog, please{" "}
                <Link className="text-green-400 text-2xl" to="/login">
                  LogIn
                </Link>{" "}
                or{" "}
                <Link className="text-green-400 text-2xl" to="/register">
                  SignUp
                </Link>
              </p>
            )}
          </form>
        </div>
        <div>
          <div className="comment-section">
            {comments.map((singleComment) => (
              <div key={singleComment._id} className="flex mb-5">
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
