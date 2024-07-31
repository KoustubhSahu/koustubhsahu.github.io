import React from "react";
import "./Contact.css";

const image = require.context("./icon", false, /\.(png|jpe?g|svg)$/);
const email = "sahukoustubh@gmail.com";
const Contact = () => {
  return (
    <div className="contact section" id="contact">
        <h2>Contact Me</h2>
        <div className="contact-container">
      <div className="contact-form-container">
        <div className="contact-form-content">          
          <div className="email-container">
            <img
              src={image("./gmail.svg")}
              className="email-icon"
              alt="email-icon"
            />
            <h3>{email}</h3>
          </div>

          <div className="contact-or">
            <hr /> <span> or </span>
          </div>

          <p>Feel free to reach out to me through the form below.</p>
          {/* Change to your action link from Formspree */}
          <form
            className="contact-form"
            method="POST"
            action="https://formspree.io/f/xjkbwyky"
          >
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send
            </button>
          </form>
        </div>
      </div>
      <div className="map-container"></div>
    </div>
    </div>
  );
};

export default Contact;
