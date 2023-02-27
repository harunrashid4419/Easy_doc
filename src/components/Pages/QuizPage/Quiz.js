import React from "react";
import {  useLoaderData } from "react-router-dom";
import useTitle from "../../../Hook/useTitle";
import "./Quiz.css";
import SingleQuiz from "./SingleQuiz/SingleQuiz";

const Quiz = () => {
  useTitle('Quiz');
  const quizes = useLoaderData();
  return (
    <div className="container">
      <h2 className="text-center text-4xl mt-10">Quiz</h2>
      <div className="main-quiz">
        {quizes.map((quiz) => (
          <SingleQuiz key={quiz.id} quiz={quiz}></SingleQuiz>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
