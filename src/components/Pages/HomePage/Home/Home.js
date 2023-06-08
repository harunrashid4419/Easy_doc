import React from "react";
import useTitle from "../../../../Hook/useTitle";
import Slider from "../../../Slider/Slider";
import Banner from "../Banner/Banner";
import RecommendedTopics from "../Card/RecommendedTopics";
import PremiumPage from "../PremiumPage/PremiumPage";
import QSN from "../QSN/QSN";
import SideBar from "../SideBar/SideBar";
import Knowledge from "../Knowledge/Knowledge";
import HomeContact from "../HomeContact/HomeContact";

const Home = () => {
  useTitle('Home');
  return (
    <>
      <Banner></Banner>
      <Knowledge></Knowledge>
      <RecommendedTopics></RecommendedTopics>
      <Slider></Slider>
      <QSN></QSN>
      <PremiumPage></PremiumPage>
      <SideBar></SideBar>
      <HomeContact></HomeContact>
    </>
  );
};

export default Home;
