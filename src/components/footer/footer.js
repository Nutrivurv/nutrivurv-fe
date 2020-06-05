import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-secondary mt-5">
      <footer className="d-flex justify-content-around">
        <div className="p-2">
          <Link to="/" className="text-light">
            Home
          </Link>
        </div>
        <div className="p-2">
          <Link to="/about-us" className="text-light">
            About Us
          </Link>
        </div>
        <div className="p-2">
          <Link to="/contact" className="text-light">
            Contact
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
