const Logo = ({ size = 44 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="SK Thai Tours Logo"
  >
    {/* Background circle */}
    <circle cx="60" cy="60" r="58" fill="#1a365d" stroke="#f6ad55" strokeWidth="3" />

    {/* Globe lines */}
    <ellipse cx="60" cy="60" rx="38" ry="38" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" fill="none" />
    <ellipse cx="60" cy="60" rx="20" ry="38" stroke="rgba(255,255,255,0.08)" strokeWidth="1" fill="none" />
    <line x1="22" y1="60" x2="98" y2="60" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />

    {/* Airplane silhouette - subtle, at top-right */}
    <g transform="translate(78, 22) rotate(35)" opacity="0.35">
      <path
        d="M0 0 L-6 3 L-18 -1 L-6 1 L-18 5 L-6 3 L0 6 L2 3 Z"
        fill="#f6ad55"
      />
    </g>

    {/* "S" letter */}
    <text
      x="36"
      y="74"
      fontFamily="'Playfair Display', Georgia, serif"
      fontSize="46"
      fontWeight="700"
      fill="#ffffff"
      letterSpacing="-1"
    >
      S
    </text>

    {/* "K" letter */}
    <text
      x="66"
      y="74"
      fontFamily="'Playfair Display', Georgia, serif"
      fontSize="46"
      fontWeight="700"
      fill="#f6ad55"
      letterSpacing="-1"
    >
      K
    </text>

    {/* "Tours" text in cursive below SK */}
    <defs>
      <linearGradient id="toursGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: '#f6ad55', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#fbd38d', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <text
      x="60"
      y="92"
      fontFamily="'Brush Script MT', 'Lucida Handwriting', cursive"
      fontSize="18"
      fontStyle="italic"
      fill="url(#toursGradient)"
      textAnchor="middle"
      letterSpacing="1"
    >
      Thai Tours
    </text>
    {/* Decorative underline swash */}
    <path
      d="M 35 93 Q 60 96, 85 93"
      stroke="#f6ad55"
      strokeWidth="0.8"
      fill="none"
      opacity="0.5"
      strokeLinecap="round"
    />
  </svg>
);

export default Logo;
