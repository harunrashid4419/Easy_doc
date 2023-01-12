import React from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="main-contact-section">
      <div className="container">
        <div className="contact-section">
          <h2>Get In Touch</h2>
          <input type="text" placeholder="Your Name" className="input w-full" />
          <input
            id="email-section"
            type="email"
            placeholder="Your Email"
            className="input w-full"
          />
          <textarea className="textarea" placeholder="Your Message"></textarea>
          <div className="button">
            <Link>Send Message</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
