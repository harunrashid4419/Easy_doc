import React from "react";
import Slider from "../../../Slider/Slider";
import Banner from "../Banner/Banner";
import RecommendedTopics from "../Card/RecommendedTopics";
import Contact from "../Contact/Contact";
import PremiumPage from "../PremiumPage/PremiumPage";
import QSN from "../QSN/QSN";
import SideBar from "../SideBar/SideBar";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <RecommendedTopics></RecommendedTopics>
      <Slider></Slider>
      <QSN></QSN>
      <PremiumPage></PremiumPage>
      <Contact></Contact>
      <SideBar></SideBar>
    </div>
  );
};

export default Home;
