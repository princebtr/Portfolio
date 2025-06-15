import React from "react";
import "./contact.css";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <section id="contact" className="section-edu">
        <h2>Contact Me</h2>
        <div className="contact-container card">
          <div className="contact-left">
            <img
              src="https://th.bing.com/th/id/OIP.7ClSx2zn8E9IDJYl5STJ7QHaE8?rs=1&pid=ImgDetMain"
              alt="contact"
            />
          </div>
          <div className="contact-right">
            <p className="contact-title">Contact With</p>
            <div className="social-icons">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <FaLinkedin className="icon" />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <FaGithub className="icon" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FaFacebook className="icon" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FaInstagram className="icon" />
              </a>
            </div>

            <div className="divider">OR</div>

            <form className="contact-form">
              <input type="text" placeholder="Enter your Name" />
              <input type="email" placeholder="Enter Your Email Address" />
              <textarea rows="4" placeholder="Write your message"></textarea>
              <button type="submit">SEND MESSAGE</button>
            </form>
          </div>
        </div>
      </section>

      <div className="contact-container card">
        <div className="footer">
          <p className="contact-title">
            Made with <span className="heart">❤️</span> by{" Prince Kumar"}
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
