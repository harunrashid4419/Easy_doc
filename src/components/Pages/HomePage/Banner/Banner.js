import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="bg-[url('https://img.freepik.com/free-photo/3d-render-books-stack-book-covers-textbook-bookmark-design_460848-11167.jpg?size=626&ext=jpg&ga=GA1.1.1815370125.1670900571')] bg-no-repeat bg-cover flex justify-center items-center md:py-36 py-16">
      <div className="text-white text-center container">
        <h1 className="lg:text-6xl md:text-6xl text-4xl mb-2 font-bold my-6">
          How can we help you?
        </h1>
        <h2 className="text-xl font-semibold">
          We are always ready to help you.
        </h2>
        <div className="my-5">
          <Link to="/documentation">
            <button className="btn btn-outline btn-accent">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
