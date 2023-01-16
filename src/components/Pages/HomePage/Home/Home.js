import React from "react";
import Slider from "../../../Slider/Slider";
import Banner from "../Banner/Banner";
import RecommendedTopics from "../Card/RecommendedTopics";
import Contact from "../Contact/Contact";
import FAQ from "../FAQ/FAQ";
import QSN from "../QSN/QSN";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <RecommendedTopics></RecommendedTopics>
      <Slider></Slider>
      <QSN></QSN>
      <FAQ></FAQ>
      <Contact></Contact>
    </div>
  );
};

export default Home;
