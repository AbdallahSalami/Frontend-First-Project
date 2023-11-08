import React, { useState } from 'react'
import './AboutUsPage.css'; // Import your custom CSS file

const ContactForm = () => {
  const [formStatus, setFormStatus] = useState('Send');

  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Submitting...');
    const { name, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(conFom);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-3">React Contact Form Component Example</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" className="form-control" required />
        </div>
        <div className="mb-3">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" className="form-control" required />
        </div>
        <div className="mb-3">
          <label htmlFor="message">Message</label>
          <textarea id="message" className="form-control" required />
        </div>
        <button type="submit" className="btn btn-danger">
          {formStatus}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
