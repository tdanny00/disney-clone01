import React, { useRef } from "react";
import "./Contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_269uda3",
        "template_f102jnf",
        form.current,
        "HI0k9O5S_wyUJGw4V"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Success!");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="contact__container" id="Contact">
      <div className="contact-title">
        <span className="contact-title1">
          Contact <span className="contact-about-primary">Me</span>
        </span>
        <a>Info</a>
      </div>
      <div className="contact">
        <div className="contact__details">
          <span className="contact__email">
            <AiOutlineMail className="contact__icons" />
            <h3>Email</h3>
            <small>tolgyesipontdani@gmail.com</small>
            <a href="mailto:tolgyesipontdani@gmail.com" target="_blank">
              Send Message
            </a>
          </span>
          <span className="contact__email">
            <AiOutlineWhatsApp className="contact__icons" />
            <h3>Phone</h3>
            <small>+36/20 342 8471</small>
            <a href="tel:+36203428471" target="_blank">
              Send Message
            </a>
          </span>
          <span className="contact__email">
            <BsLinkedin className="contact__icons" />
            <h3>LinkedIn</h3>
            <a>github.com/tdanny00</a>
            <a href="mailto:tolgyesipontdani@gmail.com" target="_blank">
              Send Message
            </a>
          </span>
        </div>
        <div className="contact__form">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              cols="30"
              rows="7"
              required
            />
            <button className="button" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
      <div className="contact__right"></div>
    </div>
  );
}

export default Contact;
