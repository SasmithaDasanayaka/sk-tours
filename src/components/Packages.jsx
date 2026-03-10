import PackageCard from "./PackageCard";
import ScrollReveal from "./ScrollReveal";
import packages from "../data/packages";
import "./Packages.css";

const Packages = () => {
  return (
    <section className="packages" id="packages">
      <div className="packages__container">
        <ScrollReveal animation="fade-up">
          <p className="packages__subtitle">Our Tour Packages</p>
          <h2 className="packages__title">
            Choose Your Perfect <span>Thai Adventure</span>
          </h2>
          <p className="packages__description">
            Handcrafted itineraries for every type of traveller. All packages include
            accommodation, transfers, and unforgettable experiences.
          </p>
        </ScrollReveal>
        <div className="packages__grid">
          {packages.map((pkg, index) => (
            <ScrollReveal key={pkg.id} animation="zoom-in" delay={index * 120} duration={600}>
              <PackageCard pkg={pkg} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
