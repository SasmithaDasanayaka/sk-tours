import ScrollReveal from "./ScrollReveal";
import "./Services.css";

const Services = () => {
  const services = [
    {
      icon: "🏢",
      title: "Bangkok Branch 24/7",
      description:
        "Our Bangkok office operates round the clock to serve you anytime. Visit us for instant bookings, travel assistance, and personalized service whenever you need in Thailand.",
      tag: "24 Hours Service",
    },
    {
      icon: "✈️",
      title: "Private Thailand Tour Packages",
      description:
        "Expertly curated tour packages covering Bangkok, Pattaya, and Phuket with the best attractions, activities, and experiences at unbeatable prices.",
    },
    {
      icon: "🏨",
      title: "Hotel Reservations",
      description:
        "Book from our handpicked selection of Thailand's finest hotels, from beachfront resorts in Phuket to luxury stays in Bangkok.",
    },
    {
      icon: "🦶",
      title: "Complimentary Foot Massage",
      description:
        "Enjoy a relaxing traditional Thai foot massage on us! A complimentary wellness experience for our valued travelers at Bangkok.",
    },
    {
      icon: "🎯",
      title: "Customized Itineraries",
      description:
        "Tailor-made Thailand travel plans designed around your preferences, budget, and schedule for a truly personalized adventure.",
    },
    {
      icon: "📋",
      title: "Visa Assistance",
      description:
        "Complete support for Thailand visa applications and extensions, making your entry and stay hassle-free with expert guidance.",
    },
    {
      icon: "🚐",
      title: "Airport Transfers",
      description:
        "Comfortable and reliable airport pickup and drop-off services in Bangkok, Pattaya, and Phuket with professional drivers.",
    },
    {
      icon: "🚗",
      title: "Private Comfortable Vehicles",
      description:
        "Modern, air-conditioned vehicles for all your local transfers. Travel in comfort and style during your Thailand adventure with our premium fleet.",
    },
    {
      icon: "💰",
      title: "Best Price Guarantee",
      description:
        "Competitive rates on all Thailand tour packages and services with transparent pricing and no hidden costs.",
    },
  ];

  return (
    <section className="services" id="services">
      <div className="services__container">
        <ScrollReveal animation="fade-up">
          <div className="services__header">
            <p className="services__subtitle">OUR SERVICES</p>
            <h2 className="services__title">
              What We <span>Offer</span>
            </h2>
            <p className="services__description">
              Comprehensive travel solutions for unforgettable Thailand experiences
            </p>
          </div>
        </ScrollReveal>
        <div className="services__grid">
          {services.map((service, index) => (
            <ScrollReveal
              key={index}
              animation="fade-up"
              delay={index * 100}
            >
              <div className="service-card">
                {service.tag && (
                  <div className="service-card__tag">{service.tag}</div>
                )}
                <div className="service-card__icon">{service.icon}</div>
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__description">{service.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
