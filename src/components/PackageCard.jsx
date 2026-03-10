import PropTypes from "prop-types";
import { FaCheck, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { TourPackageSchema } from "./SchemaMarkup";
import "./PackageCard.css";

const PackageCard = ({ pkg }) => {
  const whatsappMsg = encodeURIComponent(
    `Hi! I'm interested in the "${pkg.title}" (${pkg.duration}) tour package. Could you share more details?`
  );

  return (
    <div className="card">
      <TourPackageSchema packageData={pkg} />
      <div className="card__image-wrapper">
        <img src={pkg.image} alt={pkg.title} className="card__image" loading="lazy" />
        <span className="card__badge">{pkg.duration}</span>
      </div>

      <div className="card__body">
        <h3 className="card__title">{pkg.title}</h3>

        <div className="card__details">
          <h4 className="card__details-heading">Package Includes</h4>
          <ul className="card__list">
            {pkg.highlights.map((item, idx) => (
              <li key={idx}>
                <FaCheck className="card__check" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="card__price-section">
          {pkg.price ? (
            <>
              <span className="card__price">{pkg.price}</span>
              <span className="card__price-label">{pkg.priceLabel}</span>
            </>
          ) : (
            <span className="card__quote">{pkg.priceLabel}</span>
          )}
        </div>

        <div className="card__actions">
          <a
            href={`https://wa.me/94775458878?text=${whatsappMsg}`}
            className="card__btn card__btn--primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp /> Inquire Now
          </a>
          <a href="tel:+94775458878" className="card__btn card__btn--secondary">
            <FaPhoneAlt /> Call Now
          </a>
        </div>
      </div>
    </div>
  );
};

PackageCard.propTypes = {
  pkg: PropTypes.shape({
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.string,
    priceLabel: PropTypes.string.isRequired,
    highlights: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default PackageCard;
