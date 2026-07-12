import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Trust from './components/Trust';
import About from './components/About';
import Bridge from './components/Bridge';
import Impact from './components/Impact';
import Services from './components/Services';
import TrustTech from './components/TrustTech';
import Availability from './components/Availability';
import Interested from './components/Interested';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import VideoModal from './components/VideoModal';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [showVideoModal, setShowVideoModal] = useState(false);

  // Smooth scroll handler
  const handleNavClick = (sectionId, e) => {
    e.preventDefault();
    setActiveTab(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Scroll listener for sticky active link mapping
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'impact', 'partners', 'careers', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveTab(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="landing-page">
      <Header activeTab={activeTab} onNavClick={handleNavClick} />
      <Hero onNavClick={handleNavClick} />
      <Trust />
      <About onNavClick={handleNavClick} />
      <Bridge onWatchVideoClick={() => setShowVideoModal(true)} />
      <Impact onNavClick={handleNavClick} onWatchVideoClick={() => setShowVideoModal(true)} />
      <Services onNavClick={handleNavClick} />
      <TrustTech />
      <Availability />
      <Interested />
      <Newsletter onNavClick={handleNavClick} />
      <Footer onNavClick={handleNavClick} />

      {showVideoModal && (
        <VideoModal onClose={() => setShowVideoModal(false)} />
      )}
    </div>
  );
}

export default App;
