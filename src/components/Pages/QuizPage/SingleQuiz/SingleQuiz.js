import React from "react";
import { Link } from "react-router-dom";

const SingleQuiz = ({ quiz }) => {
  const { img, name, total, id } = quiz;
  return (
    <div className="quiz bg-neutral-content container">
      <img src={img} alt="" />
      <div className="quiz-details">
        <p>About {name}</p>
        <p>Total: {total}</p>
      </div>
      <Link to={`../quiz/${id}`}>
        <button className="bg-base-content text-base-100">Start Quiz</button>
      </Link>
    </div>
  );
};

export default SingleQuiz;
