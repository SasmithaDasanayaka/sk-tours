import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

/**
 * Schema Markup Component for structured data
 * Helps search engines understand your content better
 */

// Organization Schema for the company
export const OrganizationSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: 'SK Tours',
    description: 'Thailand tour packages and travel services',
    url: 'https://SasmithaDasanayaka.github.io/sk-tours',
    logo: 'https://SasmithaDasanayaka.github.io/sk-tours/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: ['English'],
    },
    areaServed: {
      '@type': 'Country',
      name: 'Thailand',
    },
    sameAs: [
      // Add your social media links here
      'https://www.facebook.com/share/18Y7n2UpFE/?mibextid=wwXIfr',
      'https://wa.me/94775458878',
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

// Tour Package Schema
export const TourPackageSchema = ({ packageData }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: packageData.title,
    description: `${packageData.duration} tour package: ${packageData.highlights.join(', ')}`,
    image: packageData.image,
    touristType: 'Tourist',
    itinerary: {
      '@type': 'ItemList',
      itemListElement: packageData.highlights.map((highlight, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: highlight,
      })),
    },
    offers: {
      '@type': 'Offer',
      price: packageData.price || '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      priceValidUntil: '2026-12-31',
      description: packageData.priceLabel || 'Contact us for pricing',
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

TourPackageSchema.propTypes = {
  packageData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    highlights: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number,
    priceLabel: PropTypes.string,
  }).isRequired,
};

// Breadcrumb Schema
export const BreadcrumbSchema = ({ items }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

BreadcrumbSchema.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

// Website Schema
export const WebsiteSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'SK Tours',
    url: 'https://SasmithaDasanayaka.github.io/sk-tours',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://SasmithaDasanayaka.github.io/sk-tours?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};
