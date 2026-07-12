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

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <Hero />
      <TrustSection />
      <PlatformSection />
      <StorySection />
      <ServicesSection />
      <TrustDeliverySection />
      <AvailabilitySection />
      <DownloadSection />
      <Footer />
    </div>
  );
}
