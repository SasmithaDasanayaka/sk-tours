const Logo = ({ size = 44 }) => (
  <img
    src="https://res.cloudinary.com/desenbguq/image/upload/v1774027621/logo_djyahg.png"
    alt="FlyMo Tours by SK Ventures Logo"
    width={size}
    height={size}
    style={{ display: 'block', borderRadius: '50%', objectFit: 'cover' }}
  />
);

export default Logo;
