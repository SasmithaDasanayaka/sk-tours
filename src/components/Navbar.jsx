import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "./Logo";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/#" + id);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const goHome = () => {
    setMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__container">
        <button className="navbar__brand" onClick={goHome}>
          <Logo size={68} />
          <span className="navbar__name">SK Thai Tours</span>
        </button>

        <button
          className="navbar__toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}>
          <li>
            <a href="#destinations" onClick={() => scrollTo("destinations")}>
              Destinations
            </a>
          </li>
          <li>
            <a href="#packages" onClick={() => scrollTo("packages")}>
              Packages
            </a>
          </li>
          <li>
            <a href="#services" onClick={() => scrollTo("services")}>
              Services
            </a>
          </li>         
          <li>
            <a href="#contact" onClick={() => scrollTo("contact")}>
              Contact Us
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/94775458878"
              className="navbar__cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
