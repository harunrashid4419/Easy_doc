import React from "react";
import useTitle from "../../../../Hook/useTitle";
import Slider from "../../../Slider/Slider";
import Banner from "../Banner/Banner";
import RecommendedTopics from "../Card/RecommendedTopics";
import PremiumPage from "../PremiumPage/PremiumPage";
import QSN from "../QSN/QSN";
import SideBar from "../SideBar/SideBar";

const Home = () => {
  useTitle('Home');
  return (
    <div>
      <Banner></Banner>
      <RecommendedTopics></RecommendedTopics>
      <Slider></Slider>
      <QSN></QSN>
      <PremiumPage></PremiumPage>
      <SideBar></SideBar>
    </div>
  );
};

export default Home;
