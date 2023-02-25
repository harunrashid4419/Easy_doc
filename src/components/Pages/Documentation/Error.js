import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchDataQuery } from "../../../features/api/apiSlice";

const Error = () => {
  const { id } = useParams();
  const { data: error, isLoading } = useFetchDataQuery(`/error/${id}`);
  if (isLoading) {
    return <p>Loading...</p>
  }
  const {
    title,
    titleSummury,
    subTitle,
    subTitleSummury,
    errorTypes,
    question,
    answer,
    exampleTitle,
    subExampleTitle,
    subExampleTitleSummury,
    code,
  } = error;
  const summuries = titleSummury?.split("   ");
  const types = errorTypes?.split("   ");
  const answers = answer?.split("   ");
  const codes = code?.split("   ");

  return (
    <div className="text-[1.2rem]">
      <h1 className="text-3xl md:text-5xl font-bold mt-10 mb-4">{title}</h1>
      <div className="space-y-4">
        {summuries && summuries.map((summury, idx) => <p key={idx}>{summury}</p>)}
      </div>
      <h3 className="text-2xl md:text-3xl font-bold mt-10 mb-4">{subTitle}</h3>
      <p>{subTitleSummury}</p>
      <div className="space-y-4">
        {types &&
          types.map((type, idx) => (
            <ul key={idx}>
              {type.includes("Error") ? (
                <li className="text-base md:text-xl text-blue-700 underline">
                  {type}
                </li>
              ) : (
                <li className="text-lg md:text-xl">{type}</li>
              )}
            </ul>
          ))}
      </div>
      <h3 className="text-xl md:text-2xl font-bold my-4">{question}</h3>
      <div>
        {answers && answers.map((answer, idx) => <p key={idx}>{answer}</p>)}
      </div>
      <h3 className="text-2xl md:text-3xl font-bold mt-10 mb-4">
        {exampleTitle}
      </h3>
      <h4 className="text-xl md:text-2xl font-bold mt-6 mb-4">
        {subExampleTitle}
      </h4>
      <p>{subExampleTitleSummury}</p>
      <div>
        {codes && (
          <div className="mockup-code overflow-x-scroll">
            {codes &&
              codes.map((code, idx) => (
                <pre key={idx} className="text-gray-300">
                  <code>{code}</code>
                </pre>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Error;
