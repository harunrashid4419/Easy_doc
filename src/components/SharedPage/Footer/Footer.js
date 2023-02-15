import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from "../../../assets/Logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="main-footer-section bg-base-100">
      <div className="container">
        <div id="footer-section" className="pt-10 pb-5 text-white">
          <div>
            <img style={{ width: "90px" }} src={logo} alt="logo" />
            <p className="text-xl mt-2 text-base-content">EASY DOC</p>
            <p className="py-2 text-base-content">
              This is the documentation website. You improve your coding
              knowledge by reading the documentation.
            </p>
            <div className="social-icon">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/mdharun.orrashid.79827"
              >
                <FaFacebookF />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/harunrashid4419/Easy_doc"
              >
                <FaGithub />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/?lang=en"
              >
                <FaTwitter />
              </a>
              <a
                rel="noreferrer"
                href="https://www.youtube.com/@codecademy"
                target="_blank"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
          <div className="text-primary" id="doc-content">
            <p className="footer-title text-primary">Doc Contents</p>
            <Link>Video</Link>
            <Link>List Style</Link>
            <Link>Tables</Link>
            <Link>Tooltip & Direction</Link>
            <Link>Keyboard Shortcuts</Link>
          </div>
          <div className="text-primary" id="doc-content">
            <p className="footer-title text-primary">Doc Footnotes</p>
            <Link>Single Comun</Link>
            <Link>Two Columns</Link>
            <Link>Three Columns</Link>
            <Link>Four Columns</Link>
          </div>
          <div className="text-primary" id="doc-content">
            <p className="footer-title text-primary">Doc Elements</p>
            <Link>Accordions Widget</Link>
            <Link>Tabs Widget</Link>
            <Link>Cheatsheet Widget</Link>
            <Link>Image Hotspots</Link>
            <Link>Notice / Message Widget</Link>
          </div>
        </div>
      </div>
      <hr />
      <div className="container">
        <div className="socket">
          <div className="socket-section">
            <Link>Blog</Link>
            <Link className="knowledge">Knowledgebase</Link>
          </div>
          <p>&copy; 2023 All Rights Reserved by Easy-Doc</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
