import React from "react";
import Banner from "../Banner/Banner";
import Card from "../Card/Card";
import RecommendedTopics from "../Card/RecommendedTopics";
import Contact from "../Contact/Contact";
import CustomerFeedBack from "../CustomerFeedback/CustomerFeedBack";
import FAQ from "../FAQ/FAQ";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <RecommendedTopics></RecommendedTopics>
      <CustomerFeedBack></CustomerFeedBack>
      <FAQ></FAQ>

      <Contact></Contact>
    </div>
  );
};

export default Home;
