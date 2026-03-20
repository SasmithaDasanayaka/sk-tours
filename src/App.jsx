import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Destinations from "./components/Destinations";
import Packages from "./components/Packages";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import BackToTop from "./components/BackToTop";
import Promotions from "./components/Promotions";
import Videos from "./components/Videos";
import Brochure from "./components/Brochure";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";
import SEO from "./components/SEO";
import { OrganizationSchema, WebsiteSchema } from "./components/SchemaMarkup";
import "./App.css";

function HomePage() {
  return (
    <>
      <SEO />
      <OrganizationSchema />
      <WebsiteSchema />
      <Hero />
      <Destinations />
      {/* <Promotions /> */}
      {/* <Videos /> */}
      <Packages />
      <Services />
      <Contact />
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/brochure/:slug" element={<Brochure />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </HelmetProvider>
  );
}

export default App
