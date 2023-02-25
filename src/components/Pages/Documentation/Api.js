import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Code from "./Code";

const Api = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [api, setApi] = useState({});

  useEffect(() => {
    setLoading(true);
    fetch(`https://easy-doc-server.vercel.app/apireference/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setApi(data);
        setLoading(false);
      });
  }, [id]);
  console.log(api);
  const {
    title,
    titleSummary,
    domcode1,
    titleSummary1,
    titleSummary2,
    titleSummary3,
    domcode2,
    title1,
    title1des,
    title2,
    title2des,
    title3,
    title3des,
    title4,
    title4des,
    title5,
    title5des,
    title6,
    title6des,
    title7,
    title7des,
    domcode7,
    title8,
    title8des,
    upyellowtitle,
    yellowtitle,
    domcode3,
    upcode4,
    domcode4,
    upcode5,
    upcode6,
    domcode5,
    upyellowtitle1,
    yellowtitle1,
    yellowtitle2,
    domcode6,
  } = api;
  console.log(api);
  const code1 = domcode1?.split("   ");
  const summarytitle2 = titleSummary2?.split("   ");
  const titledes1 = title1des?.split("   ");
  const titledes2 = title2des?.split("   ");
  const titledes7 = title7des?.split("   ");
  const titledes8 = title8des?.split("   ");
  // const codeup4=upcode4?.split("   ");
  // const code4=domcode4?.split("   ");
  // const codeup5=upcode5?.split("   ");
  // const code5=domcode5?.split("   ");
  const titleyellow = yellowtitle?.split("   ");
  // const title1yellow=yellowtitle1?.split("   ");
  // const title2yellow=yellowtitle2?.split("   ");
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <h1 className="text-3xl my-4 md:text-5xl font-bold">{title}</h1>
      <p className="text-lg md:text-xl my-8">{titleSummary}</p>
      <div>
        {code1 && (
          <>
            <div className="mockup-code">
              {code1 &&
                code1.map((code, i) => <Code code={code} key={i}></Code>)}
            </div>
          </>
        )}
      </div>
      <p className="text-lg md:text-xl my-8">{titleSummary1}</p>
      <p className="text-lg md:text-xl my-8">
        <div className="text-lg md:text-xl my-2">
          {summarytitle2 &&
            summarytitle2.map((summary2) => <p className="my-2">{summary2}</p>)}
        </div>
      </p>
      <p className="text-lg md:text-xl my-8">{titleSummary3}</p>
      <div>
        {domcode2 && (
          <>
            <div className="mockup-code">
              <pre data-prefix="$">
                <code>{domcode2}</code>
              </pre>
            </div>
          </>
        )}
      </div>
      <div className="my-6">
        <h2 className="text-3xl font-bold my-2">{title1}</h2>
        <p className="text-lg md:text-xl my-2">
          {titledes1 &&
            titledes1.map((title1d, i) => <p className="my-2">{title1d}</p>)}
        </p>
      </div>
      <div className="my-6">
        <h2 className="text-3xl font-bold my-2">{title2}</h2>
        <p className="text-lg md:text-xl my-2">
          {titledes2 &&
            titledes2.map((title2d, i) => <p className="my-2">{title2d}</p>)}
        </p>
      </div>
      <div className="my-6">
        <h2 className="text-3xl font-bold my-2">{title3}</h2>
        <p className="text-lg md:text-xl my-2">{title3des}</p>
      </div>
      <div className="my-6">
        <h2 className="text-3xl font-bold my-2">{title4}</h2>
        <p className="text-lg md:text-xl my-2">{title4des}</p>
      </div>
      <div className="my-6">
        <h2 className="text-3xl font-bold my-2">{title5}</h2>
        <p className="text-lg md:text-xl my-2">{title5des}</p>
      </div>
      <div className="my-6">
        <h2 className="text-3xl font-bold my-2">{title6}</h2>
        <p className="text-lg md:text-xl my-2">{title6des}</p>
      </div>
      <div className="my-6">
        <h2 className="text-3xl font-bold my-2">{title7}</h2>
        <p className="text-lg md:text-xl my-2">
          {titledes7 &&
            titledes7.map((title7d, i) => <p className="my-2">{title7d}</p>)}
        </p>
      </div>
      <div>
        {domcode7 && (
          <>
            <div className="mockup-code">
              <pre data-prefix="$">
                <code>{domcode7}</code>
              </pre>
            </div>
          </>
        )}
      </div>
      <div className="my-6">
        <h2 className="text-3xl font-bold my-2">{title8}</h2>
        <p className="text-lg md:text-xl my-2">
          {titledes8 &&
            titledes8.map((title8d, i) => <p className="my-2">{title8d}</p>)}
        </p>
      </div>
      <div className="my-2">
        <h1 className="text-2xl font-bold">{upyellowtitle}</h1>
        <p className="w-full bg-yellow-200">
          {titleyellow &&
            titleyellow.map((titley) => <p className="p-4">{titley}</p>)}
        </p>
      </div>
    </div>
  );
};

export default Api;
