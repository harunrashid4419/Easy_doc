import React from "react";
import "./HomeContact.css";

const HomeContact = () => {
  return (
    <div className="container">
      <div className="main-contact">
        <div className="left">
          <h1>Great Customer</h1>
          <h1>Relationships start here.</h1>
        </div>
        <div className="right">
            <input type="email" placeholder="Your Email" />
            <button>Set Started</button>
        </div>
      </div>
    </div>
  );
};

export default HomeContact;
