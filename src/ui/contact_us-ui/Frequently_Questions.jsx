import React, { useState } from "react";
import "./Contact_Session.css";

const ContactSection = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(0);

  const faqData = [
    {
      id: 1,
      question: "What services do you provide?",
      answer:
        "We specialize in high-end UI/UX design, full-stack web development (React/Next.js), mobile app development, and technical consulting for startups.",
    },
    {
      id: 2,
      question: "How long does a project usually take?",
      answer:
        "Project timelines vary based on complexity and scope. Typically, a website project takes 4-8 weeks, while mobile apps may take 8-16 weeks.",
    },
    {
      id: 3,
      question: "Do you work with startups or individuals?",
      answer:
        "Yes, we work with both startups and individuals. We offer flexible engagement models tailored to your specific needs and budget.",
    },
    {
      id: 4,
      question: "Can we request custom features?",
      answer:
        "Absolutely! We specialize in custom development. Our team can build any feature or functionality you require for your project.",
    },
    {
      id: 5,
      question: "How do I start a project with your team?",
      answer:
        "Simply fill out the contact form above, and we will get back to you within 24 hours to discuss your project requirements and next steps.",
    },
    {
      id: 6,
      question: "How long will it take to complete my project?",
      answer:
        "Completion time depends on the project scope. We provide detailed timelines after the initial consultation and discovery phase.",
    },
    {
      id: 7,
      question: "Can you help if I already have a partially built project?",
      answer:
        "Yes, we can help with ongoing projects. We can audit your existing code, identify issues, and continue development seamlessly.",
    },
    {
      id: 8,
      question: "Do you provide maintenance after the project is finished?",
      answer:
        "Yes, we offer post-launch maintenance and support packages to ensure your project runs smoothly and securely.",
    },
    {
      id: 9,
      question: "Will my website be mobile-friendly and responsive?",
      answer:
        "Absolutely! All our projects are built with mobile-first approach, ensuring perfect responsiveness across all devices and screen sizes.",
    },
  ];

  /**
   * Handle form input changes
   */

  /**
   * Handle form submission
   */

  /**
   * Toggle FAQ accordion item
   */
  const toggleFAQ = (id) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  return (
    // {/* FAQ Section */}
    <section className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>

      <div className="faq-container">
        {faqData.map((item) => (
          <div
            key={item.id}
            className={`faq-item ${expandedFAQ === item.id ? "faq-item--expanded" : ""}`}
          >
            <button
              className="faq-item__header"
              onClick={() => toggleFAQ(item.id)}
              aria-expanded={expandedFAQ === item.id}
            >
              <span className="faq-item__question">{item.question}</span>
              <span className="faq-item__icon">
                <i className="fas fa-chevron-down"></i>
              </span>
            </button>

            {expandedFAQ === item.id && (
              <div className="faq-item__content">
                <p className="faq-item__answer">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
