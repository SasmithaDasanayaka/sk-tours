import { useState, useEffect, useCallback } from "react";
import { FaChevronLeft, FaChevronRight, FaWhatsapp, FaClock, FaFire, FaPercent, FaStar, FaPlane, FaHeart } from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";
import "./Promotions.css";

const promotions = [
  {
    id: 1,
    title: "Bangkok Explorer Deal",
    tagline: "Limited Time Offer",
    description:
      "Experience the best of Bangkok with our exclusive 4N/5D package. Includes accommodation, all transfers, daily buffet breakfast, Dream World, Safari World and Marine Park & a luxury buffet dinner cruise.",
    image:
      "https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=900&q=80",
    badge: "HOT DEAL",
    badgeIcon: "fire",
    highlights: ["Flight tickets","4 Nights Stay", "All Transfers", "Daily Buffet Breakfast", "Dream World + Safari World and Marine Park"],
    originalPrice: "LKR 235,900",
    offerPrice: "LKR 198,000",
    discount: "25% OFF",
    validUntil: "March 31, 2026",
    ctaText: "Grab This Deal",
  },
  // {
  //   id: 2,
  //   title: "Bangkok & Pattaya Combo",
  //   tagline: "Best Seller Package",
  //   description:
  //     "The ultimate Thailand experience! 5N/6D covering Bangkok's iconic sights and Pattaya's stunning beaches. Coral Island, Nong Nooch Garden, Dream World & more included.",
  //   image:
  //     "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=900&q=80",
  //   badge: "BEST SELLER",
  //   badgeIcon: "star",
  //   highlights: ["5 Nights Stay", "Bangkok + Pattaya", "Coral Island Tour", "Buffet Dinner Cruise"],
  //   originalPrice: "LKR 249,900",
  //   offerPrice: "LKR 189,900",
  //   discount: "25% OFF",
  //   validUntil: "March 31, 2026",
  //   ctaText: "Book Now",
  // },
  // {
  //   id: 3,
  //   title: "Bangkok City Saver",
  //   tagline: "Budget Friendly",
  //   description:
  //     "Perfect for first-timers! Enjoy 3N/4D in Bangkok with comfortable accommodation, airport transfers, daily buffet breakfast, city temple tour & a buffet dinner cruise experience.",
  //   image:
  //     "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=900&q=80",
  //   badge: "SAVE BIG",
  //   badgeIcon: "percent",
  //   highlights: ["3 Nights Stay", "Airport Transfers", "Temple Tour", "Buffet Dinner Cruise"],
  //   originalPrice: "LKR 139,900",
  //   offerPrice: "LKR 99,900",
  //   discount: "29% OFF",
  //   validUntil: "April 15, 2026",
  //   ctaText: "Claim Offer",
  // },
  // {
  //   id: 4,
  //   title: "Pattaya Beach Getaway",
  //   tagline: "New Arrival",
  //   description:
  //     "Add a Pattaya extension to your Bangkok trip! 2N/3D beach paradise with Coral Island snorkeling, Nong Nooch Tropical Garden visit & vibrant Walking Street nightlife.",
  //   image:
  //     "https://res.cloudinary.com/desenbguq/image/upload/v1772455023/06749fe2dfee011eb0c6b48edba49ef29e3ffc0d-1600x1066_mawins.jpg",
  //   badge: "NEW",
  //   badgeIcon: "plane",
  //   highlights: ["2 Nights Pattaya", "Coral Island", "Nong Nooch Garden", "All Transfers"],
  //   originalPrice: "LKR 109,900",
  //   offerPrice: "LKR 79,900",
  //   discount: "27% OFF",
  //   validUntil: "April 30, 2026",
  //   ctaText: "Get This Deal",
  // },
  {
    id: 5,
    title: "Honeymoon Paradise",
    tagline: "Romance Special",
    description:
      "Celebrate your love story in paradise! 5N/6D romantic escape with luxury stays, candlelit buffet dinner cruise, couples spa, beach sunset experience & private island tour. Create unforgettable memories together.",
    image:
      "https://res.cloudinary.com/desenbguq/image/upload/v1772937960/photo-1519046904884-53103b34b206_i9lrcv.jpg",
    badge: "ROMANCE",
    badgeIcon: "heart",
    highlights: ["Luxury Hotels", "Couples Spa Session", "Private Buffet Dinner Cruise", "Champagne & Flowers", "Honeymoon Suite"],
    originalPrice: "LKR 349,900",
    offerPrice: "LKR 279,900",
    discount: "20% OFF",
    validUntil: "June 30, 2026",
    ctaText: "Plan Your Romance",
  },
];

