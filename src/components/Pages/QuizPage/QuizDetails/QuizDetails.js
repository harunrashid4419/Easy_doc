import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleQuizDetails from "./SingleQuizDetails";
import './SingleQuiz.css';

const QuizDetails = () => {
  const quiz = useLoaderData();
  const { name, questions } = quiz;
  return (
    <div id='single_quiz_section' className="container">
      <h2 className="text-base-200">{name} Quiz Test</h2>
      <div>
        {questions.map((question, i) => (
          <SingleQuizDetails
            key={question._id}
            question={question}
            i={i}
          ></SingleQuizDetails>
        ))}
      </div>
    </div>
  );
};

export default QuizDetails;
