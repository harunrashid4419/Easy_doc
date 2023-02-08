import React from "react";
import { useTheme } from "../../../hooks/useTheme";

const SubMenu = ({ subMenu }) => {
  const { what, why, how, examples } = subMenu;
  const descriptions = what?.description.split("   ");
  const whyAnswer = why?.answer?.split("   ");
  const howAnswer = how?.answer?.split("   ");
  const exampleAnswer = examples?.answer?.split("   ");
  const codes = examples?.code?.split("   ");
  const { theme } = useTheme();

  return (
    <div>
      {/* what part start */}
      <h1 className="text-5xl font-bold text-center px-20 mb-10">
        {what?.title}
      </h1>
      <img src={what?.img} className="w-full" alt="" />
      <h2 className="text-3xl my-4 font-semibold">{what?.subTitle}</h2>
      <div className="space-y-4 text-xl">
        {descriptions.map((dscrpson, idx) => (
          <p className="text-primary" key={idx}>{dscrpson}</p>
        ))}
      </div>

      {/* why part start */}
      <h2 className="font-bold text-3xl mt-8 mb-4 text-base-content">{why?.question}</h2>
      <p className="text-2xl my-4 text-base-content">{why?.para1}</p>
      <div className="space-y-8 text-xl text-base-content">
        {whyAnswer && whyAnswer.map((answer, idx) => <p className="text-primary" key={idx}>{answer}</p>)}
      </div>

      {/* how part start */}
      <h2 className="text-3xl font-semibold my-6">{how?.heading}</h2>
      <p className="my-8 text-primary">{how?.para1}</p>
      <div className="space-y-4">
        {howAnswer &&
          howAnswer.map((answer, idx) => (
            <ul key={idx}>
              {/\d\./.test(answer) ? (
                <li className="text-xl font-bold">{answer}</li>
              ) : (
                <li>{answer}</li>
              )}
            </ul>
          ))}
      </div>

      {/* examples part start */}
      <h2 className="text-3xl font-semibold my-4">{examples?.heading}</h2>
      <p className="text-xl my-4 text-primary">{examples?.para1}</p>
      <div className="border-l-8 border-dotted border-indigo-600 ml-20 space-y-4">
        {exampleAnswer &&
          exampleAnswer.map((answer, idx) => (
            <ul key={idx} className="ml-2">
              {/#\d/.test(answer) ? (
                <li className="text-xl font-bold">{answer}</li>
              ) : (
                <li className="">{answer}</li>
              )}
            </ul>
          ))}
      </div>
      {codes && (
        <div
          className={`${
            theme === "dark" ? "bg-[#242729]" : "bg-[#242729]"
          } mockup-code`}
        >
          {codes &&
            codes.map((code, idx) => (
              <pre key={idx} className="text-gray-300">
                <code>{code}</code>
              </pre>
            ))}
        </div>
      )}
    </div>
  );
};

export default SubMenu;
