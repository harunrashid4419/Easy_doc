import React from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="main-contact-section">
      <div className="container">
        <div className="contact-section">
          <div className="content">
            <h1>Great Customer</h1>
            <h1>Relationships start here</h1>
          </div>
          <div className="form">
            <div className="input-section">
              <input type="email" placeholder="Your Email" />
              <button>Get Started</button>
            </div>
            <div className="link">
              <Link>Messenger</Link>
              <Link>Product Tours</Link>
              <Link>Inbox and more</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
