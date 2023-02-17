import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useTheme } from "../../../hooks/useTheme";

const Installation = () => {
  const { theme } = useTheme();
  const { id = "63ee7862d9c11e46a7ec92ed" } = useParams();
  console.log(id);
  const [loading, setLoading] = useState(false);
  const [installation, setInstallation] = useState({});
  const {
    title,
    img1,
    img2,
    img3,
    subTitleSummury,
    dTitle,
    description,
    description1,
    description2,
    howTitle,
    howTitleSummury1,
    howTitleSummury2,
    titleSumm,
    answer,
    question,
    tipsTitle,
    allTips,
    titleSummuryYellow,
  } = installation;
  const tips = allTips?.split("   ");
  const answers = answer?.split("   ");
  const summuries = subTitleSummury?.split("   ");
  const summuries1 = howTitleSummury1?.split("   ");
  const summuries2 = howTitleSummury2?.split("   ");
  const summuries3 = titleSummuryYellow?.split("   ");

  useEffect(() => {
    setLoading(true);
    fetch(`https://easy-doc-server.vercel.app/installation/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setInstallation(data);
        setLoading(false);
      });
  }, [id]);
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <h1 className="text-3xl my-4 md:text-5xl font-bold mb-8">{title}</h1>
      <p className="text-lg md:text-xl mt-16">{titleSumm}</p>
      <img className="mt-4" src={img1} alt="" />
      <p className="text-lg md:text-xl w-3/4 my-4">{description}</p>
      <img src={img2} alt="" />
      <p className="text-lg md:text-xl w-3/4 my-4">{description1}</p>
      <h1 className="text-3xl mt-8">{dTitle}</h1>
      <p className="text-lg md:text-xl w-3/4 my-4">{description2}</p>
      <img src={img3} alt="" />
      <div className="space-y-4">
        {summuries &&
          summuries.map((summury, idx) => <p key={idx}>{summury}</p>)}
      </div>
      <div className={`space-y-4 w-full ${theme === 'dark' ? 'bg-[#171717]' : 'bg-yellow-200'} rounded-md mb-8`}>
        {summuries3 &&
          summuries3.map((summury, idx) => (
            <p className="text-lg md:text-xl p-4" key={idx}>
              {summury}
            </p>
          ))}
      </div>

      <h3 className="text-2xl md:text-3xl font-bold  mb-2">{question}</h3>
      <div className="space-y-4">
        {answers &&
          answers.map((answer, idx) => (
            <p className="text-lg md:text-xl" key={idx}>
              {answer}
            </p>
          ))}
      </div>

      <h3 className="text-2xl md:text-3xl my-10 mb-4 font-bold">{howTitle}</h3>

      <div className="space-y-4">
        {summuries1 &&
          summuries1.map((summury, idx) => (
            <ul key={idx}>
              {/\d\./.test(summury) ? (
                <li className="text-xl md:text-2xl font-bold">{summury}</li>
              ) : (
                <li className="text-lg md:text-xl">{summury}</li>
              )}
            </ul>
          ))}
      </div>

      <div className="space-y-2 mt-6">
        {summuries2 &&
          summuries2.map((summury, idx) => (
            <ul key={idx}>
              {/\d\./.test(summury) ? (
                <li className="text-xl md:text-2xl font-bold">{summury}</li>
              ) : (
                <li className="text-lg md:text-xl">{summury}</li>
              )}
            </ul>
          ))}
      </div>
      <h3 className="text-[2rem] font-bold my-6">{tipsTitle}</h3>
      <div className="">
        {tips &&
          tips.map((tip, idx) => (
            <ul key={idx}>
              {/\d\./.test(tip) ? (
                <li className="text-xl md:text-2xl font-semibold mt-6">
                  {tip}
                </li>
              ) : (
                <li className="text-lg md:text-xl">{tip}</li>
              )}
            </ul>
          ))}
      </div>
      <div className="space-y-4">
        {
          <div>
            <h3 className="text-xl font-medium md:text-2xl text-blue-700 md:font-bold ml-2 md:ml-6 ">
              {answer?.heading}
            </h3>
            <p className="ml-2 md:ml-6">{answer?.answer}</p>
          </div>
        }
      </div>
    </div>
  );
};

export default Installation;
