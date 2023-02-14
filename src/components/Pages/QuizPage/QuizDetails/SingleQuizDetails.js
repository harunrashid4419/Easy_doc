import React, { useState } from "react";
import { useTheme } from "../../../../hooks/useTheme";
import "./SingleQuizDetails.css";

const SingleQuizDetails = ({ question, i }) => {
  const [rightAns, setRightAns] = useState("");
  const [wrongAns, setwrongAns] = useState("");
  const { questions, options, currect_ans } = question;
  const { theme } = useTheme();
  const addQuizOption = (option) => {
    const currectAns = currect_ans;
    const clickedOption = option;
    if (currectAns === clickedOption) {
      setRightAns("You Clicked Correct Answer");
      setwrongAns('')
    } else {
        setwrongAns("You Clicked Wrong Answer");
        setRightAns('');
    }
  };
  return (
    <div className="single-quiz-details bg-neutral-content">
      <h5
        className={`${theme === "dark" ? "text-[#74c365]" : "text-[#0099da]"}`}
      >
        {i + 1}. {questions}
      </h5>
      {options.map((option, i) => (
        <div key={i}>
          <label className="quiz_options">
            <input
              onClick={() => addQuizOption(option)}
              type="radio"
              name={question._id}
              id=""
            />
            {option}
          </label>
        </div>
      ))}
      <p className="text-green-500 text-xl">{rightAns}</p>
      <p className="text-red-500 text-xl">{wrongAns}</p>
    </div>
  );
};

export default SingleQuizDetails;
