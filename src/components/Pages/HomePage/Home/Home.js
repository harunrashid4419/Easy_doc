import React from "react";
import Banner from "../Banner/Banner";
import Card from "../Card/Card";
import Contact from "../Contact/Contact";
import CustomerFeedBack from "../CustomerFeedback/CustomerFeedBack";
import FAQ from "../FAQ/FAQ";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <CustomerFeedBack></CustomerFeedBack>
      <Contact></Contact>
      <Card></Card>
      <FAQ></FAQ>
    </div>
  );
};

export default Home;
