import React from "react";
import Banner from "../Banner/Banner";
import Card from "../Card/Card";
import Contact from "../Contact/Contact";
import CustomerFeedBack from "../CustomerFeedback/CustomerFeedBack";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <CustomerFeedBack></CustomerFeedBack>
      <Contact></Contact>
      <Card></Card>
    </div>
  );
};

export default Home;
