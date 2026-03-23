import { useState } from "react";
import "./Contact_session.css";

const Form = () => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({
      fullName: "",
      email: "",
      subject: "",
      projectType: "Website Development",
      message: "",
    });
  };

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    projectType: "Website Development",
    message: "",
  });

  return (
    <div className="contact-section">
      {/* Contact Form Section */}
      <section className="contact-container">
        {/* Left Side - Contact Information */}
        <aside className="contact-info">
          <h2 className="contact-info__title">Get in Touch</h2>

          {/* Email Contact */}
          <div className="contact-item">
            <div className="contact-item__icon">
              <img
                src="/public/assets/contact/email-icon.png"
                alt="email-icon"
              />
            </div>
            <div className="contact-item__content">
              <h3 className="contact-item__label">Email Us</h3>
              <a href="mailto:r3a2@info.com" className="contact-item__value">
                r3a2@info.com
              </a>
              <p className="contact-item__description">
                Usually responds within 24 hours
              </p>
            </div>
          </div>

          {/* Phone Number */}
          <div className="contact-item">
            <div className="contact-item__icon">
              <img
                src="/public/assets/contact/whats-app-icon.png"
                alt="email-icon"
              />
            </div>
            <div className="contact-item__content">
              <h3 className="contact-item__label">Ph. Number</h3>
              <p className="contact-item__value">XXXXXXXXXXXX</p>
            </div>
          </div>

          {/* WhatsApp Support */}
          <div className="contact-item">
            <div className="contact-item__icon">
              <img
                src="/public/assets/contact/whats-app-icon.png"
                alt="email-icon"
              />{" "}
            </div>
            <div className="contact-item__content">
              <h3 className="contact-item__label">WhatsApp Support</h3>
              <p className="contact-item__value">+91 XXXXX XXXXX</p>
              <p className="contact-item__description">
                Quick responses for discussions
              </p>
            </div>
          </div>

          {/* Working Hours */}
          <div className="contact-item">
            <div className="contact-item__icon">
              <img
                src="/public/assets/contact/location-icon.png"
                alt="email-icon"
              />{" "}
            </div>
            <div className="contact-item__content">
              <h3 className="contact-item__label">Working Hours</h3>
              <p className="contact-item__value">
                Monday - Friday: 9:00 AM - 6:00 PM IST
              </p>
              <p className="contact-item__description">
                Saturday - Sunday: Closed
              </p>
            </div>
          </div>
        </aside>

        {/* Right Side - Contact Form */}
        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            {/* Full Name and Email Row */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fullName" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="form-input"
                  placeholder="Enter your name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder="email@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            {/* Subject and Project Type Row */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="form-input"
                  placeholder="Project inquiry"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="projectType" className="form-label">
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  className="form-select"
                  value={formData.projectType}
                  onChange={handleInputChange}
                >
                  <option value="Website Development">
                    Website Development
                  </option>
                  <option value="Mobile App">Mobile App</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Consulting">Consulting</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* Message Field */}
            <div className="form-group form-group--full">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                placeholder="Tell us more about your vision..."
                rows="6"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button type="submit" className="main-button submit-btn">
              <img
                src="/public/assets/contact/telegram-icon.png"
                alt="telegram-icon"
              />
              Start the project
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Form;
