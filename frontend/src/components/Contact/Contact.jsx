import React from "react";
import "./Contact.css";
import { github, linkedin, instagram } from "../assets";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-left">
        <h2>Contact</h2>
        <input type="text" placeholder="Your Name" />
        <textarea placeholder="Your Message"></textarea>
      </div>
      <div className="contact-right">
        <h2>Links</h2>
        <div className="links-list">
          <a href="https://github.com" className="link-item">
            <img src={github} alt="GitHub" />
            GitHub
          </a>
          <a href="https://linkedin.com" className="link-item">
            <img src={linkedin} alt="LinkedIn" />
            LinkedIn
          </a>
          <a href="https://twitter.com" className="link-item">
            <img src={instagram} alt="Twitter" />
            Twitter
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
