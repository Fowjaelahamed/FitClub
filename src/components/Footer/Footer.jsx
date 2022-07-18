import React from "react";
import "./Footer.css";
import insta from "../../assets/instagram.png";
import link from "../../assets/linkedin.png";
import git from "../../assets/github.png";
import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <div className="footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <img src={insta} alt="" />
          <img src={git} alt="" />
          <img src={link} alt="" />
        </div>
        <div className="logo-f">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="blur blur-f-1"></div>
      <div className="blur blur-f-2"></div>
    </div>
  );
};

export default Footer;
