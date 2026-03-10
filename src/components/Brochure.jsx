import { useState, useEffect, useCallback } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaWhatsapp, FaMapMarkerAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import brochures from "../data/brochures";
import SEO from "./SEO";
import { BreadcrumbSchema } from "./SchemaMarkup";
import "./Brochure.css";

const ImageCarousel = ({ images, alt, interval = 1800, hoverOnly = false }) => {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const goNext = useCallback(() => {
    setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
  }, [images.length]);

  useEffect(() => {
    const shouldRun = hoverOnly ? isHovered : true;
    if (!shouldRun) return;
    if (hoverOnly && isHovered) goNext();
    const timer = setInterval(goNext, interval);
    return () => clearInterval(timer);
  }, [goNext, interval, hoverOnly, isHovered]);

  const prev = (e) => {
    e.stopPropagation();
    setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  };

  const next = (e) => {
    e.stopPropagation();
    goNext();
  };

  return (
    <div
      className="brochure__carousel"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`${alt} ${i + 1}`}
          className={`brochure__card-img brochure__carousel-img ${i === current ? "brochure__carousel-img--active" : ""}`}
          loading="lazy"
        />
      ))}
      <button className="brochure__carousel-btn brochure__carousel-btn--prev" onClick={prev} aria-label="Previous image">
        <FaChevronLeft />
      </button>
      <button className="brochure__carousel-btn brochure__carousel-btn--next" onClick={next} aria-label="Next image">
        <FaChevronRight />
      </button>
      <div className="brochure__carousel-dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`brochure__carousel-dot ${i === current ? "brochure__carousel-dot--active" : ""}`}
            onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const Brochure = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const data = brochures[slug];

  const goBackToDestinations = () => {
    console.log("Back button clicked from:", slug);
    navigate("/", { state: { scrollTo: "destinations" } });
    setTimeout(() => {
      const el = document.getElementById("destinations");
      console.log("Destinations element:", el);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  if (!data) {
    return (
      <div className="brochure-not-found">
        <h2>Brochure not found</h2>
        <Link to="/" className="brochure__back-link">
          <FaArrowLeft /> Back to Home
        </Link>
      </div>
    );
  }

  const whatsappMsg = encodeURIComponent(
    `Hi! I'm interested in the "${data.title}" tour package. Could you share more details?`
  );

  const breadcrumbItems = [
    { name: "Home", url: "https://SasmithaDasanayaka.github.io/sk-tours/" },
    { name: data.title, url: `https://SasmithaDasanayaka.github.io/sk-tours/brochure/${slug}` },
  ];

  return (
    <div className="brochure">
      <SEO
        title={`${data.title} - ${data.subtitle} | SK Tours`}
        description={data.description}
        keywords={`${data.title}, Thailand travel, ${data.title} tour, Thailand attractions, SK Tours`}
        image={data.heroImage}
        url={`https://SasmithaDasanayaka.github.io/sk-tours/brochure/${slug}`}
        type="article"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      {/* Hero */}
      <section
        className="brochure__hero"
        style={{ backgroundImage: `url(${data.heroImage})` }}
      >
        <div className="brochure__hero-overlay" />
        <div className="brochure__hero-content">
          <button
            className="brochure__back"
            onClick={goBackToDestinations}
          >
            <FaArrowLeft /> Back to Destinations
          </button>
          <p className="brochure__hero-subtitle">{data.subtitle}</p>
          <h1 className="brochure__hero-title">{data.title}</h1>
          <p className="brochure__hero-desc">{data.description}</p>
        </div>
      </section>

      {/* Places Grid */}
      <section className="brochure__places">
        <div className="brochure__places-container">
          <div className="brochure__section-header">
            <p className="brochure__section-tag">
              <FaMapMarkerAlt /> Places, Activities & Experiences
            </p>
            <h2 className="brochure__section-title">
              Things to <span>See & Do</span>
            </h2>
          </div>

          <div className="brochure__grid">
            {data.places.map((place, idx) => (
              <div
                className={`brochure__card ${idx === 0 ? "brochure__card--featured" : ""}`}
                key={place.name}
              >
                <div className="brochure__card-img-wrapper">
                  {place.images ? (
                    <ImageCarousel
                      images={place.images}
                      alt={place.name}
                      hoverOnly={idx !== 0}
                    />
                  ) : (
                    <img
                      src={place.image}
                      alt={place.name}
                      className="brochure__card-img"
                      loading="lazy"
                    />
                  )}
                  <span className="brochure__card-tag">{place.tag}</span>
                </div>
                <div className="brochure__card-body">
                  <h3 className="brochure__card-name">{place.name}</h3>
                  <p className="brochure__card-desc">{place.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="brochure__cta">
        <div className="brochure__cta-content">
          <h2>Love what you see?</h2>
          <p>
            Let us plan this unforgettable adventure for you. Get in touch now!
          </p>
          <div className="brochure__cta-actions">
            <a
              href={`https://wa.me/94775458878?text=${whatsappMsg}`}
              className="brochure__cta-btn brochure__cta-btn--wa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp /> Chat on WhatsApp
            </a>
            <Link to="/#contact" className="brochure__cta-btn brochure__cta-btn--outline">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Brochure;
