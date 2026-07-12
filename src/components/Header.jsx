import { useState } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import logoImg from '../assets/images/KSMCM LOGO.png';

export default function Header({ activeTab, onNavClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (sectionId, e) => {
    onNavClick(sectionId, e);
    setMobileMenuOpen(false);
  };

  return (
    <header className="header-absolute">
      <div className="container header-container">
        <a href="#home" onClick={(e) => handleLinkClick('home', e)} className="logo-vertical">
          <img src={logoImg} className="logo-img-vert" alt="KSMCM Logo" />
          <div className="logo-text-vert">
            <span className="brand-title">KSMCM</span>
            <span className="brand-subtitle">INDUSTRIES</span>
          </div>
        </a>

        <nav className="main-nav-transparent">
          <a href="#home" onClick={(e) => handleLinkClick('home', e)} className={`nav-link-trans ${activeTab === 'home' ? 'active' : ''}`}>Home</a>
          <a href="#about" onClick={(e) => handleLinkClick('about', e)} className={`nav-link-trans ${activeTab === 'about' ? 'active' : ''}`}>About us</a>
          <a href="#services" onClick={(e) => handleLinkClick('services', e)} className={`nav-link-trans ${activeTab === 'services' ? 'active' : ''}`}>Services <span className="chevron-down">v</span></a>
          <a href="#impact" onClick={(e) => handleLinkClick('impact', e)} className={`nav-link-trans ${activeTab === 'impact' ? 'active' : ''}`}>Impact</a>
          <a href="#partners" onClick={(e) => handleLinkClick('partners', e)} className={`nav-link-trans ${activeTab === 'partners' ? 'active' : ''}`}>Partners</a>
          <a href="#careers" onClick={(e) => handleLinkClick('careers', e)} className={`nav-link-trans ${activeTab === 'careers' ? 'active' : ''}`}>Careers</a>
          <a href="#contact" onClick={(e) => handleLinkClick('contact', e)} className={`nav-link-trans ${activeTab === 'contact' ? 'active' : ''}`}>Contact</a>
        </nav>

        <button className="lang-switch-transparent">
          <Globe size={16} />
          <span>ENG v</span>
        </button>

        <button className="mobile-menu-toggle-trans" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer">
          <a href="#home" onClick={(e) => handleLinkClick('home', e)} className={activeTab === 'home' ? 'active' : ''}>Home</a>
          <a href="#about" onClick={(e) => handleLinkClick('about', e)} className={activeTab === 'about' ? 'active' : ''}>About us</a>
          <a href="#services" onClick={(e) => handleLinkClick('services', e)} className={activeTab === 'services' ? 'active' : ''}>Services</a>
          <a href="#impact" onClick={(e) => handleLinkClick('impact', e)} className={activeTab === 'impact' ? 'active' : ''}>Impact</a>
          <a href="#partners" onClick={(e) => handleLinkClick('partners', e)} className={activeTab === 'partners' ? 'active' : ''}>Partners</a>
          <a href="#careers" onClick={(e) => handleLinkClick('careers', e)} className={activeTab === 'careers' ? 'active' : ''}>Careers</a>
          <a href="#contact" onClick={(e) => handleLinkClick('contact', e)} className={activeTab === 'contact' ? 'active' : ''}>Contact</a>
        </div>
      )}
    </header>
  );
}
