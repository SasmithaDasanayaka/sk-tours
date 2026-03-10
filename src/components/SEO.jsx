import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

/**
 * SEO Component for managing meta tags, Open Graph, and Twitter Cards
 * @param {string} title - Page title
 * @param {string} description - Page description
 * @param {string} keywords - SEO keywords
 * @param {string} image - Open Graph image URL
 * @param {string} url - Canonical URL
 * @param {string} type - Open Graph type (website, article, etc.)
 */
const SEO = ({
  title = 'SK Tours | Thailand Tour Packages',
  description = 'Explore Thailand with SK Tours - Your trusted travel partner. Discover affordable Bangkok, Pattaya, Phuket tour packages with all-inclusive services.',
  keywords = 'Thailand tours, Bangkok packages, Pattaya tours, Phuket holidays, Thailand travel, tour packages, SK Tours',
  image = 'https://res.cloudinary.com/desenbguq/image/upload/v1772620492/photo-1508009603885-50cf7c579365_ury1y0.jpg',
  url = 'https://SasmithaDasanayaka.github.io/sk-tours',
  type = 'website',
}) => {
  const siteName = 'SK Tours';
  const twitterHandle = '@sktours';

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:site" content={twitterHandle} />
      <meta property="twitter:creator" content={twitterHandle} />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="SK Tours" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  type: PropTypes.string,
};

export default SEO;
