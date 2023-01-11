import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-10 bg-black text-base-content rounded">
        <div className="grid grid-flow-col gap-4 text-white">
          <Link>Home</Link>
          <Link>Document</Link>
          <Link>FAQ</Link>
          <Link>Contact</Link>
          <Link>Login</Link>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4 text-white">
            <Link>
              <FaFacebookF />
            </Link>
            <Link>
              <FaTwitter />
            </Link>
            <Link>
              <FaGithub />
            </Link>
            <Link>
              <FaYoutube />
            </Link>
          </div>
        </div>
        <div>
          <p className="text-white">Copyright © 2023 - Easy Doc</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
