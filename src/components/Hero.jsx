import { ShoppingBag, Home as HomeIcon, Users, Clock, ArrowRight, HeartPulse, ShieldCheck, Scale } from 'lucide-react';
import truckBg from '../assets/images/2.png';
import logoImg from '../assets/images/KSMCM LOGO.png';

export default function Hero({ onNavClick }) {
  return (
    <section id="home" className="hero-section-transparent">
      <div className="hero-bg-wrapper">
        <img src={truckBg} className="hero-bg-img" alt="Sunset rural landscape with KSMCM ecosystem" />
        <div className="hero-bg-overlay"></div>
      </div>

      <div className="container hero-container-grid">
        <div className="hero-info-column">
          <div className="hero-status-pill">
            <span className="blinking-dot"></span>
            India's Leading Rural Commerce & Services Ecosystem
          </div>
          <h1 className="hero-main-title">
            Empowering <br />
            Rural India Through <br />
            <span className="text-green-brand">Commerce,</span> <br />
            <span className="text-gold-brand">Technology &</span> <br />
            <span className="text-green-brand">Opportunity</span>
          </h1>
          <p className="hero-subtext">
            Delivering 10,000+ products, healthcare, legal support, digital services, and employment opportunities to every village household.
          </p>
          <div className="hero-button-row">
            <a href="#contact" onClick={(e) => onNavClick('contact', e)} className="hero-btn-partner">
              <Users size={18} className="hero-btn-icon" />
              Become a Partner
            </a>
            <a href="#about" onClick={(e) => onNavClick('about', e)} className="hero-btn-mission">
              <HeartPulse size={18} className="hero-btn-icon" />
              Join our Mission
            </a>
            <a href="#services" onClick={(e) => onNavClick('services', e)} className="hero-btn-explore">
              Explore Ecosystem <ArrowRight size={16} className="hero-btn-icon-right" />
            </a>
          </div>
        </div>

        <div className="hero-visual-column">
          <div className="hero-card">
            <div className="hero-card-top-pill">
              <div className="hero-card-pill-label">Smart Mart</div>
              <div className="hero-card-pill-value">10,000+ Products</div>
            </div>
            <div className="hero-card-body">
              <div className="hero-card-ring"></div>
              <div className="hero-card-center">
                <div className="hero-card-logo">
                  <img src={logoImg} alt="KSMCM Logo" />
                </div>
                <div className="hero-card-title">KSMCM INDUSTRIES</div>
                <div className="hero-card-caption">Rural Commerce Ecosystem</div>
              </div>

              <div className="hero-service-card top-left">
                <HeartPulse size={18} className="hero-service-icon" />
                <div>
                  <div className="hero-service-label">Healthcare</div>
                  <div className="hero-service-desc">Doctor Consultation</div>
                </div>
              </div>

              <div className="hero-service-card top-right">
                <Scale size={18} className="hero-service-icon" />
                <div>
                  <div className="hero-service-label">Legal Services</div>
                  <div className="hero-service-desc">Expert Legal Guidance</div>
                </div>
              </div>

              <div className="hero-service-card bottom-left">
                <Users size={18} className="hero-service-icon" />
                <div>
                  <div className="hero-service-label">Women Empowerment</div>
                  <div className="hero-service-desc">Entrepreneur Opportunities</div>
                </div>
              </div>

              <div className="hero-service-card bottom-right">
                <ShieldCheck size={18} className="hero-service-icon" />
                <div>
                  <div className="hero-service-label">Dialaf Services</div>
                  <div className="hero-service-desc">Govt & Utility Services</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container hero-stats-bar-container">
        <div className="hero-stats-overlay-bar">
          <div className="hero-stat-col">
            <div className="stat-circle-icon">
              <ShoppingBag size={18} />
            </div>
            <div>
              <div className="stat-num-value">10,000+</div>
              <div className="stat-lbl-desc">Products Available</div>
            </div>
          </div>
          <div className="hero-stat-col">
            <div className="stat-circle-icon">
              <HomeIcon size={18} />
            </div>
            <div>
              <div className="stat-num-value">500+</div>
              <div className="stat-lbl-desc">Villages Connected</div>
            </div>
          </div>
          <div className="hero-stat-col">
            <div className="stat-circle-icon">
              <Users size={18} />
            </div>
            <div>
              <div className="stat-num-value">50,000+</div>
              <div className="stat-lbl-desc">Explore Ecosystem</div>
            </div>
          </div>
          <div className="hero-stat-col">
            <div className="stat-circle-icon">
              <Clock size={18} />
            </div>
            <div>
              <div className="stat-num-value">24/7</div>
              <div className="stat-lbl-desc">Quick Delivery</div>
            </div>
          </div>
        </div>

        <div className="hero-quote-overlay-banner">
          <div className="quote-banner-left">
            <span className="quote-marks">“</span> Empowering every village with <span className="highlight-text">technology, trust, and opportunity.</span> <span className="quote-marks">”</span>
          </div>
          <div className="quote-banner-right">
            -----KSMCM industries
          </div>
        </div>
      </div>
    </section>
  );
}
