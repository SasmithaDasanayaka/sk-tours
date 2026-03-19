import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";
import "./Destinations.css";

const destinations = [
  {
    name: "Bangkok",
    slug: "explore-bangkok",
    tagline: "The City of Angels",
    image:
      "https://res.cloudinary.com/desenbguq/image/upload/v1772620492/photo-1508009603885-50cf7c579365_ury1y0.jpg",
    highlights: ["Grand Palace", "Floating Markets", "Buffet Dinner Cruise", "Dream World"],
  },
  {
    name: "Pattaya",
    slug: "explore-pattaya",
    tagline: "Beach Bliss & Coastal Fun",
    image:
      "https://res.cloudinary.com/desenbguq/image/upload/v1772455023/06749fe2dfee011eb0c6b48edba49ef29e3ffc0d-1600x1066_mawins.jpg",
    highlights: ["Coral Island", "Sanctuary of Truth", "Nong Nooch Garden", "Walking Street"],
  },
  {
    name: "Phuket",
    slug: "explore-phuket",
    tagline: "Beaches & Island Magic",
    image:
      "https://res.cloudinary.com/desenbguq/image/upload/v1772620252/photo-1589394815804-964ed0be2eb5_mf8nfz.jpg",
    highlights: ["Phi Phi Islands", "Maya Bay","James Bond Island", "Old Town", "Patong Beach"],
  },
];

const getCardAnimation = (index) => {
  if (index === 0) return "fade-right";
  if (index === 2) return "fade-left";
  return "fade-up";
};

const Destinations = () => {
  return (
    <section className="destinations" id="destinations">
      <div className="destinations__container">
        <ScrollReveal animation="fade-up">
          <p className="destinations__subtitle">Explore Thailand</p>
          <h2 className="destinations__title">
            Our <span>Destinations</span>
          </h2>
          <p className="destinations__description">
            Discover the best of Thailand through our curated destination guides.
            Click on any destination to explore places, activities, and experiences.
          </p>
        </ScrollReveal>

        <div className="destinations__grid">
          {destinations.map((dest, index) => (
            <ScrollReveal
              key={dest.slug}
              animation={getCardAnimation(index)}
              delay={index * 150}
            >
              <Link
                to={`/brochure/${dest.slug}`}
                className="dest-card"
              >
                <div className="dest-card__image-wrapper">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="dest-card__image"
                    loading="lazy"
                  />
                  <div className="dest-card__overlay" />
                  <div className="dest-card__content">
                    <span className="dest-card__tagline">{dest.tagline}</span>
                    <h3 className="dest-card__name">{dest.name}</h3>
                    <div className="dest-card__highlights">
                      {dest.highlights.map((h) => (
                        <span key={h} className="dest-card__tag">
                          <FaMapMarkerAlt /> {h}
                        </span>
                      ))}
                    </div>
                    <span className="dest-card__cta">
                      Explore Destination <FaArrowRight />
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
