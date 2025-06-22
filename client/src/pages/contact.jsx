import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "./contact.css";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !msg) {
      return toast.error("Please provide all fields");
    }

    try {
      const res = await axios.post("/api/v1/portfolio/sendEmail", {
        name,
        email,
        msg,
      });

      if (res.data.success) {
        toast.success(res.data.message);
        setName("");
        setEmail("");
        setMsg("");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again later.");
    }
  };

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
              <a
                href="https://www.linkedin.com/in/princebtr/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="icon" />
              </a>
              <a
                href="https://github.com/princebtr"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="icon" />
              </a>
              <a
                href="https://leetcode.com/u/princebtr/"
                target="_blank"
                rel="noreferrer"
              >
                <SiLeetcode className="icon" />
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <FaFacebook className="icon" />
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <FaInstagram className="icon" />
              </a>
            </div>

            <div className="divider">OR</div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Enter Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                rows="4"
                placeholder="Write your message"
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
              ></textarea>
              <button type="submit">SEND MESSAGE</button>
            </form>
          </div>
        </div>
      </section>

      <div className="footer">
        <div className="footer">
          <p className="contact-title">
            Made with <span className="heart">❤️</span> by Prince Kumar
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
