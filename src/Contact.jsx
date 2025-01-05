import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="get-in-touch">
      {/* Header and Message */}
      <div className="header-section">
        <h1>Get in Touch</h1>
        <p>
          If you have any idea or project to build on the latest AI or anything
          you'd like to discuss, feel free to reach out to me!
        </p>
      </div>

      {/* Content Section */}
      <div className="content-section">
        {/* Left Section */}
        <div className="left-section">
          <h2>Contact Details</h2>
          <p>
            <strong>Mobile:</strong> +1-234-567-8901
          </p>
          <p>
            <strong>Email:</strong> example@example.com
          </p>
          <p>
            <strong>Address:</strong> 123 AI Lane, Innovation City, Techland
          </p>
        </div>

        {/* Right Section */}
        <div className="right-section">
          <form className="contact-form">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email" required />
            <textarea
              placeholder="Message"
              rows="5"
              required
            ></textarea>
            <input type="file" id="attachment" />
            <button type="submit" className="send-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;