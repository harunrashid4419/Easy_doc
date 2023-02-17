import React, { useState } from "react";
import { useContext } from "react";
import { toast } from "react-hot-toast";
import ReactStars from "react-rating-stars-component";
import { AuthContext } from "../../../../Context/UserContext";

const AddReview = () => {
  const [rating, setRating] = useState("");
  const { user } = useContext(AuthContext);
  const date = new Date();
  const ratingChanged = (rating) => {
    setRating(rating);
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const feedback = e.target.feedback.value;
    feedbackAddToDatabase(
      name,
      user?.email,
      user?.photoURL,
      feedback,
      rating,
      date,
      e
    );
  };

  const feedbackAddToDatabase = (
    name,
    email,
    photoURL,
    feedback,
    rating,
    date,
    e
  ) => {
    const feedbacks = { name, email, photoURL, feedback, rating, date };
    fetch("https://easy-doc-server.vercel.app/feedback", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(feedbacks),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          console.log(data);
          e.target.reset();
          toast.success("Review Submit");
        }
      });
  };

  return (
    <div className="p-12">
      <h2 className="text-center text-base-content text-2xl font-normal">
        Add your valuable Review
      </h2>
      <form onSubmit={handleReviewSubmit}>
        <div className="form-control w-full mt-5">
          <label className="label">
            <span className="label-text font-light">Your Name</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="input input-bordered border-info w-full font-light"
          />
        </div>
        <div className="form-control w-full mt-5">
          <label className="label">
            <span className="label-text font-light">Share Your Feedback</span>
          </label>
          <textarea
            className="textarea textarea-info w-full h-24 font-light"
            placeholder="Feedback"
            name="feedback"
          ></textarea>
        </div>
        <div className="form-control w-full mt-5 mb-8">
          <label className="label">
            <span className="label-text font-light">Your Rating:</span>
          </label>
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={40}
            isHalf={true}
            activeColor="#ffd700"
          />
        </div>
        <input className="btn btn-wide" type="submit" value="Submit Review" />
      </form>
    </div>
  );
};

export default AddReview;
