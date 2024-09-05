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
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=prathammhavale38@gmail.com"
            className="link-item"
          >
            <img src={github} alt="GitHub" />
            Gmail
          </a>
          <a href="https://github.com/Victorblade38" className="link-item">
            <img src={github} alt="GitHub" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/pratham-mhavale"
            className="link-item"
          >
            <img src={linkedin} alt="LinkedIn" />
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/victorblade07"
            className="link-item"
          >
            <img src={instagram} alt="Instagram" />
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
