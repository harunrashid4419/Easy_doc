import React from "react";
import Payment from "../../../../Payment/Payment";
import Slider from "../../../Slider/Slider";
import Banner from "../Banner/Banner";
import RecommendedTopics from "../Card/RecommendedTopics";
import Contact from "../Contact/Contact";
import QSN from "../QSN/QSN";


const Home = () => {

  return (
    <div>
      <Banner></Banner>
      <RecommendedTopics></RecommendedTopics>
      <Slider></Slider>
      <QSN></QSN>
      <Payment></Payment>
      <Contact></Contact>
    </div>
  );
};

export default Home;
