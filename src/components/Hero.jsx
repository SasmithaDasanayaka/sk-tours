import { useState, useEffect, useCallback } from "react";
import { FaChevronDown } from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";
import "./Hero.css";

const heroImages = [
  "https://res.cloudinary.com/desenbguq/image/upload/v1772171514/hero-1_dohfa9.jpg",
  "https://res.cloudinary.com/desenbguq/image/upload/v1772170897/phuket-beitragsbild-adobestock-99867420-banana-republic_xnbjpy.jpg",
  "https://res.cloudinary.com/desenbguq/image/upload/hero-3_fnwlpo.png",
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextImage = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
      setIsTransitioning(false);
    }, 600);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, [nextImage]);

  const scrollToDestinations = () => {
    const el = document.getElementById("destinations");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero">
      {heroImages.map((img, index) => (
        <div
          key={img}
          className={`hero__bg-slide ${index === currentImage ? "hero__bg-slide--active" : ""} ${isTransitioning && index === currentImage ? "hero__bg-slide--exiting" : ""}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}
      <div className="hero__overlay" />

      <div className="hero__content">
        <ScrollReveal animation="fade-down" duration={800}>
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Welcome to SK Tours
          </div>
        </ScrollReveal>
        <ScrollReveal animation="fade-up" delay={200} duration={900}>
          <h1 className="hero__title">
            Explore the Magic of
            <br />
            <span className="hero__title-highlight">Thailand</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal animation="fade-up" delay={400} duration={900}>
          <p className="hero__description">
            From the vibrant streets of Bangkok to the pristine beaches of Phuket
            and Pattaya — let us craft your <strong>perfect Thai adventure.</strong>
          </p>
        </ScrollReveal>
        <ScrollReveal animation="fade-up" delay={600} duration={900}>
          <div className="hero__actions">
            <button className="hero__btn hero__btn--primary" onClick={scrollToDestinations}>
              Explore Destinations
            </button>
            <button
              className="hero__btn hero__btn--outline"
              onClick={() => {
                const el = document.getElementById("packages");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Packages
            </button>
          </div>
        </ScrollReveal>
      </div>

      <button className="hero__scroll" onClick={scrollToDestinations} aria-label="Scroll down">
        <FaChevronDown />
      </button>
    </section>
  );
};

export default Hero;