const getBadgeIcon = (type) => {
  switch (type) {
    case "fire": return <FaFire />;
    case "star": return <FaStar />;
    case "heart": return <FaHeart />;
    case "percent": return <FaPercent />;
    case "plane": return <FaPlane />;
    default: return <FaFire />;
  }
};

const Promotions = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = promotions.length;

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  const whatsappLink = (promo) => {
    const msg = encodeURIComponent(
      `Hi! I'm interested in the "${promo.title}" promotion (${promo.offerPrice}). Can I get more details?`
    );
    return `https://wa.me/94775458878?text=${msg}`;
  };

  return (
    <section className="promotions" id="promotions">
      <div className="promotions__container">
        <ScrollReveal animation="fade-up">
          <p className="promotions__subtitle">Special Offers</p>
          <h2 className="promotions__title">
            FlyMo Tours <span>Promotions</span>
          </h2>
          <p className="promotions__description">
            Don&apos;t miss out on our exclusive travel deals! Limited-time offers on
            the best Thailand experiences.
          </p>
        </ScrollReveal>

        <ScrollReveal animation="zoom-in" delay={200}>
          <div
            className="promotions__carousel"
            role="region"
            aria-label="Promotions carousel"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <button
              className="promotions__arrow promotions__arrow--left"
              onClick={prev}
              aria-label="Previous promotion"
            >
              <FaChevronLeft />
            </button>

            <div className="promotions__track">
              {promotions.map((promo, index) => (
                <div
                  key={promo.id}
                  className={`promo-card ${index === current ? "promo-card--active" : ""}`}
                  style={{
                    transform: `translateX(${(index - current) * 100}%)`,
                    opacity: index === current ? 1 : 0,
                    pointerEvents: index === current ? "auto" : "none",
                  }}
                >
                  <div className="promo-card__image-side">
                    <img src={promo.image} alt={promo.title} loading="lazy" />
                    <div className="promo-card__image-overlay" />
                    <div className={`promo-card__badge promo-card__badge--${promo.badgeIcon}`}>
                      {getBadgeIcon(promo.badgeIcon)}
                      <span>{promo.badge}</span>
                    </div>
                    <div className="promo-card__discount-tag">{promo.discount}</div>
                  </div>

                  <div className="promo-card__content">
                    <span className="promo-card__tagline">{promo.tagline}</span>
                    <h3 className="promo-card__title">{promo.title}</h3>
                    <p className="promo-card__desc">{promo.description}</p>

                    <div className="promo-card__highlights">
                      {promo.highlights.map((h) => (
                        <span key={h} className="promo-card__highlight">{h}</span>
                      ))}
                    </div>

                    <div className="promo-card__pricing">
                      <span className="promo-card__original">{promo.originalPrice}</span>
                      <span className="promo-card__offer">{promo.offerPrice}</span>
                      <span className="promo-card__per">per person</span>
                    </div>

                    <div className="promo-card__validity">
                      <FaClock />
                      <span>Valid until {promo.validUntil}</span>
                    </div>

                    <a
                      href={whatsappLink(promo)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="promo-card__cta"
                    >
                      <FaWhatsapp />
                      {promo.ctaText}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="promotions__arrow promotions__arrow--right"
              onClick={next}
              aria-label="Next promotion"
            >
              <FaChevronRight />
            </button>

            <div className="promotions__dots">
              {promotions.map((promo, i) => (
                <button
                  key={promo.id}
                  className={`promotions__dot ${i === current ? "promotions__dot--active" : ""}`}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to promotion ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Promotions;
