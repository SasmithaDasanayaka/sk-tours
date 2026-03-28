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
  title = 'FlyMo Tours by SK Ventures | Thailand Tour Packages',
  description = 'Explore Thailand with FlyMo Tours - Your trusted travel partner. Discover affordable Bangkok, Pattaya, Phuket tour packages with all-inclusive services.',
  keywords = 'Thailand tours, Bangkok packages, Pattaya tours, Phuket holidays, Thailand travel, tour packages, FlyMo Tours, SK Ventures',
  image = 'https://res.cloudinary.com/desenbguq/image/upload/w_1200,h_630,c_fill,q_auto,f_jpg/v1774523436/Preview_xp7lof.jpg',
  url = 'https://flymotours.skventures.lk',
  type = 'website',
}) => {
  const siteName = 'FlyMo Tours by SK Ventures';
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
      <meta property="og:image:secure_url" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:alt" content={title} />
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
      <meta name="author" content="FlyMo Tours by SK Ventures" />
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
