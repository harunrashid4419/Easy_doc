import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from "../../../assets/Logo.png";
import "./Footer.css";
import { useTheme } from "../../../hooks/useTheme";

const Footer = () => {
  const { theme } = useTheme();
  return (
    <div className="main-footer-section bg-base-100">
      <div className="container">
        <div id="footer-section" className="pt-10 pb-5 text-white">
          <div>
            <img style={{ width: "90px" }} src={logo} alt="logo" />
            <p className="text-xl mt-2">
              EASY DOC
            </p>
            <p className="py-2">This is the documentation website. You improve your coding knowledge by reading the documentation.</p>
            <div className="social-icon">
              <Link>
                <FaFacebookF />
              </Link>
              <Link>
                <FaGithub />
              </Link>
              <Link>
                <FaTwitter />
              </Link>
              <Link>
                <FaYoutube />
              </Link>
            </div>
          </div>
          <div className="text-primary" id="doc-content">
            <p className={`footer-title ${theme === 'dark' ? 'text-[#f1f1f1]' : 'text-[#242729]'}`}>Doc Contents</p>
            <Link>Video</Link>
            <Link>List Style</Link>
            <Link>Tables</Link>
            <Link>Tooltip & Direction</Link>
            <Link>Keyboard Shortcuts</Link>
          </div>
          <div className="text-primary" id="doc-content">
            <p className={`footer-title ${theme === 'dark' ? 'text-[#f1f1f1]' : 'text-[#242729]'}`}>Doc Footnotes</p>
            <Link>Single Comun</Link>
            <Link>Two Columns</Link>
            <Link>Three Columns</Link>
            <Link>Four Columns</Link>
          </div>
          <div className="text-primary" id="doc-content">
            <p className={`footer-title ${theme === 'dark' ? 'text-[#f1f1f1]' : 'text-[#242729]'}`}>Doc Elements</p>
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
