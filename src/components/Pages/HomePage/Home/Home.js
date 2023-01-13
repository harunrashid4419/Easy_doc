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
      <Card></Card>
      <CustomerFeedBack></CustomerFeedBack>
      <FAQ></FAQ>
      <Contact></Contact>
    </div>
  );
};

export default Home;
