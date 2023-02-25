import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../../../Loader/Loader";
import Code from "../Code";

const MainConcept = () => {
  const [mainConcept, setMainConcept] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    fetch(`https://easy-doc-server.vercel.app/main-concept/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setMainConcept(data);
      });
  }, [id]);

  if (loading) {
    return Loader;
  }

  const {
    title,
    first,
    firstYellow,
    second,
    secondBlack,
    secondYellow,
    third,
    thirdHeader,
    thirdBlack,
    forth,
    forthBlack,
    forthHeader,
    fifth,
    fifthYellow,
    fifthBlack,
    fifthHeader,
    sixth,
    sixthBlack,
    sixthYellow,
    sixthImg,
    seventhHeader,
    seventhBlack,
    eight,
    eightBlack,
    nineth,
    ninethHeader,
    ninethBlack,
    tenth,
    tenthHeader,
    tenthBlack,
    eleventh,
    eleventhYellow,
    eleventhBlack,
    twelve,
    twelveBlack,
    twelveHeader,
    thirteen,
    thirteenBlack,
    thirteenImgTwo,
    fourteen,
    fourteenBlack,
    fourteenHeader,
    fourteenNumber,
    fifteen,
    fifteenBlack,
    fifteenNumber,
    sixteen,
    sixteenBlack,
    seventeen,
    seventeenBlack,
    seventeenYellow,
    eighteen,
    eighteenBlack,
    nineteen,
    twenty,
    twentyBlack,
    twentyOne,
    twentyOneBlack,
    twentyTwo,
    twentyTwoHeader,
    twentyThree,
    twentyFour,
    twentyFive,
  } = mainConcept;

  const firsts = first?.split("   ");
  const firstYellows = firstYellow?.split("   ");
  const seconds = second?.split("   ");
  const secondBlacks = secondBlack?.split("   ");
  const secondYellows = secondYellow?.split("   ");
  const thirds = third?.split("   ");
  const thirdBlacks = thirdBlack?.split("   ");
  const forths = forth?.split("   ");
  const forthBlacks = forthBlack?.split("   ");
  const fifths = fifth?.split("   ");
  const fifthYellows = fifthYellow?.split("   ");
  const fifthBlacks = fifthBlack?.split("   ");
  const sixths = sixth?.split("   ");
  const sixthBlacks = sixthBlack?.split("   ");
  const sixthYellows = sixthYellow?.split("   ");
  const seventhBlacks = seventhBlack?.split("   ");
  const eights = eight?.split("   ");
  const eightBlacks = eightBlack?.split("   ");
  const nineths = nineth?.split("   ");
  const ninethBlacks = ninethBlack?.split("   ");
  const tenths = tenth?.split("   ");
  const tenthBlacks = tenthBlack?.split("   ");
  const elevenths = eleventh?.split("   ");
  const eleventhYellows = eleventhYellow?.split("   ");
  const eleventhBlacks = eleventhBlack?.split("   ");
  const twelves = twelve?.split("   ");
  const twelveBlacks = twelveBlack?.split("   ");
  const thirteens = thirteen?.split("   ");
  const thirteenBlacks = thirteenBlack?.split("   ");
  const fourteens = fourteen?.split("   ");
  const fourteenBlacks = fourteenBlack?.split("   ");
  const fourteenNumbers = fourteenNumber?.split("   ");
  const fifteens = fifteen?.split("   ");
  const fifteenBlacks = fifteenBlack?.split("   ");
  const fifteenNumbers = fifteenNumber?.split("   ");
  const sixteens = sixteen?.split("   ");
  const sixteenBlacks = sixteenBlack?.split("   ");
  const seventeens = seventeen?.split("   ");
  const seventeenBlacks = seventeenBlack?.split("   ");
  const seventeenYellows = seventeenYellow?.split("   ");
  const eighteens = eighteen?.split("   ");
  const eighteenBlacks = eighteenBlack?.split("   ");
  const nineteens = nineteen?.split("   ");
  const twentys = twenty?.split("   ");
  const twentyBlacks = twentyBlack?.split("   ");
  const twentyOnes = twentyOne?.split("   ");
  const twentyOneBlacks = twentyOneBlack?.split("   ");
  const twentyTwos = twentyTwo?.split("   ");
  const twentyThrees = twentyThree?.split("   ");
  const twentyFours = twentyFour?.split("   ");
  const twentyFives = twentyFive?.split("   ");

  return (
    <div className="py-8">
      <p className="text-6xl text-base-content">{title}</p>
      <p>
        {first &&
          firsts.map((firstPara, i) => (
            <div key={i} className="py-5 text-xl">
              {firstPara}
            </div>
          ))}
      </p>
      {firstYellow && (
        <div className="bg-base-300 p-5 my-8">
          {firstYellows.map((yellow, i) => (
            <Code key={i} yellow={yellow}></Code>
          ))}
        </div>
      )}
      <p>
        {second &&
          seconds.map((second, i) => (
            <div key={i} className="py-5 text-xl">
              {second}
            </div>
          ))}
      </p>
      {secondBlack && (
        <div className="mockup-code mb-3">
          {secondBlacks.map((code, i) => (
            <Code code={code} key={i}></Code>
          ))}
        </div>
      )}
      {secondYellow && (
        <div className="bg-base-300 p-5 my-8">
          {secondYellows.map((yellow, i) => (
            <Code key={i} yellow={yellow}></Code>
          ))}
        </div>
      )}
      <p>
        {third &&
          thirds.map((pera, i) => (
            <div key={i} className="py-3 text-xl">
              {pera}
            </div>
          ))}
      </p>
      {thirdHeader && (
        <h3 className="text-2xl font-bold py-3">{thirdHeader}</h3>
      )}
      {thirdBlack && (
        <div className="mockup-code mb-3">
          {thirdBlacks.map((code, i) => (
            <Code code={code} key={i}></Code>
          ))}
        </div>
      )}
      <p>
        {forth &&
          forths.map((pera, i) => (
            <div key={i} className="py-5 text-xl">
              {pera}
            </div>
          ))}
      </p>
      {forthBlack && (
        <div className="mockup-code mb-3">
          {forthBlacks.map((code, i) => (
            <Code code={code} key={i}></Code>
          ))}
        </div>
      )}
      {forthHeader && (
        <h3 className="text-2xl font-bold py-3">{forthHeader}</h3>
      )}
      <p>
        {fifth &&
          fifths.map((pera, i) => (
            <div key={i} className="py-5 text-xl">
              {pera}
            </div>
          ))}
      </p>
      {fifthYellow && (
        <div className="bg-base-300 p-5 my-8">
          {fifthYellows.map((yellow, i) => (
            <Code key={i} yellow={yellow}></Code>
          ))}
        </div>
      )}
      {fifthBlack && (
        <div className="mockup-code mb-3">
          {fifthBlacks.map((code, i) => (
            <Code code={code} key={i}></Code>
          ))}
        </div>
      )}
      {fifthHeader && (
        <h3 className="text-2xl font-bold py-3">{fifthHeader}</h3>
      )}
      {sixthImg && <img className="mx-auto" src={sixthImg} alt="" />}
      <p>
        {sixth &&
          sixths.map((pera, i) => (
            <div key={i} className="py-5 text-xl">
              {pera}
            </div>
          ))}
      </p>
      {sixthBlack && (
        <div className="mockup-code mb-3">
          {sixthBlacks.map((code, i) => (
            <Code code={code} key={i}></Code>
          ))}
        </div>
      )}
      {sixthYellow && (
        <div className="bg-base-300 p-5 my-8">
          {sixthYellows.map((yellow, i) => (
            <Code key={i} yellow={yellow}></Code>
          ))}
        </div>
      )}
      {seventhHeader && (
        <h3 className="text-2xl font-bold py-3">{seventhHeader}</h3>
      )}
      {seventhBlack && (
        <div className="mockup-code mb-3">
          {seventhBlacks.map((code, i) => (
            <Code code={code} key={i}></Code>
          ))}
        </div>
      )}
      <p>
        {eight &&
          eights.map((pera, i) => (
            <div key={i} className="py-5 text-xl">
              {pera}
            </div>
          ))}
      </p>
      {eightBlack && (
        <div className="mockup-code mb-3">
          {eightBlacks.map((code, i) => (
            <Code code={code} key={i}></Code>
          ))}
        </div>
      )}
      <p>
        {nineth &&
          nineths.map((pera, i) => (
            <div key={i} className="py-5 text-xl">
              {pera}
            </div>
          ))}
      </p>
      {ninethHeader && (
        <h3 className="text-2xl font-bold py-3">{ninethHeader}</h3>
      )}
      {ninethBlack && (
        <div className="mockup-code mb-3">
          {ninethBlacks.map((code, i) => (
            <Code code={code} key={i}></Code>
          ))}
        </div>
      )}
      <p>
        {tenth &&
          tenths.map((pera, i) => (
            <div key={i} className="py-5 text-xl">
              {pera}
            </div>
          ))}
      </p>
      {tenthHeader && (
        <h3 className="text-2xl font-bold py-3">{tenthHeader}</h3>
      )}
      {tenthBlack && (
        <div className="mockup-code mb-3">
          {tenthBlacks.map((code, i) => (
            <Code code={code} key={i}></Code>
          ))}
        </div>
      )}
      <p>
        {eleventh &&
          elevenths.map((pera, i) => (
            <div key={i} className="py-5 text-xl">
              {pera}
            </div>
          ))}
      </p>
      {eleventhYellow && (
        <div className="bg-base-300 p-5 my-8">
          {eleventhYellows.map((yellow, i) => (
            <Code key={i} yellow={yellow}></Code>
          ))}
        </div>
      )}
      {eleventhBlack && (
        <div className="mockup-code mb-3">
          {eleventhBlacks.map((code, i) => (
            <Code code={code} key={i}></Code>
          ))}
        </div>
      )}
      <p>
        {twelve &&
          twelves.map((pera, i) => (
            <div key={i} className="py-5 text-xl">
              {pera}
            </div>
          ))}
      </p>
      {twelveBlack && (
        <div className="mockup-code mb-3">
          {twelveBlacks.map((code, i) => (
            <Code code={code} key={i}></Code>
          ))}
        </div>
      )}
      {twelveHeader && (
        <h3 className="text-2xl font-bold py-3">{twelveHeader}</h3>
      )}
      <p>
        {thirteen &&
          thirteens.map((pera, i) => (
            <div key={i} className="py-5 text-xl">
              {pera}
            </div>
          ))}
      </p>
      {thirteenBlack && (
        <div className="mockup-code mb-3">
          {thirteenBlacks.map((code, i) => (
            <Code code={code} key={i}></Code>
          ))}
        </div>
      )}
      {thirteenImgTwo && (
        <img className="mx-auto" src={thirteenImgTwo} alt="" />
      )}
      <p>
        {fourteen &&
          fourteens.map((pera, i) => (
            <div key={i} className="py-5 text-xl">
              {pera}
            </div>
          ))}
      </p>
      {fourteenBlack && (
        <div className="mockup-code mb-3">
          {fourteenBlacks.map((code, i) => (
            <Code code={code} key={i}></Code>
          ))}
        </div>
      )}
      {fourteenHeader && (
        <h3 className="text-2xl font-bold py-3">{fourteenHeader}</h3>
      )}
      <p>
        {fourteenNumber &&
          fourteenNumbers.map((pera, i) => (
            <div key={i} className="py-2 text-xl">
              {i + 1}. {pera}
            </div>
          ))}
      </p>
      <p>
        {fifteen &&
          fifteens.map((pera, i) => (
            <div key={i} className="py-5 text-xl">
              {pera}
            </div>
          ))}
      </p>
      {fifteenBlack && (
        <div className="mockup-code mb-3">
          {fifteenBlacks.map((code, i) => (
            <Code code={code} key={i}></Code>
          ))}
        </div>
      )}
      <p>
        {fifteenNumber &&
          fifteenNumbers.map((pera, i) => (
            <div key={i} className="py-2 text-xl">
              {i + 1}. {pera}
            </div>
          ))}
      </p>
      <p>
        {sixteen &&
          sixteens.map((pera, i) => (
            <div key={i} className="py-5 text-xl">
              {pera}
            </div>
          ))}
      </p>
      {sixteenBlack && (
        <div className="mockup-code mb-3">
          {sixteenBlacks.map((code, i) => (
            <Code code={code} key={i}></Code>
          ))}
        </div>
      )}
      <p>
        {seventeen &&
          seventeens.map((pera, i) => (
            <div key={i} className="py-5 text-xl">
              {pera}
            </div>
          ))}
      </p>
      {seventeenBlack && (
        <div className="mockup-code mb-3">
          {seventeenBlacks.map((code, i) => (
            <Code code={code} key={i}></Code>
          ))}
        </div>
      )}
      {seventeenYellow && (
        <div className="bg-base-300 p-5 my-8">
          {seventeenYellows.map((yellow, i) => (
            <Code key={i} yellow={yellow}></Code>
          ))}
        </div>
      )}
      <p>
        {eighteen &&
          eighteens.map((pera, i) => (
            <div key={i} className="py-5 text-xl">
              {pera}
            </div>
          ))}
      </p>
      {eighteenBlack && (
        <div className="mockup-code mb-3">
          {eighteenBlacks.map((code, i) => (
            <Code code={code} key={i}></Code>
          ))}
        </div>
      )}
      <p>
        {nineteen &&
          nineteens.map((pera, i) => (
            <div key={i} className="py-5 text-xl">
              {pera}
            </div>
          ))}
      </p>
      <p>
        {twenty &&
          twentys.map((pera, i) => (
            <div key={i} className="py-5 text-xl">
              {pera}
            </div>
          ))}
      </p>
      {twentyBlack && (
        <div className="mockup-code mb-3">
          {twentyBlacks.map((code, i) => (
            <Code code={code} key={i}></Code>
          ))}
        </div>
      )}
      <p>
        {twentyOne &&
          twentyOnes.map((pera, i) => (
            <div key={i} className="py-5 text-xl">
              {pera}
            </div>
          ))}
      </p>
      {twentyOneBlack && (
        <div className="mockup-code mb-3">
          {twentyOneBlacks.map((code, i) => (
            <Code code={code} key={i}></Code>
          ))}
        </div>
      )}
      <p>
        {twentyTwo &&
          twentyTwos.map((pera, i) => (
            <div key={i} className="py-5 text-xl">
              {pera}
            </div>
          ))}
      </p>
      {twentyTwoHeader && (
        <h3 className="text-2xl font-bold py-3">{twentyTwoHeader}</h3>
      )}
      <p>
        {twentyThree &&
          twentyThrees.map((pera, i) => (
            <div key={i} className="py-5 text-xl">
              {pera}
            </div>
          ))}
      </p>
      <p>
        {twentyFour &&
          twentyFours.map((pera, i) => (
            <div key={i} className="py-5 text-xl">
              {pera}
            </div>
          ))}
      </p>
      <p>
        {twentyFive &&
          twentyFives.map((pera, i) => (
            <div key={i} className="py-5 text-xl">
              {pera}
            </div>
          ))}
      </p>
    </div>
  );
};

export default MainConcept;
