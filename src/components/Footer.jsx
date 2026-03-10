import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "./Logo";
import ScrollReveal from "./ScrollReveal";
import "./Footer.css";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollTo = (id) => {
    if (location.pathname !== "/") {
      navigate("/#" + id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const goHome = () => {
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <ScrollReveal animation="fade-up" delay={0}>
        <div className="footer__brand">
          <div className="footer__logo">
            <Logo size={60} />
            <span className="footer__logo-text">SK Tours</span>
          </div>
          <p className="footer__tagline">
            Your trusted partner for unforgettable Thailand experiences. Creating
            memories, one trip at a time.
          </p>
          <div className="footer__socials">
            <a href="https://wa.me/94775458878" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={150}>
        <div className="footer__section">
          <h4 className="footer__heading">Quick Links</h4>
          <ul className="footer__list">
            <li>
              <button className="footer__link-btn" onClick={goHome}>
                Home
              </button>
            </li>
            <li>
              <a href="#destinations" onClick={() => scrollTo("destinations")}>
                Destinations
              </a>
            </li>
            <li>
              <a href="#promotions" onClick={() => scrollTo("promotions")}>
                Promotions
              </a>
            </li>
            {/* <li>
              <a href="#videos" onClick={() => scrollTo("videos")}>
                Videos
              </a>
            </li> */}
            <li>
              <a href="#packages" onClick={() => scrollTo("packages")}>
                Tour Packages
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => scrollTo("contact")}>
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={300}>
        <div className="footer__section">
          <h4 className="footer__heading">Our Packages</h4>
          <ul className="footer__list">
            <li><a href="#packages" onClick={() => scrollTo("packages")}>Explore Bangkok</a></li>
            <li><a href="#packages" onClick={() => scrollTo("packages")}>Bangkok & Pattaya</a></li>
            <li><a href="#packages" onClick={() => scrollTo("packages")}>Bangkok & Phuket</a></li>
            <li><a href="#packages" onClick={() => scrollTo("packages")}>Explore Phuket</a></li>
            <li><a href="#packages" onClick={() => scrollTo("packages")}>Honeymoon Romance</a></li>
          </ul>
        </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={450}>
        <div className="footer__section">
          <h4 className="footer__heading">Contact</h4>
          <ul className="footer__contact-list">
            <li>
              <FaPhoneAlt className="footer__contact-icon" />
              <a href="tel:+94775458878">+94 77 545 8878</a>
            </li>
            <li>
              <FaEnvelope className="footer__contact-icon" />
              <a href="mailto:sasmithadasanayaka96@gmail.com" className="copyable">
                sasmithadasanayaka96@gmail.com
              </a>
            </li>
          </ul>
          <div className="footer__offices-list">
            <a
              href="https://www.google.com/maps/search/No.34+Market+Bangkok"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__office-item"
            >
              <FaMapMarkerAlt className="footer__contact-icon" />
              <span>Bangkok — No.34, Market, Bangkok</span>
            </a>
            <a
              href="https://www.google.com/maps/search/29B+Malamulla+West+Panadura+Sri+Lanka"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__office-item"
            >
              <FaMapMarkerAlt className="footer__contact-icon" />
              <span>Panadura — 29B, Malamulla West, Panadura</span>
            </a>
            <a
              href="https://www.google.com/maps/search/No.43+Kurunegala+Road+Kuliyapitiya+Sri+Lanka"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__office-item"
            >
              <FaMapMarkerAlt className="footer__contact-icon" />
              <span>Kuliyapitiya — No.43, Kurunegala Road</span>
            </a>
          </div>
        </div>
        </ScrollReveal>
      </div>

      {/* <div className="footer__partner">
        <div className="footer__partner-content">
          <span className="footer__partner-label">In partnership with</span>
          <a
            href="https://web.facebook.com/myvacationinternationaltravles"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__partner-link"
          >
            <img
              src="https://res.cloudinary.com/desenbguq/image/upload/v1772299776/partner-logo_hhhjcq.png"
              alt="My Vacation International Travels"
              className="footer__partner-logo"
            />
            <span className="footer__partner-name">My Vacation International Travels</span>
            <FaFacebookF className="footer__partner-fb" />
          </a>
        </div>
      </div> */}

      <div className="footer__bottom">
        <p>© 2026 SK Tours. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
