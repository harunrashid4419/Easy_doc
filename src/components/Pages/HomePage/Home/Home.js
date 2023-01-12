import React from "react";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import CustomerFeedBack from "../CustomerFeedback/CustomerFeedBack";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <CustomerFeedBack></CustomerFeedBack>
      <Contact></Contact>
    </div>
  );
};

export default Home;
