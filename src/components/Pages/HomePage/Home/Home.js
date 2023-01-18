import React from "react";
import ProfileModal from "../../Profile/ProfileModal/ProfileModal";
import Banner from "../Banner/Banner";
import RecommendedTopics from "../Card/RecommendedTopics";
import Contact from "../Contact/Contact";
import CustomerFeedBack from "../CustomerFeedback/CustomerFeedBack";
import FAQ from "../FAQ/FAQ";

const Home = () => {
  return (
    <div>
      <ProfileModal></ProfileModal>
      <Banner></Banner>
      <RecommendedTopics></RecommendedTopics>
      <CustomerFeedBack></CustomerFeedBack>
      <FAQ></FAQ>
      <Contact></Contact>
    </div>
  );
};

export default Home;
