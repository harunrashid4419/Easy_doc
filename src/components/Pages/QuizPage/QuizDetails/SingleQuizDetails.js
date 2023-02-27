import React, { useReducer } from "react";
import useTitle from "../../../../Hook/useTitle";
import { useTheme } from "../../../../hooks/useTheme";
import "./SingleQuizDetails.css";

const SingleQuizDetails = ({ question, i }) => {
  useTitle('Quiz Details');
  const { theme } = useTheme();
  const { questions, options, currect_ans } = question;
  const initialState = {
    value: "",
    disabled: false
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case currect_ans:
        return {
          ...state,
          value: action.value,
          disabled: true
        };
      default:
        return {
          ...state,
          value: `wrong${action.value}`,
          disabled: true
        };
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="single-quiz-details bg-neutral-content pt-4 pb-8 px-6">
      <h5
        className={`${theme === "dark" ? "text-white" : "text-fuchsia-800"
          } font-semibold text-2xl`}
      >
        {i + 1}. {questions}
      </h5>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {options?.[0] && (
          <button
            className={`bg-gray-400/30 ${state.value === "one" && "bg-green-500"
              } ${state.value === "wrongone" && "bg-red-500"
              } font-bold text-xl py-2 ${state.disabled ? 'btn-disabled' : ''}`}
            onClick={() => dispatch({ type: options[0], value: "one" })}
          >
            {options?.[0]}
          </button>
        )}

        {options?.[1] && (
          <button
            className={`bg-gray-400/30 ${state.value === "two" && "bg-green-500"
              } ${state.value === "wrongtwo" && "bg-red-500"
              } font-bold text-xl py-2 ${state.disabled ? 'btn-disabled' : ''}`}
            onClick={() => dispatch({ type: options[1], value: "two" })}
          >
            {options?.[1]}
          </button>
        )}

        {options?.[2] && (
          <button
            className={`bg-gray-400/30 ${state.value === "three" && "bg-green-500"
              } ${state.value === "wrongthree" && "bg-red-500"
              } font-bold text-xl py-2 ${state.disabled ? 'btn-disabled' : ''}`}
            onClick={() => dispatch({ type: options[2], value: "three" })}
          >
            {options?.[2]}
          </button>
        )}

        {options?.[3] && (
          <button
            className={`bg-gray-400/30 ${state.value === "four" && "bg-green-500"
              } ${state.value === "wrongfour" && "bg-red-500"
              } font-bold text-xl py-2 ${state.disabled ? 'btn-disabled' : ''}`}
            onClick={() => dispatch({ type: options[3], value: "four" })}
          >
            {options?.[3]}
          </button>
        )}
      </div>
      {
        state?.value.includes('wrong') &&
        <>
          <p className="text-error text-xl font-semi
          ">Your answer is wrong</p>
          <p className="text-success text-xl font-semi
          ">Correct answer is - <span className="font-bold">{currect_ans}</span></p>
        </>
      }
    </div>
  );
};

export default SingleQuizDetails;
