import React, { useState } from "react";
import locationIcon from "../../../Images/locationIcon.svg";
import emailIcon from "../../../Images/emailIcon.svg";
import phoneIcon from "../../../Images/phoneIcon.svg";
import "./ContactUs.css";

const ContactUs = () => {

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      subject: subject.value,
      message: message.value,
    };
    console.log(conFom);
  };

  return (
    <div class="contactUsContainer">
      <div class="contactUsHeader">
        <h4>Contact Us</h4>
        <h1>Please Feel Free To Contact Us</h1>
      </div>
      <div class="contactUsBody">
        <div class="col1">
          <form className="contactUsForm" onSubmit={onSubmit}>
            <div class="row">
              <label htmlFor="name" hidden>
                Name
              </label>
              <input type="text" id="name" placeholder="Your Name" />
              <label htmlFor="email" hidden>
                Email
              </label>
              <input type="email" id="email" placeholder="Your Email" />
            </div>
            <div class="row">
              <label htmlFor="subject" hidden>
                Subject
              </label>
              <input type="text" id="subject" placeholder="Subject" />
            </div>
            <div class="row">
              <label htmlFor="message" hidden>
                Message
              </label>
              <textarea
                id="message"
                class="form-control bg-light border-0 px-4 py-3"
                rows="2"
                placeholder="Message"
              ></textarea>
            </div>
            <div class="row">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
        <div class="col2">
          <div class="contactInfo">
            <h2 class="title">Get In Touch</h2>
            <div className="body">
              <div class="row">
                <div class="Icon">
                  <img
                    src={locationIcon}
                    alt="Location Icon"
                    height="24"
                    width="24"
                  />
                </div>
                <div class="labelValue">
                  <h4 class="label">Our Office</h4>
                  <span class="value">123 Street, New York, USA</span>
                </div>
              </div>
              <div class="row">
                <div class="Icon">
                  <img
                    src={emailIcon}
                    alt="Location Icon"
                    height="24"
                    width="24"
                  />
                </div>
                <div class="labelValue">
                  <h4 class="label">Email Us</h4>
                  <span class="value">info@example.com</span>
                </div>
              </div>
              <div class="row">
                <div class="Icon">
                  <img
                    src={phoneIcon}
                    alt="Location Icon"
                    height="24"
                    width="24"
                  />
                </div>
                <div class="labelValue">
                  <h4 class="label">Call Us</h4>
                  <span class="value">+012 345 6789</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
