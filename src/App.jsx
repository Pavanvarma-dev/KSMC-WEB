import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustSection from "./components/TrustSection";
import PlatformSection from "./components/PlatformSection";
import StorySection from "./components/StorySection";
import ServicesSection from "./components/ServicesSection";
import TrustDeliverySection from "./components/TrustDeliverySection";
import AvailabilitySection from "./components/AvailabilitySection";
import DownloadSection from "./components/DownloadSection";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import ServicesPage from "./components/ServicesPage";

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.hash || "#home");

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || "#home");
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    if (currentPath && currentPath !== "#about" && currentPath !== "#services") {
      const id = currentPath.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        // Wait a small delay to make sure component has finished mounting/rendering
        const timer = setTimeout(() => {
          const el = document.getElementById(id);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }, 150);
        return () => clearTimeout(timer);
      }
    } else if (currentPath === "#about" || currentPath === "#services") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [currentPath]);

  const showAbout = currentPath === "#about";
  const showServices = currentPath === "#services";

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      {showAbout ? (
        <AboutUs />
      ) : showServices ? (
        <ServicesPage />
      ) : (
        <>
          <Hero />
          <TrustSection />
          <PlatformSection />
          <StorySection />
          <ServicesSection />
          <TrustDeliverySection />
          <AvailabilitySection />
          <DownloadSection />
        </>
      )}
      <Footer />
    </div>
  );
}

