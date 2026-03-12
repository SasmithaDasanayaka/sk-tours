import { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaPaperPlane,
} from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({ name: "", location: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `Hi! I'm ${form.name}\nFrom: ${form.location}\n\n${form.message}`
    );
    // Send message to business WhatsApp number
    globalThis.open(`https://wa.me/94775458878?text=${message}`, '_blank');
  };

  return (
    <section className="contact" id="contact">
      {/* CTA Banner */}
      <div className="contact__cta">
        <ScrollReveal animation="fade-up" duration={800}>
          <div className="contact__cta-content">
            <h2 className="contact__cta-title">
              Ready to Explore Thailand?
            </h2>
            <p className="contact__cta-text">
              Contact us today to customize your dream tour package
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Contact Section */}
      <div className="contact__container">
        <ScrollReveal animation="fade-right" delay={100}>
        <div className="contact__info">
          <h3 className="contact__heading">Get in Touch</h3>
          <p className="contact__subtext">
            Have questions or want a custom itinerary? Reach out to us — we'd
            love to help plan your Thai adventure!
          </p>

          <div className="contact__details">
            <a href="tel:+94775458878" className="contact__item">
              <div className="contact__icon">
                <FaPhoneAlt />
              </div>
              <div>
                <span className="contact__label">Phone</span>
                <span className="contact__value">+94 77 545 8878</span>
              </div>
            </a>

            <a
              href="https://wa.me/94775458878"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__item"
            >
              <div className="contact__icon contact__icon--green">
                <FaWhatsapp />
              </div>
              <div>
                <span className="contact__label">WhatsApp</span>
                <span className="contact__value">+94 77 545 8878</span>
              </div>
            </a>

            <a
              href="mailto:sasmithadasanayaka96@gmail.com"
              className="contact__item"
            >
              <div className="contact__icon">
                <FaEnvelope />
              </div>
              <div>
                <span className="contact__label">Email</span>
                <span className="contact__value copyable">
                  sasmithadasanayaka96@gmail.com
                </span>
              </div>
            </a>
          </div>

          <div className="contact__offices">
            <span className="contact__label">Our Offices</span>
            <div className="contact__offices-grid">
              <a
                href="https://www.google.com/maps/search/No.34+Market+Bangkok"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__office"
              >
                <FaMapMarkerAlt className="contact__office-pin" />
                <div>
                  <span className="contact__office-name">Bangkok Office</span>
                  <span className="contact__office-addr">No.34, Market, Bangkok</span>
                </div>
              </a>
              <a
                href="https://www.google.com/maps/search/29B+Malamulla+West+Panadura+Sri+Lanka"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__office"
              >
                <FaMapMarkerAlt className="contact__office-pin" />
                <div>
                  <span className="contact__office-name">Panadura Office</span>
                  <span className="contact__office-addr">29B, Malamulla West, Panadura, Colombo, Sri Lanka</span>
                </div>
              </a>
              <a
                href="https://www.google.com/maps/search/No.40+Kurunegala+Road+Kuliyapitiya+Sri+Lanka"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__office"
              >
                <FaMapMarkerAlt className="contact__office-pin" />
                <div>
                  <span className="contact__office-name">Kuliyapitiya Office</span>
                  <span className="contact__office-addr">No.40, Kurunegala Road, Kuliyapitiya, Kurunegala, Sri Lanka</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-left" delay={250}>
        <form className="contact__form" onSubmit={handleSubmit}>
          <h3 className="contact__heading">Send Us a Message</h3>
          <div className="contact__field">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div className="contact__field">
            <input
              type="text"
              name="location"
              placeholder="Your Location (City, Country)"
              required
              value={form.location}
              onChange={handleChange}
            />
          </div>
          <div className="contact__field">
            <textarea
              name="message"
              rows="4"
              placeholder="Tell us about your dream trip..."
              required
              value={form.message}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="contact__submit">
            <FaPaperPlane /> Send Message
          </button>
        </form>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Contact;
