# SK Thai Tours — Travel Website

A modern, responsive travel website for **SK Thai Tours**, built with React and Vite. Showcases tour destinations across Thailand with interactive brochures, image carousels, and WhatsApp integration.

## Features

- **Destination Brochures** — Detailed pages for Bangkok, Pattaya, and Phuket with places, activities, and experiences
- **Image Carousels** — Auto-scrolling and hover-triggered image galleries on brochure cards
- **Responsive Design** — Fully mobile-friendly layout with adaptive grids
- **WhatsApp Integration** — One-click WhatsApp chat for tour inquiries
- **Smooth Navigation** — Scroll-to-section navigation with hash-based routing
- **Optimized Images** — Compressed JPEGs for fast loading

## Tech Stack

- **React 19** with React Router v7
- **Vite** for fast development and builds
- **React Icons** for consistent iconography
- **CSS** with custom properties and responsive breakpoints

## Project Structure

```
src/
├── App.jsx                    # Routes and layout
├── components/
│   ├── Brochure.jsx/css       # Destination brochure pages with carousels
│   ├── Contact.jsx/css        # Contact form section
│   ├── Destinations.jsx/css   # Destination cards grid
│   ├── Footer.jsx/css         # Site footer
│   ├── Hero.jsx/css           # Landing hero section
│   ├── Navbar.jsx/css         # Navigation bar
│   ├── Packages.jsx/css       # Tour packages section
│   ├── PackageCard.jsx/css    # Individual package card
│   ├── ScrollToTop.jsx        # Hash-aware scroll management
│   ├── WhatsAppButton.jsx/css # Floating WhatsApp button
│   └── Logo.jsx               # SVG logo component
├── data/
│   ├── brochures.js           # Brochure content (places, images, descriptions)
│   └── packages.js            # Tour package data
public/
└── *.jpg                      # Optimized local images
```

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Scripts

| Command            | Description                        |
| ------------------ | ---------------------------------- |
| `npm run dev`      | Start Vite dev server with HMR     |
| `npm run build`    | Build optimized production bundle  |
| `npm run preview`  | Preview production build locally   |
| `npm run lint`     | Run ESLint checks                  |
